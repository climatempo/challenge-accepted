const locale = require('./locale');

describe('Locale', () => {
    it('should get "Osasco"', () => {
        const result = locale('Osasco');

        const object = {
            id: 3735,
            name: "Osasco",
            state: "SP",
            latitude: -23.5320,
            longitude: -46.7920
        };

        expect(result).toEqual(object);
    });

    it('should not get "Teresina"', () => {
        const result = locale('Teresina');

        expect(result).toBeUndefined();
    });
});