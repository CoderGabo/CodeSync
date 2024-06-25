import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { products } from "../../data/products";

export const Products = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [direction, setDirection] = useState('next'); // Estado para controlar la dirección del cambio
  
    const handleNextProduct = () => {
      const nextIndex = currentProductIndex === products.length - 1 ? 0 : currentProductIndex + 1;
      setDirection('next');
      setCurrentProductIndex(nextIndex);
    };
  
    const handlePreviousProduct = () => {
      const previousIndex = currentProductIndex === 0 ? products.length - 1 : currentProductIndex - 1;
      setDirection('previous');
      setCurrentProductIndex(previousIndex);
    };
  
    const currentProduct = products[currentProductIndex];

    return (
        <Box
            sx={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(to bottom right, #e0e0e0, #b0bec5)', // Fondo degradado
            padding: '20px',
            position: 'relative',
            color: '#333', // Color de texto blanco sobre el fondo
            }}
        >
            <Typography variant="h2" color={"black"}>
            Nuestros Productos
            </Typography>

            <Box
            sx={{
                position: 'relative',
                maxWidth: '600px',
                marginBottom: '20px',
                overflow: 'hidden', // Ocultar el contenido que se desborda
            }}
            >
            {/* Imagen del producto actual con transición */}
            {products.map((product, index) => (
                <img
                key={product.id}
                src={product.imageUrl}
                alt={product.title}
                style={{
                    width: '100%',
                    position: index === currentProductIndex ? 'relative' : 'absolute',
                    left: index === currentProductIndex ? '0' : direction === 'next' ? '100%' : '-100%',
                    transition: 'left 0.5s ease',
                }}
                />
            ))}
            </Box>

            {/* Flechas de navegación */}
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                maxWidth: '900px',
                position: 'absolute',
                top: '42%',
                transform: 'translateY(-50%)',
            }}
            >
            <Button
                sx={{
                position: 'absolute',
                left: '10px',
                }}
                onClick={handlePreviousProduct}
            >
                <ArrowBackIcon />
            </Button>
            <Button
                sx={{
                position: 'absolute',
                right: '10px',
                }}
                onClick={handleNextProduct}
            >
                <ArrowForwardIcon />
            </Button>
            </Box>

            {/* Título y descripción del producto actual */}
            <Typography variant="h4" gutterBottom>
            {currentProduct.title}
            </Typography>
            <Typography variant="body1" paragraph>
            {currentProduct.description}
            </Typography>

            {/* Botón para ver más detalles */}
            <Button variant="contained" color="primary" component={Link} to="/product">
            Vea Nuestros Productos
            </Button>
        </Box>

    )
}
