import { ComponentProps } from 'react';
import { Button } from '@mui/material';
import { useSend, useOutgoingMessage } from '../model';

interface Props extends ComponentProps<typeof Button> {}

export default function Send({ ...props }: Props) {
    const sendMessage = useSend();
    const [message, setMessage] = useOutgoingMessage();

    const handleClick = () => {
        sendMessage(message);
        setMessage('');
    };

    return <Button {...props} onClick={handleClick} />;
}

Send.defaultProps = {
    children: 'Send',
};
