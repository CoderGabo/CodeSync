import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { AppThemeProps } from './AppTheme.interface';

const codeSyncTheme = createTheme({
  palette: {
    primary: {
      main: '#001D3D', // Azul oscuro
    },
    secondary: {
      main: '#339989', // Verde azulado
    },
    background: {
      default: '#f5f5f5', // Color de fondo claro
    },
    text: {
      primary: '#1a1a1a', // Texto principal (negro oscuro)
      secondary: '#646F4B', // Texto secundario (amarillo mostaza apagado)
    },
    divider: '#ccc', // Color de separador
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Fuente predeterminada
    h1: {
      fontSize: '2.5rem', // Tamaño de letra para h1
      fontWeight: 600, // Peso de letra para h1
      color: '#001D3D', // Color de texto para h1
      marginBottom: '1rem', // Espaciado inferior para h1
    },
    h2: {
      fontSize: '2rem', // Tamaño de letra para h2
      fontWeight: 500, // Peso de letra para h2
      color: '#339989', // Color de texto para h2
      marginBottom: '0.75rem', // Espaciado inferior para h2
    },
    body1: {
      fontSize: '1rem', // Tamaño de letra para cuerpo
      color: '#1a1a1a', // Color de texto para cuerpo
      lineHeight: 1.6, // Interlineado para cuerpo
    },
  },
});

export const AppTheme = ({children}: AppThemeProps) => {
    return (
      <ThemeProvider theme={codeSyncTheme }>
        <CssBaseline />
          {children}
      </ThemeProvider>
    );
  }
