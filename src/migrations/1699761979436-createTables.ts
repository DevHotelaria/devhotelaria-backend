import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1699761979436 implements MigrationInterface {
    name = 'CreateTables1699761979436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" TIMESTAMP NOT NULL, "checkout" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "guestId" uuid, "roomId" uuid, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_3f5a7e4b2d53255376e4506ae68" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_3f5a7e4b2d53255376e4506ae68"`);
        await queryRunner.query(`DROP TABLE "booking"`);
    }

}
