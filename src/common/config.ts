import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  JWT_SECRET_KEY,
  NODE_ENV,
  AUTH_MODE,
  PORT,
  MONGO_CONNECTION_STRING,
  AUTH_KEY,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST = '192.168.99.101',
  DB_CONNECTION,
  DB_TYPE,
  USE_FASTIFY,
} = process.env;

export default {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE: AUTH_MODE === 'true',
  AUTH_KEY,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
  DB_CONNECTION,
  DB_TYPE,
  USE_FASTIFY
};
