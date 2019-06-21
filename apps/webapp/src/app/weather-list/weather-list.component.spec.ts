import { WeatherListComponent } from './weather-list.component';

describe('WeatherListComponent', () => {
    let component: WeatherListComponent;

    it('should create', () => {
        component = new WeatherListComponent(null);
        expect(component).toBeTruthy();
    });
});
