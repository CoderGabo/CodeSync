import { OpenAI } from "openai";

export const checkCompleteStatus = async (openai: OpenAI, threadId: string, runId: string): Promise<any> => {
    const runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);

    if (runStatus.status === 'completed') {
        return runStatus;
    }

    console.log(runStatus.status);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return await checkCompleteStatus(openai, threadId, runId);
};
