import { Injectable } from "@nestjs/common";
import { readFileSync } from "fs";
import { join } from "path";
import { Locale } from "./entities/locale.entity";

@Injectable()
export class LocaleService {

    private _locales: Locale[];
    constructor() {
        const localesJson = readFileSync(join(__dirname, '../', 'data/base', 'locales.json'), "utf8")
        this._locales = <Locale[]>JSON.parse(localesJson)
    }
    
    /**
     * Função criada para retornar todos os registros de localidades no banco de dados.
     * @module WeatherModule
     * @returns Todos os locais registrados no Json no arquivo ´Base´
     */
    findAll(): Locale[] {
        return this._locales
    }

    /**
     * Pode retornar as informações da localidade desejada a partir do nome o ou parte do nome do local
     * @module WeatherModule
     * @param name Nome completo ou parte do nome do local desejado (Acentos são importantes)
     * @returns Informações do local
     */
    findByName(name: string): Locale {
        return this._locales.find(locale => locale.name.toLowerCase().includes(name))
    }

}