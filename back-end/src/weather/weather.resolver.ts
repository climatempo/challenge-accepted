import { Resolver, Query, Args, Int, createUnionType } from '@nestjs/graphql';
import { WeatherService } from './weather.service';
import { Weather } from './entities/weather.entity';
import { FullWeather } from './entities/full-weather.entity';


@Resolver(() => Weather)
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  @Query(() => [FullWeather], { name: 'weathers' })
  weathers() {
    return this.weatherService.findAll();
  }

  @Query(() => FullWeather, { name: 'weatherByLocaleName' })
  weatherByLocaleName(@Args('name') name: string) {
    return this.weatherService.findByLocaleName(name);
  }

}

