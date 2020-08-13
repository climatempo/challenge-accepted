import { EntityRepository, Repository } from "typeorm";
import { Locale } from "../models";

@EntityRepository(Locale)
export class LocaleRepository extends Repository<Locale> {}
