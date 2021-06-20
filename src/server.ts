import sequelize from './utils/db';
import ENV  from './common/config';
import app from './app';

const { PORT } = ENV;

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App is running on http://localhost:${PORT}`)
);

sequelize.authenticate().then(
  () => {
      console.log('Connected to DB');
  }
).catch((err: Error) =>{
  throw new Error(err.message);
});