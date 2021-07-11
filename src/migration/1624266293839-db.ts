import {MigrationInterface, QueryRunner} from "typeorm";

export class db1624266293839 implements MigrationInterface {
    name = 'db1624266293839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "board" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "columns" json NOT NULL, CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "order" integer NOT NULL, "description" character varying NOT NULL, "userId" uuid, "boardId" uuid, "columnId" character varying, "userIdId" uuid, "boardIdId" uuid, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "login" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_29c593b244774c65824ae1df648" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_61a750180758aaf4a589ccefaa9" FOREIGN KEY ("boardIdId") REFERENCES "board"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`INSERT INTO public."user" (id, "name", login, "password") VALUES(uuid_generate_v4(), 'admin', 'admin', '$2b$10$bz/o2QJKzVuUoXH93cksFumEoj6B6y5UFK.39wqAiEMkujviGJiyy')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_61a750180758aaf4a589ccefaa9"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_29c593b244774c65824ae1df648"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "board"`);
    }

}
