import { Injectable, NotFoundException } from "@nestjs/common";
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
     * @module LocaleModule
     * @returns Todos os locais registrados no Json no arquivo ´Base´
     * @throws {NotFoundException} Caso não encontre o local
     */
    findAll(): Locale[] {
        const _locale = this._locales
        if (_locale) {
            return _locale
        } else {
            throw new NotFoundException(`Nenhum registro foi encontrado`)
        }
    }

    /**
     * Função que retornar as informações da localidade desejada a partir do nome o ou parte do nome do local
     * @module LocaleModule
     * @param name Nome completo ou parte do nome do local desejado (Acentos são importantes)
     * @returns Informações do local
     * @throws {NotFoundException} Caso não encontre o local}
     */
    findByName(name: string): Locale {
        const _locale = this._locales.find(locale => locale.name.toLowerCase().includes(name))
        if (_locale) {
            return _locale
        } else {
            throw new NotFoundException(`Não foi encontrado local ${name}`)
        }
    }

}