import { ComponentProps } from 'react';
import { Box } from '@mui/material';
import { useLog } from '../model';

type Props = ComponentProps<typeof Box>;

export default function Log({ ...props }: Props) {
    const [log] = useLog();

    return (
        <Box {...props}>
            {log.map((entry) => (
                <p key={entry}>{entry}</p>
            ))}
        </Box>
    );
}
