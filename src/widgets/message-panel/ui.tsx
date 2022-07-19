import { ComponentProps } from 'react';
import { Box, ButtonGroup, Grid } from '@mui/material';
import {
    Url,
    Log,
    Send,
    Clear,
    Connect,
    Messages,
    OutgoingMessage,
} from 'features/messages';

type Props = ComponentProps<typeof Box>;

export default function MessagePanel(props: Props) {
    return (
        <Box {...props}>
            <Connect fullWidth variant="contained" />

            <br />
            <br />
            <Url fullWidth />

            <br />
            <br />

            <Messages p={2} />

            <br />
            <br />

            <OutgoingMessage fullWidth />

            <br />
            <br />

            <ButtonGroup fullWidth variant="contained">
                <Send />
                <Clear />
            </ButtonGroup>
        </Box>
    );
}

MessagePanel.defaultProps = {
    height: '200px',
};
