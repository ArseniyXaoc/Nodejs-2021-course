import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from '../task/entities/task.entity';
import { Board } from "../board/entities/board.entity";
import { User } from '../entity';
import { db1624266293839 } from '../migration/1624266293839-db';

export default (): TypeOrmModule => ({
  name: process.env['DB_CONNECTION'],
  type: process.env['DB_TYPE'],
  host: process.env['POSTGRES_HOST'],
  port: process.env['POSTGRES_PORT'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  database: process.env['POSTGRES_DB'],
  synchronize: false,
  logging: false,
  entities: [User, Board, Task],
  migrationsRun: true,
  migrations: [db1624266293839],
  cli: {
    entitiesDir: './entity',
    migrationsDir: './migration',
    subscribersDir: 'build/subscriber',
  },
  autoLoadEntities: true,
})

// const {
//   POSTGRES_PORT,
//   POSTGRES_USER,
//   POSTGRES_PASSWORD,
//   POSTGRES_DB,
//   POSTGRES_HOST,
//   DB_CONNECTION,
//   DB_TYPE,
// } = ENV;

// const typeOrmConfig: TypeOrmModule = {
//   name: DB_CONNECTION,
//   type: DB_TYPE,
//   host: POSTGRES_HOST,
//   port: POSTGRES_PORT,
//   username: POSTGRES_USER,
//   password: POSTGRES_PASSWORD,
//   database: POSTGRES_DB,
//   synchronize: false,
//   logging: false,
//   entities: [User], // ['../entity/**/*.js'],
//   migrationsRun: true,
//   migrations: [db1624266293839],
//   cli: {
//     entitiesDir: './entity',
//     migrationsDir: './migration',
//     subscribersDir: 'build/subscriber',
//   },
//   autoLoadEntities: true,
// };

// export default typeOrmConfig;
