import fetch from 'node-fetch';
import DailyWeatherModel from '../Models/DailyWeather.model';
import InstantWeatherModel from '../Models/InstantWeather.model';
import LocaleModel from '../Models/Locale.model';
import DetailedLocaleModel from '../Models/DetailedLocale.model';

/**
 * This is a web scrapper engine to get the weather info I wanted to from any city.
 * Yeah, I could use the official API but was too expensive and web scrapping was too easy
 * */
class ClimaTempoEngine {
    static baseUrl = 'https://www.climatempo.com.br';

    async detailedWeatherCollectionByCityCode(code: number): Promise<DailyWeatherModel[]> {
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
                            date: date.toISOString().slice(0, 10),
                            idcity: code
                        } as DailyWeatherModel;
                });
            }).then(data => {
                if(!data || data.length != 15)
                    return Promise.reject('Invalid response.');
                return data;
            });
    }

    async weatherByCityId(id: number): Promise<InstantWeatherModel> {
        return await fetch(`${ ClimaTempoEngine.baseUrl }/json/myclimatempo/user/weatherNow?idlocale=${id}`)
            .then(res => res.json())
            .then(data => {
                if(!data[0].data)
                    Promise.reject('Invalid response.');
                return {
                    idlocale: id,
                ...data[0].data[0].weather[0]
                } as InstantWeatherModel;
            });
    }

    async cityInfoById(id: number): Promise<LocaleModel> {
        return await fetch(`${ ClimaTempoEngine.baseUrl }/json/myclimatempo/user/weatherNow?idlocale=${id}`)
            .then(res => res.json())
            .then(data => {
                if(!data[0].data)
                    Promise.reject('Invalid response.');
                return data[0].data[0].locale as LocaleModel;
            });
    }

    async citiesFromSearchByName(name: string): Promise<DetailedLocaleModel[]> {
        const body = new URLSearchParams();
        body.append('name', name);

        return await fetch(`${ ClimaTempoEngine.baseUrl }/json/busca-cidades`, {
            method: 'POST',
            body
        })
            .then(res => res.json())
            .then(data => data[0].response.data as DetailedLocaleModel[])
            .catch(err => {
                console.log(err);
                return [] as DetailedLocaleModel[];
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