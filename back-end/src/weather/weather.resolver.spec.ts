import { Test, TestingModule } from '@nestjs/testing';
import { WeatherResolver } from './weather.resolver';
import { WeatherService } from './weather.service';

describe('WeatherResolver', () => {
  let resolver: WeatherResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherResolver, WeatherService],
    }).compile();

    resolver = module.get<WeatherResolver>(WeatherResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
