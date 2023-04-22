import { CreateChatCompletionRequest, Configuration } from "openai";

export interface StreamChatCompletionHandler {
  onContent(content: any): void;
  onDone(content?: any): void;
  onError(error: any): void;
}

export class OpenAiStreamApi {
  protected basePath: string;
  protected configuration: Configuration | undefined;
  constructor(configuration?: Configuration) {
    this.basePath = configuration?.basePath || "https://api.openai.com/v1";
    this.configuration = configuration;
  }

  public async createChatCompletion(
    createChatCompletionRequest: CreateChatCompletionRequest,
    handler: StreamChatCompletionHandler
  ) {
    const url = `${this.basePath}/chat/completions`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.configuration?.apiKey}`,
      },
      body: JSON.stringify(createChatCompletionRequest),
    } as RequestInit;
    const res = await fetch(url, options);
    if (res.ok) {
      const contentType = res.headers.get("Content-Type") ?? "";
      if (!contentType.includes("stream")) {
        const content = await (
          await res.text()
        ).replace(/provided:.*. You/, "provided: ***. You");
        console.log("[Stream] error ", content);
        throw new Error(content);
      }
      let responseText = "";
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const content = await reader?.read();
        if (content?.done) {
          break;
        }
        const TextArr = decoder
          .decode(content?.value)
          .replace(/^\s*[\r\n]/gm, "")
          .split(/\n/);
        for (let i = 0; i < TextArr.length; i++) {
          let Text = TextArr[i].substring(6);
          if (Text !== "") {
            if (Text.trim() === "[DONE]") {
              return;
            } else {
              const response = JSON.parse(Text);
              if (response.choices?.[0]?.delta?.content) {
                responseText += response.choices[0].delta.content;
                await handler.onContent(responseText);
              }
            }
          }
        }
      }
      handler.onDone();
    } else {
      handler.onError(
        new Error(
          await (
            await res.text()
          ).replace(/provided:.*. You/, "provided: ***. You")
        )
      );
    }
  }
}
