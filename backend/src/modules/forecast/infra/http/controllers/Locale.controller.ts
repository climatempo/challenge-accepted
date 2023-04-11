import { Controller, Get, Param } from '@nestjs/common';
import { ListLocales } from '../../../application/usecases/listLocales/listLocales';
import { LocaleViewModel } from '../view-model/Locale.viewModel';
import { SearchLocales } from './../../../application/usecases/searchLocale/searchLocale';

@Controller('locale')
export class LocaleController {
  constructor(
    private readonly listLocalesUseCase: ListLocales,
    private readonly searchLocalesUseCase: SearchLocales,
  ) {}

  @Get('overview')
  async listLocales() {
    const locales = await this.listLocalesUseCase.execute();
    return locales.map((locale) => LocaleViewModel.toHTTP(locale));
  }

  @Get('search/:locale')
  async searchLocales(@Param('locale') query: string) {
    const locales = await this.searchLocalesUseCase.execute(query);
    return locales.map((locale) => LocaleViewModel.toHTTP(locale));
  }
}
