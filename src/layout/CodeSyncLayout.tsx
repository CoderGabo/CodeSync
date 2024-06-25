import { FC, ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, ListItemButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { linkStyle } from './css/linkStyle';
import { menuItems } from './components/MenuItems';
import { Chatbot } from './components/Chatbot';

export const CodeSyncLayout: FC<{children: ReactNode}> = ({children}) => {
    const navigate = useNavigate();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

 

    const handleButtonClick = (link: string, open: boolean) => {
        setDrawerOpen(open);
        navigate(link); // Navegar a la ruta especificada
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = '#002855'; // Color de realce al pasar el mouse
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.backgroundColor = 'transparent'; // Vuelve al color transparente al salir el mouse
    };

    return (
        <>
            <AppBar position="sticky">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        CodeSync
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'flex-end' }}>
                        {menuItems.map((item, index) => (
                            <Typography
                                key={index}
                                variant="button"
                                component={Link}
                                to={item.link}
                                style={linkStyle}
                                onMouseEnter={(e) => { e.currentTarget.style.borderBottom = '2px solid white'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderBottom = '2px solid transparent'; }}
                                sx={{ display: { xs: 'none', md: 'block' } }}
                            >
                                {item.text}
                            </Typography>
                        ))}
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundColor: '#001D3D' } }}
            >
                <List>
                    {menuItems.map((item, index) => (
                        <ListItemButton
                            key={index}
                            onClick={() => handleButtonClick(item.link, false)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            sx={{ '&:hover': { backgroundColor: '#002855' } }}
                        >
                            <ListItemText>
                                <Typography variant="body1" style={{ color: 'white', fontSize: '1.2rem' }}>
                                    {item.text}
                                </Typography>
                            </ListItemText>
                            <Divider />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            {children}
            <Chatbot />
        </>
    );
};
