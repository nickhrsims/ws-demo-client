import { ChangeEvent, ComponentProps, KeyboardEvent } from 'react';
import { Paper, TextField } from '@mui/material';
import { useSocket, useUrl } from '../model';

type Props = ComponentProps<typeof TextField>;

export default function Url({ ...props }: Props) {
    const [, connect] = useSocket();
    const [url, setUrl] = useUrl();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setUrl(event.target.value);

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') connect(url);
    };

    return (
        <Paper>
            <TextField
                {...props}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                value={url}
                variant="outlined"
            />
        </Paper>
    );
}
