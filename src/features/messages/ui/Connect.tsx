import { ComponentProps } from 'react';
import { Button } from '@mui/material';
import { useSocket, useUrl } from '../model';

interface Props extends ComponentProps<typeof Button> {}

export default function Connect({ ...props }: Props) {
    const [, connect] = useSocket();
    const [url] = useUrl();

    const handleClick = () => {
        connect(url);
    };

    return <Button {...props} onClick={handleClick} />;
}

Connect.defaultProps = {
    children: 'Connect',
};
