import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import sessionRoutes from './routes/session.routes';
import handleErrorMiddleware from './middlewares/handleError.middleware';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/session', sessionRoutes);

app.use(handleErrorMiddleware);

export default app;