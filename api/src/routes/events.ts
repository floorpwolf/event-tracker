import { Router } from 'express';
import prisma from '../database/client';
import { z } from 'zod';

const router = Router();

const eventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  date: z.coerce.date(),
  location: z.string().min(3),
  organizer: z.string().min(3),
  link: z.string().url().optional(),
  tags: z.array(z.string()).optional()
});

router.get('/', async (req, res) => {
  const events = await prisma.event.findMany();
  res.json(events);
});

router.post('/', async (req, res) => {
  try {
    const eventData = eventSchema.parse(req.body);
    const event = await prisma.event.create({ data: eventData });
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: 'Invalid event data' });
  }
});

export const eventRouter = router;
