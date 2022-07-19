import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        header: {
            height: string | number;
        };
        footer: {
            height: string | number;
        };
    }

    interface ThemeOptions {
        header?: {
            height?: string | number;
        };
        footer?: {
            height?: string | number;
        };
    }
}

export const theme = responsiveFontSizes(
    createTheme({
        header: {
            height: '48px',
        },
        footer: {
            height: '0px',
        },
    })
);
