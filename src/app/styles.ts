import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const gridColor = '#f0f0f0';
const gridBorder = '1px';
const gridCell = '12px';

export const useStyles = makeStyles((theme: Theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: `calc(100vh - ${theme.header.height} - ${theme.footer.height} - 1px)`,
        overflow: 'auto',
        backgroundSize: `${gridCell} ${gridCell}`,
        backgroundImage: `linear-gradient(to right, ${gridColor} ${gridBorder}, transparent ${gridBorder}), linear-gradient(to bottom, ${gridColor} ${gridBorder}, transparent ${gridBorder})`,
    },
}));
