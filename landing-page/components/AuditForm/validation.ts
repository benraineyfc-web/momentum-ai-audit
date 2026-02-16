import { z } from 'zod';

export const step1Schema = z.object({
  businessType: z.string().min(1, 'Business type is required'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
});

export const step2Schema = z.object({
  biggestFrustration: z.string().min(1, 'Please select a frustration'),
  otherFrustration: z.string().optional(),
});

export const step3Schema = z.object({
  timeWasted: z.string().min(1, 'Please select time wasted'),
  monthlyRevenue: z.string().min(1, 'Please select revenue range'),
});

export const step4Schema = z.object({
  aiToolsUsed: z.string().min(1, 'Please answer this question'),
  aiToolsList: z.string().optional(),
  aiWish: z.string().min(10, 'Please provide more detail'),
});

export const step5Schema = z.object({
  priceFeeling: z.string().min(1, 'Please select an option'),
});

export const fullFormSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step4Schema)
  .merge(step5Schema);
