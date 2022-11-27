import { HTMLAttributes } from 'react';
import { IconButton } from '@mui/material';

function Button(props: HTMLAttributes<HTMLButtonElement>) {
    const { children, onClick, title } = props;

    return <IconButton className="h-14 w-14"
                       onClick={ onClick }
                       title={ title }>
        { children }
    </IconButton>;
}

export default Button;