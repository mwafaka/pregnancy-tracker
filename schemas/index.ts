import { z } from "zod";

export const lmpDateSchema = z.object({
  lmpDate: z
    .string()
    .min(1, "Please enter your last menstrual period date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format"),
});

export const dueDateSchema = z.object({
  dueDate: z
    .string()
    .min(1, "Please enter your due date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format"),
});

export const ovulationSchema = z.object({
  periodStart: z
    .string()
    .min(1, "Please enter your period start date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format"),
  cycleLength: z.coerce
    .number()
    .int()
    .min(21, "Cycle must be 21–45 days")
    .max(45, "Cycle must be 21–45 days")
    .default(28),
  periodLength: z.coerce
    .number()
    .int()
    .min(2, "Period must be 2–10 days")
    .max(10, "Period must be 2–10 days")
    .default(5),
});

export const conceptionSchema = z.object({
  dueDate: z
    .string()
    .min(1, "Please enter your due date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format"),
});

export const ivfSchema = z.object({
  transferDate: z
    .string()
    .min(1, "Please enter your transfer date")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Please use YYYY-MM-DD format"),
  embryoAge: z.coerce.number().int().min(3, "Min 3 days").max(6, "Max 6 days").default(5),
});

export const weightGainSchema = z.object({
  prePregnancyWeight: z.coerce.number().positive("Must be positive").min(30).max(300),
  currentWeight: z.coerce.number().positive("Must be positive").min(30).max(300),
  height: z.coerce.number().positive("Must be positive").min(100).max(250),
  weeksPregnant: z.coerce.number().int().min(1, "Min 1 week").max(40, "Max 40 weeks"),
});

export const healthNoteSchema = z.object({
  title: z.string().min(1, "Title required").max(200),
  content: z.string().min(1, "Content required").max(5000),
  type: z.enum(["note", "symptom", "question"]).default("note"),
  tags: z.array(z.string().max(50)).max(10).default([]),
});

export const appointmentSchema = z.object({
  title: z.string().min(1, "Title required").max(200),
  date: z.string().min(1, "Date required"),
  provider: z.string().min(1, "Provider required").max(200),
  notes: z.string().max(2000).default(""),
  location: z.string().max(500).optional(),
  reminder: z.boolean().default(true),
});

export const profileSchema = z.object({
  name: z.string().min(1).max(100),
  dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  cycleLength: z.coerce.number().int().min(21).max(45).default(28),
  periodLength: z.coerce.number().int().min(2).max(10).default(5),
  theme: z.enum(["light", "dark", "system"]).default("system"),
  notifications: z.boolean().default(true),
});

export type LMPFormData = z.infer<typeof lmpDateSchema>;
export type OvulationFormData = z.infer<typeof ovulationSchema>;
export type ConceptionFormData = z.infer<typeof conceptionSchema>;
export type IVFFormData = z.infer<typeof ivfSchema>;
export type WeightGainFormData = z.infer<typeof weightGainSchema>;
export type HealthNoteFormData = z.infer<typeof healthNoteSchema>;
export type AppointmentFormData = z.infer<typeof appointmentSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
