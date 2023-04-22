import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { db } from "../db";
import { defaultModel } from "./constants";
import { OpenAiStreamApi, StreamChatCompletionHandler } from "./openai-stream";

function getClient(apiKey: string, basePath: string) {
  const configuration = new Configuration({
    basePath,
    apiKey,
  });
  return new OpenAIApi(configuration);
}

function getStreamClient(apiKey: string, basePath: string) {
  const configuration = new Configuration({
    basePath,
    apiKey,
  });
  return new OpenAiStreamApi(configuration);
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
    messages,
  });
}

export async function createStreamChatCompletion(
  apiKey: string,
  messages: ChatCompletionRequestMessage[],
  handler: StreamChatCompletionHandler
) {
  const settings = await db.settings.get("general");
  const model = settings?.openAiModel ?? defaultModel;
  const client = getStreamClient(
    apiKey,
    process.env.OPENAI_API_BASE_PATH || "https://api.openai.com/v1"
  );
  return client.createChatCompletion(
    {
      model,
      messages,
      stream: true,
    },
    handler
  );
}

export async function checkOpenAIKey(apiKey: string) {
  return createChatCompletion(apiKey, [
    {
      role: "user",
      content: "hello",
    },
  ]);
}
