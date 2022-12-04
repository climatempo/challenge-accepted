import ClimaTempoEngine from './ClimaTempo.engine';

test('Search for a city with "Chácara"', async () => {
    const result = await new ClimaTempoEngine().citiesFromSearchByName('Chácara');
    expect(result).toHaveLength(1);
    expect(result[0].city).toBe('Chácara');
});

test('Search for a city unknown city', async () => {
    const result = await new ClimaTempoEngine().citiesFromSearchByName('asdfghjk');
    expect(result).toHaveLength(0);
});

test('Get Resumed city info of id 8600 (Chácara)', async () => {
    const result = await new ClimaTempoEngine().cityInfoById(8600);
    expect(result.name).toBe('Chácara');
});

test('Get Resumed city info of unknown city', async () => {
    await expect(new ClimaTempoEngine().cityInfoById(234456345))
        .rejects
        .toMatch('Invalid response.');
});

test('Get instant weather of id 8600 (Chácara)', async () => {
    const result = await new ClimaTempoEngine().weatherByCityId(8600);
    expect(result.idlocale).toBe(8600);
});

test('Get instant weather of unknown city', async () => {
    await expect(new ClimaTempoEngine().weatherByCityId(0))
        .rejects
        .toMatch('Invalid response.');
});

test('Get daily weather of code 3664 (Chácara)', async () => {
    const result = await new ClimaTempoEngine().detailedWeatherCollectionByCityCode(3664);
    expect(result).toHaveLength(15);
    expect(result[0].description.length).toBeGreaterThan(10);
});

test('Get daily weather of unknown city', async () => {
    await expect(new ClimaTempoEngine().detailedWeatherCollectionByCityCode(0))
        .rejects
        .toMatch('Invalid response.');
});
