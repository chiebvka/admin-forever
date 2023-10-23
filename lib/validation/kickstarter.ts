import * as z from "zod";

export const kickFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Firstname must be at least 2 characters.",
    }),
  description: z
    .string()
    .min(2, {
      message: "Firstname must be at least 2 characters.",
    }),
  youtube_link: z
    .string()
    .min(2, {
      message: "Lastname must be at least 2 characters.",
    }),
  kickstarter_link: z
    .string()
    .min(2, {
      message: "Lastname must be at least 2 characters.",
    }),
});

export const kickSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  youtube_link: z.string(),
  kickstarter_link: z.string(),
});
