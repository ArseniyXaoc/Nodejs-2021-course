import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardsRouter from './resources/boards/boards.router';
import tasksRouter from './resources/task/tasks.router';
import {logger, errorHandler, uncaughtHandler} from './utils';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
uncaughtHandler();
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(logger);
app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {    
    res.send('Service is running!');
    return;
  }
  next();  
});
app.get('/test', async (_req, _res, next) => next(new Error('Unhandled Error')));
app.get('/test1', async () => {
  throw new Error();
});
app.use('/users', userRouter);
app.use('/boards', boardsRouter);
app.use('/boards/:boardId/tasks', tasksRouter);
app.use(errorHandler);





// Promise.reject(Error('Oops!'));

export default app;
