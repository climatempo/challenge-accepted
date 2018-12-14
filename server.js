import setupApp from './src/app';
import config from './src/configs/config'

const port = process.env.PORT || config.PORT;

setupApp().listen(port, () => {
    console.log('Server is listening on port %s', port);
});