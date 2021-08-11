import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Locale } from './entities/locale.entity';
import { LocaleService } from './locale.service';


@Resolver(() => Locale)
export class LocaleResolver {
    constructor(private readonly localeService: LocaleService) { }

    /**
     * Query responsável por chamar a função que retorna todas as localidades
     * @module WeatherModule
     */
    @Query(() => [Locale], { name: 'locales' })
    async locales(): Promise<Locale[]> {
        return this.localeService.findAll()
    }
    

    @Query(() => Locale, { name: 'localeByName' })
    findByLocaleName(@Args('name') name: string) {
        return this.localeService.findByName(name);
    }

}
