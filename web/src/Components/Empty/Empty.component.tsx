import { Typography } from '@mui/material';

function Empty() {
    return <div className="flex flex-col justify-center items-center pt-8 pb-16 sm:py-20 text-center gap-8">
        <Typography variant="h2" className="hidden md:block">Clima Tempo Challenge</Typography>
        <Typography variant="h6" className="hidden md:block">Use a barra de pesquisa para achar sua cidade.</Typography>
        <Typography variant="h4" className="md:hidden">Clima Tempo<br/>Challenge</Typography>
        <Typography variant="h6" className="md:hidden">Use a barra de pesquisa para achar sua cidade.</Typography>
    </div>;
}

export default Empty;