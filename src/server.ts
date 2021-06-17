
import ENV  from './common/config';
import app from './app';
import { TryDbConnect } from './db/connection';


const { PORT } = ENV;
TryDbConnect(() => {
  app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App is running on http://localhost:${PORT}`)
);
})


