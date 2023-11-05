import { z } from "zod"

export const validationSchema = z.object({
  name: z.string({
    required_error: "Name is required.",
  }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email(),
  details: z.string({
    required_error: "Details is required.",
  }),
});