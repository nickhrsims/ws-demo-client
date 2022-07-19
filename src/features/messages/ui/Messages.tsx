import { ComponentProps } from 'react';
import { Box } from '@mui/material';
import { useMessages } from '../model';

type Props = ComponentProps<typeof Box>;

export default function OutgoingMessage({ ...props }: Props) {
    const [messages] = useMessages();

    return (
        <Box {...props}>
            {messages.map((message) => (
                <p key={message}>{message}</p>
            ))}
        </Box>
    );
}
