import { OpenAI } from "openai";
import { createMessage } from "./helpers/createMessage.helper";
import { createRun } from "./helpers/createRun.helper";
import { getMessageList } from "./helpers/getMessageList.helper";
import { checkCompleteStatus } from "./helpers/checkCompleteStatus.helper";

const apiKey = ''; 
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export const createThread = async (): Promise<string> => {
    try {
        const { id } = await openai.beta.threads.create();
        return id;
    } catch (error) {
        console.error("Error al crear el thread:", error);
        throw new Error("Error al crear el thread");
    }
};

export const userQuestion = async (threadId: string, question: string): Promise<any[]> => {
    const assistantId = 'asst_Jwl3PG6MFA8rLxeSLP5xXsMJ';

    try {
        await createMessage(openai, threadId, question);
        const run = await createRun(openai, threadId, assistantId);
        await checkCompleteStatus(openai, threadId, run.id);
        const messages = await getMessageList(openai, threadId);
        return messages.reverse();
    } catch (error) {
        console.error("Error al crear el mensaje:", error);
        throw new Error("Error al crear el mensaje");
    }
};

export const getMessages = async (threadId: string): Promise<any[]> => {
    try {
        const messages = await getMessageList(openai, threadId);
        return messages;
    } catch (error) {
        console.error("Error al crear el mensaje:", error);
        throw new Error("Error al crear el mensaje");
    }
};
