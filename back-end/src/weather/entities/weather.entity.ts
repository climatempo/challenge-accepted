import { ObjectType, Field, Int, InterfaceType, Float } from '@nestjs/graphql';

@ObjectType()
export abstract class Temperature {
  @Field(type => Int)
  min: number;
  @Field(type => Int)
  max: number;
}

@ObjectType()
export abstract class Rain {
  @Field(type => Int)
  probability: number;
  @Field(type => Float)
  precipitation: number;
}


@ObjectType()
export class Weather {
  @Field()
  date: string;
  @Field()
  text: string;
  @Field(type => Temperature)
  temperature: Temperature;
  @Field(type => Rain)
  rain: Rain;
}
