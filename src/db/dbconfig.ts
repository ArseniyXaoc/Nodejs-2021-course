import { TypeOrmModule } from '@nestjs/typeorm';

import { db1624266293839 } from "../migration/1624266293839-db";
import { User } from '../entity'


// const { POSTGRES_HOST } = process.env;
const  POSTGRES_HOST = '192.168.99.101'
const typeOrmConfig: TypeOrmModule = {
    name: 'default',
    type: 'postgres',
    host: POSTGRES_HOST,
    port: 5433,
    username: 'user',
    password: '123',
    database: 'userdb',
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
  
  export default typeOrmConfig