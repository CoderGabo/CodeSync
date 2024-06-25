import { OpenAI } from "openai";

export const createRun = async (openai: OpenAI, threadId: string, assistantId: string): Promise<any> => {
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
    });

    return run;
};
