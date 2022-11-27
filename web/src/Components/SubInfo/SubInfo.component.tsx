import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type SubInfoProps = {
    topIcon: ReactNode,
    topValue: string|number,
    topCaption?: ReactNode,
    bottomIcon: ReactNode,
    bottomValue: string|number,
    bottomCaption?: ReactNode,
    caption: string
}

function SubInfo(props: SubInfoProps) {
    const { bottomIcon, bottomValue, topIcon, topValue, topCaption, bottomCaption, caption } = props;

    function renderLine(icon: ReactNode, value: string|number, caption: ReactNode|undefined) {
        return <div className="flex items-center">
            { icon }
            <Typography variant='h4'>
                { value }
            </Typography>
            {
                caption ? <Typography variant='subtitle1' className="self-end">
                    { caption }
                </Typography> : <></>
            }
        </div>;
    }

    return <div className="text-center sm:text-left">
        <Typography variant='subtitle1' className="pl-2 text-left">
            { caption }
        </Typography>
        { renderLine(topIcon, topValue, topCaption) }
        { renderLine(bottomIcon, bottomValue, bottomCaption) }
    </div>;
}

export default SubInfo;