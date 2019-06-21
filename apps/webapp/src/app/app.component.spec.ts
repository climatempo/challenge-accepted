import { of } from 'rxjs';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;

    test('should create', () => {
        component = new AppComponent(null);
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        test('it should set error$ from service', () => {
            component = new AppComponent(<any>{
                error$: of()
            });

            expect(component.error$).toBeUndefined();
            component.ngOnInit();
            expect(component.error$).toBeDefined();
        });

        test('it should set loading$ from service', () => {
            component = new AppComponent(<any>{
                loading$: of()
            });

            expect(component.loading$).toBeUndefined();
            component.ngOnInit();
            expect(component.loading$).toBeDefined();
            expect(component.loading$.subscribe).toBeDefined();
        });
    });
});
