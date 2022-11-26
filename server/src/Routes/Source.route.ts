import { Router } from 'express';
import SourceController from '../Controllers/Source.controller';
import SetSourceController from '../Controllers/SetSource.controller';

const source = Router();

source.get('/', SourceController);
source.post('/:source', SetSourceController);

export default source;