import { AppModule } from './app.module';

describe('AppModule', () => {
    test('it shoud exist', () => {
        const appModule = new AppModule();
        expect(appModule).toBeTruthy();
    });
});
