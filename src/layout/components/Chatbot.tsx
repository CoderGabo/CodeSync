import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Fab, IconButton, TextField, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { createThread, getMessages, userQuestion } from '../../chatbot/chatbot'; // Importar getMessageList

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

export const Chatbot = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [threadId, setThreadId] = useState<string | null>(null);
    const [chat, setChat] = useState<Message[]>([]);

    useEffect(() => {
        // Verificar si hay un threadId en localStorage al cargar el componente
        const storedThreadId = localStorage.getItem('threadId');
        if (storedThreadId) {
            setThreadId(storedThreadId);
            // Cargar todos los mensajes previos del chatbot al cargar la página
            loadPreviousChats(storedThreadId);
        } else {
            // Si no hay threadId en localStorage, crear uno nuevo y guardarlo
            createNewThread();
        }
    }, []);

    const loadPreviousChats = async (threadId: string) => {
        try {
            const messages = await getMessages(threadId);
            const formattedMessages: Message[] = messages.map(msg => ({
                sender: msg.role === 'assistant' ? 'bot' : 'user',
                text: msg.content[0]?.text.value || '',
            }));
            setChat(formattedMessages.reverse()); // Invertir el orden para mostrar más reciente primero
        } catch (error) {
            console.error('Error al cargar mensajes anteriores:', error);
        }
    };

    const createNewThread = async () => {
        try {
            const newThreadId = await createThread();
            setThreadId(newThreadId);
            localStorage.setItem('threadId', newThreadId);
        } catch (error) {
            console.error('Error al crear el thread:', error);
        }
    };

    const toggleChat = () => {
        setChatOpen(!chatOpen);
    };

    const handleSendMessage = async () => {
        if (message.trim() === '') return;

        // Agregar el mensaje del usuario al chat visualmente
        setChat(prevChat => [...prevChat, { sender: 'user', text: message }]);

        setIsLoading(true);

        try {
            // Enviar mensaje al chatbot y obtener respuesta
            const messages = await userQuestion(threadId!, message);
            console.log(messages);
            const botReply: Message = {
                sender: 'bot',
                text: messages[messages.length - 1]?.content[0]?.text.value || '',
            };
            setChat(prevChat => [...prevChat, botReply]);
            setIsLoading(false);
        } catch (error) {
            console.error('Error al enviar mensaje:', error);
            setIsLoading(false);
        }

        setMessage('');
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
            <Fab color="primary" onClick={toggleChat}>
                {chatOpen ? <CloseIcon /> : <ChatIcon />}
            </Fab>
            {chatOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 80,
                        right: 16,
                        width: 300,
                        height: 400,
                        backgroundColor: 'white',
                        boxShadow: 3,
                        borderRadius: 2,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#001D3D',
                            color: 'white',
                            p: 2,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6">Chatbot</Typography>
                        <IconButton size="small" onClick={toggleChat} color="inherit">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto' }}>
                        {chat.map((msg, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                    mb: 1,
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        backgroundColor: msg.sender === 'user' ? '#cfe9ff' : '#f1f1f1',
                                        color: 'black',
                                        p: 1,
                                        borderRadius: 1,
                                        maxWidth: '75%',
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    {msg.text}
                                </Typography>
                            </Box>
                        ))}
                        {isLoading && (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CircularProgress size={24} />
                                <Typography variant="body1" sx={{ ml: 2 }}>Escribiendo...</Typography>
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ p: 2, borderTop: '1px solid #ddd', display: 'flex' }}>
                        <TextField
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Escribe tu mensaje"
                            variant="outlined"
                            size="small"
                            fullWidth
                            sx={{ mr: 1 }}
                        />
                        <Button variant="contained" color="primary" onClick={handleSendMessage}>
                            Enviar
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
