import ENV  from './common/config';
import app from './app';

const { PORT } = ENV;

app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`App is running on http://localhost:${PORT}`)
);
