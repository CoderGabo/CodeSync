import { OpenAI } from "openai";

export const createMessage = async (openai: OpenAI, threadId: string, question: string): Promise<any> => {
    const message = await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: question,
    });

    return message;
};
