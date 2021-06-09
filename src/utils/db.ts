import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('gamedb', 'slash', '123', {
  host: 'localhost', 
  port: 5433,
  dialect: 'postgres',  
});



export default sequelize;