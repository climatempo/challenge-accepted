import { Injectable } from '@nestjs/common'
import * as locales from './locales.json'

@Injectable()
export class LocalesService {
  public async getAllLocales() {
    return locales
  }
}
