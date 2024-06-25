import { FC } from "react";
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { CodeSyncLayout } from "../layout/CodeSyncLayout";

export const ContactPage: FC = () => {
  return (
    <CodeSyncLayout>
      <Container>
        <Typography variant="h2" component="h1" mt={2} gutterBottom>
          Contáctanos
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Envíanos un mensaje
            </Typography>
            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Nombre"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Correo Electrónico"
                margin="normal"
                variant="outlined"
                type="email"
              />
              <TextField
                fullWidth
                label="Asunto"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Mensaje"
                margin="normal"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Enviar
              </Button>
            </form>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Información de Contacto
            </Typography>
            <Box>
              <Typography variant="body1">
                <strong>Teléfonos:</strong>
              </Typography>
              <Typography variant="body1">
                +591 78504676
              </Typography>
              <Typography variant="body1">
                +591 77049267
              </Typography>
              <Typography variant="body1" mt={2}>
                <strong>Dirección:</strong>
              </Typography>
              <Typography variant="body1">
                46 Avenida Pirai, Piso 1
              </Typography>
              <Typography variant="body1">
                Santa Cruz de la Sierra, Bolívia
              </Typography>
              <Typography variant="body1" mt={2}>
                <strong>Correo Electrónico:</strong>
              </Typography>
              <Typography variant="body1">
                gabidhu@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </CodeSyncLayout>
  )
}
