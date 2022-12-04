import ClimaTempoEngine from '../Engines/ClimaTempo/ClimaTempo.engine';
import LocaleModel from '../Models/Locale.model';

function LocaleController(idlocale: string): Promise<LocaleModel> {
  const id = Number(idlocale) > 0 ? Number(idlocale) : 0;

  if(!id)
    return Promise.reject(400);

  return new ClimaTempoEngine().cityInfoById(id);
}

export default LocaleController;