import { TypeOrmModule } from '@nestjs/typeorm';

import { db1624266293839 } from '../migration/1624266293839-db';
import { User } from '../entity';
import ENV from '../common/config';

const {
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  DB_CONNECTION,
  DB_TYPE,
} = ENV;

const typeOrmConfig: TypeOrmModule = {
  name: DB_CONNECTION,
  type: DB_TYPE,
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: [User], // ['../entity/**/*.js'],
  migrationsRun: true,
  migrations: [db1624266293839],
  cli: {
    entitiesDir: './entity',
    migrationsDir: './migration',
    subscribersDir: 'build/subscriber',
  },
  autoLoadEntities: true,
};

export default typeOrmConfig;
