import setupApp from './server/app';
import config from './server/configs/config'

const port = process.env.PORT || config.PORT;

setupApp().listen(port, () => {
    console.log('Server is listening on port %s', port);
});