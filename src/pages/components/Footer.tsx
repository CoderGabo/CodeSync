import { Typography, Box } from '@mui/material';

export const Footer = () => {
    return (
        <footer 
          style={{
            width: '100%',
            backgroundColor: '#001D3D',
            color: 'white',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            bottom: 0
          }}
        >
          {/* Primera fila */}
          <div style={{ width: '100%' }}>
            <Typography variant="h6">
              <strong>Contactanos</strong>
            </Typography>
          </div>
    
          {/* Segunda fila */}
          <div 
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: '10px'
            }}
          >
            {/* Columna 1 */}
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography color="white" variant="body1">
                <strong>Correo:</strong> gabidhu@gmail.com
              </Typography>
              <Typography color="white" variant="body1">
                <strong>Teléfono:</strong> 78504676
              </Typography>
            </Box>
            
            {/* Columna 2 */}
            <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: 'auto' }}>
              <Typography color="white" variant="body1">
                <strong>Fax:</strong> (591-3) 3128356
              </Typography>
              <Typography color="white" variant="body1">
                <strong>Casilla:</strong> 3576
              </Typography>
            </Box>
            
            {/* Columna 3 */}
            <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: 'auto' }}>
              <Typography color="white" variant="body1">
                <strong>Dirección:</strong> Av. Busch Calle Porongo #46
              </Typography>
            </Box>
          </div>
        </footer>
    );
}
