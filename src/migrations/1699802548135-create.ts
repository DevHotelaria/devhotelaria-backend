import { MigrationInterface, QueryRunner } from "typeorm";

export class Create1699802548135 implements MigrationInterface {
    name = 'Create1699802548135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "room_management" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" TIMESTAMP NOT NULL, "checkout" TIMESTAMP, "eletronic_key" character varying NOT NULL, "privileges" character varying, "discount" integer NOT NULL DEFAULT '0', "daily_rate" integer NOT NULL, "accommodation_days" integer NOT NULL, "is_paid" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "guestId" uuid, "roomId" uuid, CONSTRAINT "PK_ad76949ce9501f820c47b062d12" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "checkin" TIMESTAMP NOT NULL, "checkout" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "guestId" uuid, "roomId" uuid, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "number_room" character varying NOT NULL, "status" character varying NOT NULL, "description" character varying NOT NULL, "ocupationGuestId" uuid, CONSTRAINT "UQ_457e6bd694f3a85d8f2e07c9e1a" UNIQUE ("number_room"), CONSTRAINT "REL_28a0504ed59dea84996b233a65" UNIQUE ("ocupationGuestId"), CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(70) NOT NULL, "cpf" character varying NOT NULL, "phone_number" character varying NOT NULL, "nationality" character varying NOT NULL, "emergency_contact" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "roomId" uuid, CONSTRAINT "UQ_eff400d57cd43170fc7c95db9c5" UNIQUE ("cpf"), CONSTRAINT "REL_578347653e95fd3aef49b17c0d" UNIQUE ("roomId"), CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "type_user" character varying NOT NULL, "is_connected" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "room_management" ADD CONSTRAINT "FK_a328dc3b1f7a2521da579833579" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_management" ADD CONSTRAINT "FK_4f0ae8c6c865aab2728b8a58ed8" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_3f5a7e4b2d53255376e4506ae68" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_769a5e375729258fd0bbfc0a456" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room" ADD CONSTRAINT "FK_28a0504ed59dea84996b233a656" FOREIGN KEY ("ocupationGuestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "FK_578347653e95fd3aef49b17c0de" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "FK_578347653e95fd3aef49b17c0de"`);
        await queryRunner.query(`ALTER TABLE "room" DROP CONSTRAINT "FK_28a0504ed59dea84996b233a656"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_769a5e375729258fd0bbfc0a456"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_3f5a7e4b2d53255376e4506ae68"`);
        await queryRunner.query(`ALTER TABLE "room_management" DROP CONSTRAINT "FK_4f0ae8c6c865aab2728b8a58ed8"`);
        await queryRunner.query(`ALTER TABLE "room_management" DROP CONSTRAINT "FK_a328dc3b1f7a2521da579833579"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "guest"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "room_management"`);
    }

}
