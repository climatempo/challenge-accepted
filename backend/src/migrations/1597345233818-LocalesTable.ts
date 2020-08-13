import { MigrationInterface, QueryRunner } from "typeorm";

export class LocalesTable1597345233818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
            CREATE TABLE "locales" (
                "id" uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(), 
                "identification" INT NOT NULL UNIQUE,
                "name" TEXT NOT NULL,
                "state" TEXT NOT NULL,
                "latitude"  DOUBLE PRECISION NOT NULL,
                "longitude"  DOUBLE PRECISION NOT NULL
            );
        `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "locales"`, undefined);
    }

}
