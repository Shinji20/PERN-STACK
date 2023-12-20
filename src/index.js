import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import router from './routes/tasks.routes.js';
import { port } from './config.js';

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

app.use(router);

app.use((err, req, res, next) => {
  return res.json({ message: err.message });
});

app.listen(port);
console.log(`server listening on port ${port}`);
