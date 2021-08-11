import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

@ObjectType('Period')
export class Period {
    @Field()
    begin: string;
    @Field()
    end: string;
}