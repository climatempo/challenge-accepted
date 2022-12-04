import ClimaTempoEngine from '../Engines/ClimaTempo/ClimaTempo.engine';

function InstantController(idLocale: string) {
  const id = Number(idLocale) > 0 ? Number(idLocale) : 0;

  if(!id)
    return Promise.reject(400);

  return new ClimaTempoEngine().weatherByCityId(id);
}

export default InstantController;