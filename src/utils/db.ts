import { Sequelize } from 'sequelize';

const { POSTGRES_HOST } = process.env

const sequelize = new Sequelize('userdb', 'user', '123', {
  host: POSTGRES_HOST,
  port: 5432,
  dialect: 'postgres',  
});



export default sequelize;