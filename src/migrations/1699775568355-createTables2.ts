import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables21699775568355 implements MigrationInterface {
    name = 'CreateTables21699775568355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_management" ALTER COLUMN "checkout" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_management" ALTER COLUMN "checkout" SET NOT NULL`);
    }

}
