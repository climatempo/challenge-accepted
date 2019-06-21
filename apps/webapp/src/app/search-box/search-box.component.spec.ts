import { FormControl } from '@angular/forms';
import { Locale } from '@climatempo/api-interface';

import { SearchBoxComponent } from './search-box.component';

describe('SearchBoxComponent', () => {
    const testLocale: Locale = {
        id: 1234,
        latitude: 1,
        longitude: 2,
        name: 'Test',
        state: 'TS'
    };

    let component: SearchBoxComponent;

    test('should create', () => {
        component = new SearchBoxComponent(null);
        expect(component).toBeTruthy();
    });

    describe('ngOnInit', () => {
        test('it should setup autocomplete', () => {
            component = new SearchBoxComponent(null);
            expect(component.filteredLocales$).toBeUndefined();

            component.ngOnInit();

            expect(component.filteredLocales$).toBeTruthy();
            expect(component.filteredLocales$.subscribe).toBeTruthy();
        });
    });

    describe('onAutocomplete', () => {
        test('it should emit current value @Output onLocaleSelect', () => {
            component = new SearchBoxComponent(null);
            const emitMock = jest.fn();

            component.onLocaleSelect = <any>{
                emit: emitMock
            };

            component.autocompleteControl = new FormControl(testLocale);
            component.onAutocomplete();

            expect(emitMock).toBeCalledWith(testLocale);
        });
    });

    describe('getLocaleName', () => {
        test('it should return locale .name property', () => {
            component = new SearchBoxComponent(null);
            expect(component.getLocaleName(testLocale)).toEqual('Test');
        });
    });
});
