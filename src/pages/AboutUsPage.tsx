import { FC, useState }from 'react';
import { Box, Collapse, Typography } from "@mui/material";
import { aboutUsData } from '../data/about-us';
import { CodeSyncLayout } from '../layout/CodeSyncLayout';

export const AboutUsPage: FC = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <CodeSyncLayout>
            <Box 
                sx={{ 
                    minHeight: '100vh', 
                    width: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    backgroundImage: `url(/assets/mimi-thian-vdXMSiX-n6M-unsplash.jpg)`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                    color: 'white', 
                    textAlign: 'center',
                    padding: '20px',
                }}
                >
                    <Box
                        sx={{
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: '20px',
                        mb: 4,
                        }}
                    >
                        <Typography variant="h2" sx={{ mb: 2 }}>Nosotros</Typography>
                        <Typography variant="body1" color="white">
                        Somos una empresa dedicada a ofrecer soluciones tecnológicas innovadoras. Nuestro objetivo es facilitar y optimizar los procesos de negocio de nuestros clientes, ayudándoles a alcanzar sus metas de manera efectiva y eficiente.
                        </Typography>
                    </Box>

                    {aboutUsData.map((section, index) => (
                        <Box
                        key={index}
                        sx={{
                            width: '50%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            padding: '20px',
                            borderRadius: '8px',
                            mb: 2,
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                            alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end',
                            textAlign: index % 2 === 0 ? 'left' : 'right',
                            '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            },
                        }}
                        onClick={() => toggleSection(section.title)}
                        >
                        <Typography variant="h4" sx={{ mb: 2 }}>{section.title}</Typography>
                        <Collapse in={expandedSection === section.title}>
                            <Typography variant="body1" sx={{ whiteSpace: 'pre-line', color: "white" }}>{section.content}</Typography>
                        </Collapse>
                        </Box>
                    ))}
                </Box>
        </CodeSyncLayout>
    );
}
