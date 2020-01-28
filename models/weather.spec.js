const weather = require('./weather');

describe('Weather', () => {
    it('should get weather based in location code of "Osasco"', () => {
        const result = weather(3735);

        expect(result).toHaveProperty('locale.id', 3735);
        expect(result).toHaveProperty('locale.latitude', -23.532);
        expect(result).toHaveProperty('locale.longitude', -46.792);
        expect(result).toHaveProperty('locale.name', 'Osasco');
        expect(result).toHaveProperty('locale.state', 'SP');

        expect(result).toHaveProperty('period.begin', '2017-02-01');
        expect(result).toHaveProperty('period.end', '2017-02-07');
    });

    it('should not get weather based in inexistent location code', () => {
        const result = weather(1234);

        expect(result).toBeUndefined();
    });
});