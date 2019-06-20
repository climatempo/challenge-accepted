import { Weather } from '@climatempo/api-interface';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

import { WeatherService } from '../services/weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) {}

    @Get('locale/:id')
    public async getByLocaleId(@Param('id') localeId: string): Promise<Weather[]> {
        // +localeId => string -> int
        const weather = await this.weatherService.getByLocaleId(+localeId);

        if (!weather) {
            throw new NotFoundException(`Locale weather data not found`);
        }

        return weather;
    }
}
