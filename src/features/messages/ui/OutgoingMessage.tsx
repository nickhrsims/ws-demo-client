import { ChangeEvent, ComponentProps, KeyboardEvent } from 'react';
import { Paper, TextField } from '@mui/material';
import { useSend, useOutgoingMessage } from '../model';

type Props = ComponentProps<typeof TextField>;

export default function OutgoingMessage({ ...props }: Props) {
    const sendMessage = useSend();
    const [message, setMessage] = useOutgoingMessage();

    const send = () => {
        sendMessage(message);
        setMessage('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setMessage(event.target.value);

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') send();
    };

    return (
        <Paper>
            <TextField
                {...props}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={message}
                variant="outlined"
            />
        </Paper>
    );
}
