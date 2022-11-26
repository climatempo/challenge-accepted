import { IndicesCreateRequest } from '@elastic/elasticsearch/lib/api/types';

export const LOCALE_CREATE_INDEX_REQUEST = {
    index: 'locale',
    mappings: {
        properties: {
            idlocale: { type: 'keyword' },
            idcity: { type: 'keyword' },
            capital: { type: 'boolean' },
            idcountry: { type: 'keyword' },
            ac: { type: 'text' },
            country: { type: 'text' },
            uf: { type: 'text' },
            city: { type: 'text' },
            region: { type: 'text' },
            seaside: { type: 'boolean' },
            latitude: { type: 'integer' },
            longitude: { type: 'integer' },
            tourist: { type: 'boolean' },
            agricultural: { type: 'boolean' },
            base: { type: 'text' },
            searchPoints: { type: 'integer' }
        }
    }
} as IndicesCreateRequest;

export const INSTANT_WEATHER_CREATE_INDEX_REQUEST = {
    index: 'instant-weather',
    mappings: {
        properties: {
            idlocale: { type: 'keyword' },
            temperature: { type: 'integer' },
            icon: { type: 'text' },
            condition: { type: 'text' },
            humidity: { type: 'integer' },
            sensation: { type: 'integer' },
            windVelocity: { type: 'integer' },
            pressure: { type: 'integer' },
            date: { type: 'text' },
        }
    }
} as IndicesCreateRequest;

export const DAILY_WEATHER_CREATE_INDEX_REQUEST = {
    index: 'daily-weather',
    mappings: {
        properties: {
            idcity: { type: 'keyword' },
            moon: { type: 'text' },
            rainbow: { type: 'text' },
            description: { type: 'text' },
            date: { type: 'keyword' },
            'temperature-min': { type: 'integer' },
            'temperature-max': { type: 'integer' },
            'rain-precipitation': { type: 'integer' },
            'rain-probability': { type: 'integer' },
            'wind-compass': { type: 'text' },
            'wind-velocity': { type: 'integer' },
            'humidity-min': { type: 'integer' },
            'humidity-max': { type: 'integer' },
            'sun-morning': { type: 'text' },
            'sun-afternoon': { type: 'text' },
        }
    }
} as IndicesCreateRequest;