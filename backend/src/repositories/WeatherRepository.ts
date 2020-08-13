import { EntityRepository, Repository } from "typeorm";
import { Weather } from "../models";

@EntityRepository(Weather)
export class WeatherRepository extends Repository<Weather> {}
