import { Locale } from '@climatempo/api-interface';
import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { LocaleService } from '../services/locale.service';

@Controller('locale')
export class LocaleController {
    constructor(private readonly localeService: LocaleService) {}

    @Get('filter/:searchText')
    public async filter(@Param('searchText') searchText: string): Promise<Locale[]> {
        if (!searchText || searchText.length < 3) {
            throw new BadRequestException('Search text must be at least 3 characters');
        }
        return this.localeService.filterLocales(searchText);
    }
}
