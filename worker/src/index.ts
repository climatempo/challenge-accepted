import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import SearchCityController from './Controllers/Search.controller';
import LocaleController from './Controllers/Locale.controller';
import InstantController from './Controllers/Instant.controller';
import WeathersController from './Controllers/Weathers.controller';
import WeatherController from './Controllers/Weather.controller';

function returnGood(data: any): APIGatewayProxyResult {
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}

function returnFail(err: any): APIGatewayProxyResult {
    return {
        statusCode: Number(err) > 100 ? err : 500,
        body: err === 400 || err === 404 ? JSON.stringify({
            name: 'Clima Tempo Challenge Proxy Worker',
            author: 'Lara Vieira',
            version: '0.0.1',
            github: 'https://github.com/laravieira/climatempo-challenge',
            description: 'This is a proxy worker for scraping data from www.climatempo.com.br',
            paths: [
                {
                    name: 'Search city by name',
                    path: '/?search=[string]',
                    method: 'GET',
                    description: 'Return list of city detailed infos by a given name'
                },
                {
                    name: 'Get city basic info',
                    path: '/?locale=[number]',
                    method: 'GET',
                    description: 'Get city basic info for a given city id (idlocale)'
                },
                {
                    name: 'Get city instant weather',
                    path: '/?instant=[number]',
                    method: 'GET',
                    description: 'Get city current weather for a given city id (idlocale)'
                },
                {
                    name: 'Get city daily weather',
                    path: '/?weather=[number]',
                    method: 'GET',
                    description: 'Get city current day weather for a given city code (idcity)'
                },
                {
                    name: 'Get city daily weather list',
                    path: '/?weathers=[number]',
                    method: 'GET',
                    description: 'Get weathers list of 15 days from today for a given city code (idcode)'
                },
            ]
        }) : ''
    };
}

export async function handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    if(!event.queryStringParameters)
        return returnFail(400);

    if(event.queryStringParameters.search)
        return SearchCityController(event.queryStringParameters.search)
          .then(returnGood)
          .catch(returnFail);

    if(event.queryStringParameters.locale)
        return LocaleController(event.queryStringParameters.locale)
          .then(returnGood)
          .catch(returnFail);

    if(event.queryStringParameters.instant)
        return InstantController(event.queryStringParameters.instant)
          .then(returnGood)
          .catch(returnFail);

    if(event.queryStringParameters.weather)
        return WeatherController(event.queryStringParameters.weather)
          .then(returnGood)
          .catch(returnFail);

    if(event.queryStringParameters.weathers)
        return WeathersController(event.queryStringParameters.weathers)
          .then(returnGood)
          .catch(returnFail);

    return returnFail(404);
}