import sendToLLM from "./functions/sendToLLM";

export default async function handler(req: any, res: any) {
  const parsedBody = JSON.parse(req.body);
  const { prompt, language } = parsedBody;

  if (!prompt || !language) {
    res.status(400).send("Missing required parameters");
    return;
  }

  const code_answer = await sendToLLM({
    stream: false,
    model: "gpt-3.5-turbo",
    temperature: 0.4,
    role: `
              You are a top AI developer agent, I want you to tell the developer how you would do their task, without writing any actual code.
              Write a couple short sentences explaining how you would do the task.
              Assume that you will write the code and that you have all the necessary files.
              IMPORTANT: Do not ask any questions, do not write any code.
              `,
    content: `
                  Task: "${prompt}" /n/n
                  The developer is programming with ${language}.
                  `,
  });

  res.status(200).send({ data: code_answer.response });
}
