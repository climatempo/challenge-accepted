import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

@ObjectType('Locale')
export class Locale {
    @Field(type => Int, { description: 'Example field (placeholder)' })
    id: number

    @Field()
    name: string

    @Field()
    state: string

    @Field(type => Float)
    latitude: number

    @Field(type => Float)
    longitude: number

}
