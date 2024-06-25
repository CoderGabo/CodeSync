import { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CodeSyncLayout } from '../layout/CodeSyncLayout';

const products = [
  {
    id: 1,
    title: 'Screen-to-Code',
    description: 'Convierte diseños en código sin esfuerzo con Screen-to-Code.',
    imageUrl: `/assets/Producto1.PNG`,
  },
];

export const ProductsPage = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const handleNextProduct = () => {
    setDirection('next');
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePreviousProduct = () => {
    setDirection('prev');
    setCurrentProductIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentProductIndex];

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
          backgroundColor: '#e0e0e0',
          position: 'relative',
          padding: '20px',
        }}
      >
        <Typography variant="h2" color="black">
          Nuestros Productos
        </Typography>

        <Box
          sx={{
            position: 'relative',
            maxWidth: '600px',
            marginBottom: '20px',
            overflow: 'hidden',
            borderRadius: '50%',
            border: '4px solid #001D3D',
            height: '300px',
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Contenedor para transición */}
          <Box
            sx={{
              position: 'relative',
              maxWidth: '600px',
              marginBottom: '20px',
              overflow: 'hidden', 
            }}
          >
          {products.map((product, index) => (
              <img
              key={product.id}
              src={product.imageUrl}
              alt={product.title}
              style={{
                  width: '100%',
                  objectFit: 'cover',
                  position: index === currentProductIndex ? 'relative' : 'absolute',
                  left: index === currentProductIndex ? '0' : direction === 'next' ? '100%' : '-100%',
                  transition: 'left 0.5s ease',
              }}
              />
          ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '600px',
            position: 'absolute',
            top: '42%',
            transform: 'translateY(-50%)',
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              left: '10px',
            }}
            onClick={handlePreviousProduct}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            sx={{
              position: 'absolute',
              right: '10px',
            }}
            onClick={handleNextProduct}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        <Typography variant="h4" gutterBottom>
          {currentProduct.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {currentProduct.description}
        </Typography>

        <Button variant="contained" color="primary" component={Button} href="/pricing">
          Consultar Precios
        </Button>
      </Box>
    </CodeSyncLayout>
  );
};
