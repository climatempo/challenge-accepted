import { MigrationInterface, QueryRunner } from "typeorm";

export class WeatherTable1597346345575 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "weathers" (
                "id" uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
                "locale_id" uuid NOT NULL REFERENCES locales(id),
                "date" DATE NOT NULL,
                "text" TEXT NOT NULL,
                "temperature_min"  REAL NOT NULL,
                "temperature_max"  REAL NOT NULL,
                "rain_probability"  INT NOT NULL,
                "rain_precipitation"  INT NOT NULL
            );
        `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "weathers"`, undefined);
    }

}
