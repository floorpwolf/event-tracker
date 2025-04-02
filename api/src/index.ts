import express from 'express';
import cors from 'cors';
import { eventRouter } from '@/routes/events';
import prisma from '@/database/client';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/events', eventRouter);

const startServer = async () => {
  await prisma.$connect();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
