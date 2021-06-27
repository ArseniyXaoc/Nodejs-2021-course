import { ConnectionOptions } from "typeorm"

  const { POSTGRES_HOST } = process.env;
 // const  POSTGRES_HOST  = 'localhost';

 const x: ConnectionOptions = {
   name: "default",
   type: "postgres",
   host: POSTGRES_HOST,
   port: 5432,
   username: "user",
   password: "123",
   database: "userdb",
   synchronize: false,
   logging: false,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrationsRun: true,
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "build/subscriber/**/*.js"
   ],
   cli: {
      "entitiesDir": "build/entity",
      "migrationsDir": "build/migration",
      "subscribersDir": "build/subscriber"
   }
}

export default x