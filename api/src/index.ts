import express from 'express';
import cors from 'cors';
import { eventRouter } from './routes/events';
import prisma from './database/client';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/events', eventRouter);

const PORT = process.env.PORT || 3001;
prisma.$connect().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
