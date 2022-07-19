import { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MessagePanel } from 'widgets';
import { useStyles } from './styles';
import { theme } from './theme';

const withTheme = (Component: FC) => () =>
    (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component />
        </ThemeProvider>
    );

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <MessagePanel p={4} height={1} />
        </div>
    );
}

export default withTheme(App);
