import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

const { JWT_SECRET_KEY, NODE_ENV, AUTH_MODE, PORT, MONGO_CONNECTION_STRING } = process.env;
export default {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE: AUTH_MODE === 'true'
};
