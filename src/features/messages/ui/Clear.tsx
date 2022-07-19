import { ComponentProps } from 'react';
import { Button } from '@mui/material';
import { useMessages } from '../model';

interface Props extends ComponentProps<typeof Button> {}

export default function Clear({ ...props }: Props) {
    const [, setMessages] = useMessages();

    const handleClick = () => setMessages([]);

    return <Button {...props} onClick={handleClick} />;
}

Clear.defaultProps = {
    children: 'Clear',
};
