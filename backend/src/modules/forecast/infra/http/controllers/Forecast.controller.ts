import { Controller, Get, Param } from '@nestjs/common';
import { GetForecast } from '../../../application/usecases/getForecast/getForecast';
import { LocaleId } from '../../../domain/valueObject/LocaleId';
import { ForecastViewModel } from '../view-model/Forecast.viewModel';

@Controller('forecast')
export class ForecastController {
  constructor(private getForecastUseCase: GetForecast) {}

  @Get(':localeID')
  async getForecast(@Param('localeID') id: string) {
    const localeID = new LocaleId(Number(id)).value;
    const forecast = await this.getForecastUseCase.execute({ localeID });
    return ForecastViewModel.toHTTP(forecast);
  }
}
