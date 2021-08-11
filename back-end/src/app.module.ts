import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WeatherModule } from './weather/weather.module';
import { LocaleModule } from './locale/locale.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: true
  }), WeatherModule, LocaleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
