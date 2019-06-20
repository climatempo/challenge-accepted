import { AppController } from './app.controller';

describe('AppController', () => {
    test('it should create', () => {
        let controller = new AppController(null);
        expect(controller).toBeTruthy();
    });
});
