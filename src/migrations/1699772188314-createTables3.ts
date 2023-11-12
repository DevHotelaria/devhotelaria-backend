import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables31699772188314 implements MigrationInterface {
    name = 'CreateTables31699772188314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guest" ADD "cpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "UQ_eff400d57cd43170fc7c95db9c5" UNIQUE ("cpf")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "UQ_eff400d57cd43170fc7c95db9c5"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP COLUMN "cpf"`);
    }

}
