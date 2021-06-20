import { ConnectionOptions } from "typeorm"

// const { POSTGRES_HOST } = process.env || 'localhost'

 const x: ConnectionOptions = {
   name: "default",
   type: "postgres",
   host: '127.0.0.1',
   port: 5432,
   username: "user",
   password: "123",
   database: "userdb",
   synchronize: false,
   logging: false,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "build/migration/**/*.js"
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