import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;

    test('should create', () => {
        component = new AppComponent(null);
        expect(component).toBeTruthy();
    });
});
