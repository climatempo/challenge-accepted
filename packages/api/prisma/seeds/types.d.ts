export interface Enviroments {
  serverPort: number;
}

export interface ApiLocale {
  name: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface SeedCity {
  codigo_ibge: number;
  nome: strin;
  latitude: number;
  longitude: number;
  capital: number;
  codigo_uf: number;
  siafi_id: number;
  ddd: number;
  fuso_horario: string;
}

export interface SeedState {
  codigo_uf: number;
  uf: string;
  nome: string;
  latitude: number;
  longitude: number;
  regiao: string;
}
