import fetch from 'node-fetch';

type Locale = {
    "id": number,
    "name": string,
    "uf": string,
    "city": number,
    "region": string,
    "acronym": string
}

type DetailedLocale = {
    idlocale: number,
    idcity: number,
    capital: boolean,
    idcountry: number,
    ac: string,
    country: string,
    uf: string,
    city: string,
    region: string,
    seaside: false,
    latitude: number,
    longitude: number,
    tourist: boolean,
    agricultural: boolean,
    base: string,
    searchPoints: number
}

type Weather = {
    temperature: number,
    icon: string,
    condition: string,
    humidity: number,
    sensation: number,
    windVelocity: number,
    pressure: number,
    date: string
}

type DetailedWeather = {
    moon: string[],
    rainbow: string,
    description: string,
    date: string,
    temperature: {
        min: number,
        max: number
    },
    rain: {
        precipitation: number,
        probability: number
    },
    wind: {
        compass: string,
        velocity: number
    },
    humidity: {
        min: number,
        max: number
    },
    sun: {
        morning: string,
        afternoon: string
    }
}

/**
 * This is a web scrapper engine to get the weather info I wanted to from any city.
 * Yeah, I could use the official API but was too expensive and web scrapping was too easy
 * */
class ClimaTempoEngine {
    static baseUrl = 'https://www.climatempo.com.br';

    async detailedWeatherCollectionByCityCode(code: number): Promise<DetailedWeather[]> {
        return await fetch(`${ ClimaTempoEngine.baseUrl }/previsao-do-tempo/15-dias/cidade/${ code }`)
            .then(res => res.text())
            .then(data => {
                return data.split('<section')
                    .filter(data => data.startsWith(' class="accordion-card'))
                    .map((data, index) => {
                        const list = data.slice(data.indexOf('wrapper-variables-cards')).split('variable-card')
                        list[2] = list[2].slice(list[2].indexOf('Chuva'));
                        list[3] = list[3].slice(list[3].indexOf('Vento'));
                        const temperature = list[1].split('<span');
                        const humidity = list[4].split('</span>');
                        const moon = this.partOf(list[7], 'Lua', '</span>', '</p>').split('</span>');

                        const date = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000 ));
                        date.setDate(date.getDate() + index);
                        return {
                            temperature: {
                                min: Number(this.partOf(temperature[2], '>', '>', '°<')),
                                max: Number(this.partOf(temperature[3], '>', '>', '°<'))
                            },
                            rain: {
                                precipitation: Number(this.partOf(list[2], '<span', '>', 'mm')),
                                probability: Number(this.partOf(list[2], '<span', ' -', '%').trimStart())
                            },
                            wind: {
                                compass: this.partOf(list[3], '</span>', '>', '-').trim(),
                                velocity: Number(this.partOf(list[3], '</span>', '-', 'km/h').trimStart())
                            },
                            humidity: {
                                min: Number(this.partOf(humidity[1], '<span', '>', '%')),
                                max: Number(this.partOf(humidity[2], '<span', '>', '%'))
                            },
                            sun: {
                                morning: this.partOf(list[6], 'Sol', '</span>', ' - ').trim(),
                                afternoon: this.partOf(list[6], 'Sol', ' - ', '</p>').trim()
                            },
                            moon: moon.map(line => line.slice(0, line.indexOf('<')).replace('\n-', ' -').trim()),
                            rainbow: this.partOf(list[5], 'title', '"', '"'),
                            description: this.partOf(data, '<p', '>', '</p>').trim(),
                            date: date.toISOString().slice(0, 10)
                        } as DetailedWeather;
                });
            });
    }

    async weatherByCityId(id: number): Promise<Weather> {
        return await fetch(`${ ClimaTempoEngine.baseUrl }/json/myclimatempo/user/weatherNow?idlocale=${id}`)
            .then(res => res.json())
            .then(data => data[0].data[0].weather[0] as Weather)
    }

    async cityInfoById(id: number): Promise<Locale> {
        return await fetch(`${ ClimaTempoEngine.baseUrl }/json/myclimatempo/user/weatherNow?idlocale=${id}`)
            .then(res => res.json())
            .then(data => data[0].data[0].locale as Locale)
    }

    async citiesFromSearchByName(name: string): Promise<DetailedLocale[]> {
        const body = new URLSearchParams();
        body.append('name', name);

        return await fetch(`${ ClimaTempoEngine.baseUrl }/json/busca-cidades`, {
            method: 'POST',
            body
        })
            .then(res => res.json())
            .then(data => data[0].response.data as DetailedLocale[])
            .catch(err => {
                console.log(err);
                return [] as DetailedLocale[];
            });
    }

    private partOf(subject: string, before: string, start: string, end?: string, keepStart = false) {
        let part = subject.slice(subject.indexOf(before));
        part = part.slice(part.indexOf(start));
        part = part.slice(keepStart ? 0 : start.length, end ? part.indexOf(end, start.length) : undefined);
        return part;
    }
}

export default ClimaTempoEngine;