import { AppService } from './app.service';

describe('AppService', () => {
    test('it should create', () => {
        let service = new AppService();
        expect(service).toBeTruthy();
    });
});
