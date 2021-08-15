import { CacheInterceptor, CacheKey, CACHE_MANAGER, Inject, UseInterceptors } from '@nestjs/common';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { Locale } from './entities/locale.entity';
import { LocaleService } from './locale.service';


@Resolver(() => Locale)
export class LocaleResolver {
    constructor(
        private readonly localeService: LocaleService
    ) { }

    /**
     * Query responsável por chamar a função que retorna todas as localidades
     * @module LocaleModule
     */
    @CacheKey('locales')
    @Query(() => [Locale], { name: 'locales' })
    async locales(): Promise<Locale[]> {
        return this.localeService.findAll()
    }


    /**
     * Query responsável por chamar a função que retorna uma localidade pelo nome
     * @module LocaleModule
     */
    @Query(() => Locale, { name: 'localeByName' })
    findByLocaleName(@Args('name') name: string) {
        return this.localeService.findByName(name);
    }

}
