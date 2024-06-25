import { OpenAI } from "openai";


export const getMessageList = async (openai: OpenAI, threadId: string): Promise<any[]> => {
    try {
        const messageList = await openai.beta.threads.messages.list(threadId);

        // Mapeo de la respuesta de OpenAI al tipo Message definido arriba
        const messages = messageList.data.map(message => ({
            role: message.role,
            content: message.content.map(content => content)
        }));
        
        return messages;
    } catch (error) {
        console.error("Error al obtener la lista de mensajes:", error);
        throw new Error("Error al obtener la lista de mensajes");
    }
};