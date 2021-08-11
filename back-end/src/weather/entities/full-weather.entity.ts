import { Field, ObjectType } from '@nestjs/graphql';
import { Locale } from 'src/locale/entities/locale.entity';
import { Period } from 'src/shared/period.entity';
import { Weather } from './weather.entity';


@ObjectType()
export class FullWeather {
    @Field(() => Period)
    period: Period
    @Field(() => Locale)
    locale: Locale
    @Field(() => [Weather])
    weather: Weather[]
}
