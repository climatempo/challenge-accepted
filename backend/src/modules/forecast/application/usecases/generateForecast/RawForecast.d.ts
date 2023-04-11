import { StateType } from '../../../domain/valueObject/State';

export interface RawForecast {
  id: number;
  name: string;
  state: State;
  country: string;
  meteogram: string;
  data: Weather[];
}

export type State = StateType;

export interface Weather {
  date: string;
  date_br: string;
  humidity: Humidity;
  pressure: Pressure;
  rain: Rain;
  wind: Wind;
  uv: Uv;
  thermal_sensation: ThermalSensation;
  text_icon: TextIcon;
  temperature: Temperature;
  cloud_coverage: CloudCoverage;
  sun: Sun;
}

export interface Humidity {
  min: number;
  max: number;
  dawn: Dawn;
  morning: Morning;
  afternoon: Afternoon;
  night: Night;
}

export interface Dawn {
  min: number;
  max: number;
}

export interface Morning {
  min: number;
  max: number;
}

export interface Afternoon {
  min: number;
  max: number;
}

export interface Night {
  min: number;
  max: number;
}

export interface Pressure {
  pressure: number;
}

export interface Rain {
  precipitation: number;
  probability: number;
}

export interface Wind {
  dawn: Dawn2;
  morning: Morning2;
  afternoon: Afternoon2;
  night: Night2;
  velocity_min: number;
  velocity_max: number;
  velocity_avg: number;
  direction_degrees: number;
  direction: string;
  gust_max: number;
}

export interface Dawn2 {
  velocity_min: number;
  velocity_max: number;
  velocity_avg: number;
  direction_degrees: number;
  direction: string;
  gust_max: number;
}

export interface Morning2 {
  velocity_min: number;
  velocity_max: number;
  velocity_avg: number;
  direction_degrees: number;
  direction: string;
  gust_max: number;
}

export interface Afternoon2 {
  velocity_min: number;
  velocity_max: number;
  velocity_avg: number;
  direction_degrees: number;
  direction: string;
  gust_max: number;
}

export interface Night2 {
  velocity_min: number;
  velocity_max: number;
  velocity_avg: number;
  direction_degrees: number;
  direction: string;
  gust_max: number;
}

export interface Uv {
  max: number;
}

export interface ThermalSensation {
  min: number;
  max: number;
}

export interface TextIcon {
  icon: Icon;
  text: Text;
}

export interface Icon {
  dawn: string;
  morning: string;
  afternoon: string;
  night: string;
  day: string;
}

export interface Text {
  pt: string;
  en: string;
  es: string;
  phrase: Phrase;
}

export interface Phrase {
  reduced: string;
  morning: string;
  afternoon: string;
  night: string;
  dawn: string;
}

export interface Temperature {
  min: number;
  max: number;
  dawn: Dawn3;
  morning: Morning3;
  afternoon: Afternoon3;
  night: Night3;
}

export interface Dawn3 {
  min: number;
  max: number;
}

export interface Morning3 {
  min: number;
  max: number;
}

export interface Afternoon3 {
  min: number;
  max: number;
}

export interface Night3 {
  min: number;
  max: number;
}

export interface CloudCoverage {
  dawn: Dawn4;
  morning: Morning4;
  afternoon: Afternoon4;
  night: Night4;
  low: number;
  mid: number;
  high: number;
}

export interface Dawn4 {
  low: number;
  mid: number;
  high: number;
}

export interface Morning4 {
  low: number;
  mid: number;
  high: number;
}

export interface Afternoon4 {
  low: number;
  mid: number;
  high: number;
}

export interface Night4 {
  low: number;
  mid: number;
  high: number;
}

export interface Sun {
  sunrise: string;
  sunset: string;
}
