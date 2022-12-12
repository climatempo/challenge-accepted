import * as fs from 'fs';
import * as path from 'path';

const getJson = (jsonPath: string): object => (
	JSON.parse(fs.readFileSync(path.resolve(__dirname, jsonPath), 'utf-8'))
);

export default getJson;