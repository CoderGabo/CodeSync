import { FC } from "react";
import { Container, Typography, Card, CardContent, Grid, AccordionSummary, Accordion, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CodeSyncLayout } from "../layout/CodeSyncLayout";

const subscriptionPlans = [
    {
      title: 'Básico',
      price: '$20/mes',
      description: 'Incluye acceso básico al servicio de screen-to-code con funcionalidades limitadas.',
    },
    {
      title: 'Estándar',
      price: '$55 cada 3 meses',
      description: 'Acceso completo al uso del servicio de scree-to-code con posibilidad a exportación de código y generación en frameworks distintos.',
    },
];  

export const PricingPage: FC = () => {
  return (
    <CodeSyncLayout>
        <Container>
            <Typography variant="h2" component="h1" mt={2} gutterBottom>
                Precios
            </Typography>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h5" color={"text.secondary"}>Screen-to-code</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                        <Typography variant="body1" gutterBottom mb={4}>
                            Para usar nuestro servicio de screen-to-code, ofrecemos varios planes de suscripción. Puedes elegir el plan que mejor se adapte a tus necesidades desde la página del producto.
                        </Typography>
                        
                        <Grid container spacing={4} justifyContent="center">
                            {subscriptionPlans.map((plan, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                    {plan.title}
                                    </Typography>
                                    <Typography variant="h6" color="textSecondary">
                                    {plan.price}
                                    </Typography>
                                    <Typography variant="body1">
                                    {plan.description}
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                        </Box>
                    </AccordionDetails>
                </Accordion>
        </Container>
    </CodeSyncLayout>
  )
}
