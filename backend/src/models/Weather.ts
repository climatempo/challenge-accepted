import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "weathers" })
export class Weather {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "locale_id" })
  localeId!: string;

  @Column()
  date!: Date;

  @Column()
  text!: string;

  @Column({ name: "temperature_min" })
  temperatureMin!: number;

  @Column({ name: "temperature_max" })
  temperatureMax!: number;

  @Column({ name: "rain_probability" })
  rainProbability!: number;

  @Column({ name: "rain_precipitation" })
  rainPrecipitation!: number;
}
