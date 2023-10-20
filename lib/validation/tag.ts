import z from "zod";

export const tagDeleteSchema = z.object({
    id: z.string(),
    title: z.string(),
})

export const slugSchema =  z.object({
    slug: z.string(),
  });

export const tagCreateSchema =  z.object({
    title: z.string(),
    status: z.boolean(),
    user_id: z.string(),
  });


export const tagEditFormSchema = z.object({
    title: z
      .string()
      .min(2, {
        message: "Title must be at least 2 characters.",
      })
      .max(120, {
        message: "Title must not be longer than 120 characters.",
      }),
    status: z.boolean().optional(),
  });

export const tagUpdateSchema = z.object({
    title: z.string(),
    status: z.boolean(),
})