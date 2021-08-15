import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { Weather } from './entities/weather.entity';
import { FullWeather } from './entities/full-weather.entity';


@Resolver(() => Weather)
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) { }

  @Query(() => [FullWeather], { name: 'weathers' })
  weathers() {
    return this.weatherService.findAll();
  }

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
