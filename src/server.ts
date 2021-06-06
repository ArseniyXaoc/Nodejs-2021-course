import ENV  from './common/config';
const { PORT } = ENV;
import app from './app';

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
