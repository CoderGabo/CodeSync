import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        backgroundImage: `url(/assets/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Texto encima de la imagen */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo semitransparente para el texto
          padding: '30px',
          textAlign: 'center',
          position: 'absolute',
          top: '40%', // Ajustar posición verticalmente
          left: '40%',
          transform: 'translate(-50%, -50%)', // Centrar el texto
          // width: '60%', // Ancho del box en pantalla mediana
          maxWidth: '600px', // Máximo ancho para pantallas grandes (lg)
        }}
      >
        <Typography variant="h3" style={{ color: 'white' }} gutterBottom>
          Haciendo software para mejorar tu producción
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/about-us">
          Aprende más de nosotros
        </Button>
      </Box>
    </Box>
  )
}
