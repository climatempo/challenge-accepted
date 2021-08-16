import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { Weather } from './entities/weather.entity';
import { FullWeather } from './entities/full-weather.entity';


@Resolver(() => Weather)
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) { }

  /**
   * Responsável por chamar o método findAll do serviço de weather e receber a requisição graphql
   */
  @Query(() => [FullWeather], { name: 'weathers' })
  weathers() {
    return this.weatherService.findAll();
  }


  /**
   * Responsável por chamar o método findByLocaleNameOrId do serviço de weather e receber a requisição graphql
   * @param name Nome da cidade
   * @param id Id da cidade buscada
   * @param temperatureUnit Unidade que será retornada a temperatura, pode assumir o valor 'c' ou 'f'
   * @param rainUnit Unidade que será retornada a chuva, pode assumir o valor 'mm' ou 'inch'
   */
  @Query(() => FullWeather, { name: 'weatherByLocaleNameOrId' })
  weatherByLocaleNameOrId(
    @Args('name', { nullable: true }) name: string,
    @Args('id', { type: () => Int, nullable: true }) id: number,
    @Args('temperatureUnit', { nullable: true }) temperatureUnit: string,
    @Args('rainUnit', { nullable: true }) rainUnit: string

  ) {
    return this.weatherService.findByLocaleNameOrId(name, id, temperatureUnit, rainUnit);
  }

}
