import { OpenAIStream, StreamingTextResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAIStream = async ({ model, content, temperature, role }: any) => {
  const response = await openai.chat.completions.create({
    model: model,
    messages: [
      {
        role: "system",
        content: role,
      },
      {
        role: "user",
        content: content,
      },
    ],
    stream: true,
    temperature,
  });

  return response;
};

export default openAIStream;
