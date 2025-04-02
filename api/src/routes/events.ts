import { Router, Request, Response } from 'express';
import { z } from 'zod';
import prisma from '@/database/client';

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

router.get('/', async (req: Request, res: Response) => {
  try {
    const events = await prisma.event.findMany();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const eventData = eventSchema.parse(req.body);
    const event = await prisma.event.create({ data: eventData });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: 'Invalid event data' });
  }
});

export const eventRouter = router;
