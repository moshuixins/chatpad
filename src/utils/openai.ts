import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { db } from "../db";
import { defaultModel } from "./constants";

function getClient(apiKey: string, basePath: string) {
  const configuration = new Configuration({
    basePath,
    apiKey,
  });
  return new OpenAIApi(configuration);
}

export async function createChatCompletion(
  apiKey: string,
  messages: ChatCompletionRequestMessage[]
) {
  const settings = await db.settings.get("general");
  const model = settings?.openAiModel ?? defaultModel;

  const client = getClient(
    apiKey,
    process.env.OPENAI_API_BASE_PATH || "https://api.openai.com/v1"
  );
  return client.createChatCompletion({
    model,
    stream: false,
    messages,
  });
}

export async function checkOpenAIKey(apiKey: string) {
  return createChatCompletion(apiKey, [
    {
      role: "user",
      content: "hello",
    },
  ]);
}
