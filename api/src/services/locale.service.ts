import { Injectable } from '@nestjs/common';
import slugify from 'slug';

import locales from '../../../base/locales.json';
import { Locale } from '../models/locale.model';

@Injectable()
export class LocaleService {
    public async filterLocales(searchText: string): Promise<Locale[]> {
        const text = this.clearText(searchText);

        return locales.filter(l => this.clearText(l.name).includes(text));
    }

    private clearText(text: string): string {
        return slugify(text, {
            lower: true,
            replacement: '',
        });
    }
}
