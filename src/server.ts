import ENV  from './common/config';
import app from './app';

const { PORT } = ENV;

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
