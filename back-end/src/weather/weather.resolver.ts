import { Resolver, Query, Args, Int, createUnionType } from '@nestjs/graphql';
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
  weatherByLocaleNameOrId(@Args('name', { nullable: true }) name: string, @Args('id', { type: () => Int, nullable: true }) id: number) {
    return this.weatherService.findByLocaleNameOrId(name, id);
  }

}
