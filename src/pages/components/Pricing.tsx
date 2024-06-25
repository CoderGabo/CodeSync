import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


export const Pricing = () => {
  return (
    <Box
        sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d0d0d0',
        backgroundImage: `url(/assets/anne-nygard-x07ELaNFt34-unsplash.jpg)`, // Fondo de imagen
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '20px',
        }}
    >
        {/* Texto superpuesto */}
        <Box
        sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '30px',
            textAlign: 'center',
            position: 'absolute',
            top: '50%', // Ajuste vertical
            left: '50%', // Ajuste horizontal
            transform: 'translate(-50%, -50%)',
        }}
        >
        <Typography variant="h4" style={{ color: 'white' }} gutterBottom>
            Conoce más sobre nuestros precios para los productos ofertados
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/pricing">
            Ver Planes ofertados
        </Button>
        </Box>
    </Box>
  )
}
