import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import sessionRoutes from './routes/session.routes';
import handleErrorMiddleware from './middlewares/handleError.middleware';
import roomRoutes from './routes/room.routes';
import guestRoutes from './routes/guest.routes';
import managerRoutes from './routes/manager.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/session', sessionRoutes);
app.use('/room', roomRoutes);
app.use('/guest', guestRoutes);
app.use('/manager', managerRoutes);

app.use(handleErrorMiddleware);

export default app;