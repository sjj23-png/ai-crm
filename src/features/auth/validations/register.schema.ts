import { z } from "zod";

export const RegisterSchema = z
  .object({
    // Organization
    name: z.string().min(2, "Organization name is required"),

    code: z.string().optional(),

    email: z.string().email("Invalid organization email"),

    phone: z
      .string()
      .min(10, "Invalid phone number")
      .optional()
      .or(z.literal("")),

    website: z
      .string()
      .url("Invalid website URL")
      .optional()
      .or(z.literal("")),

    // Owner

    ownerName: z.string().min(2, "Owner name is required"),

    ownerEmail: z.string().email("Invalid owner email"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),

    terms: z.literal(false, {
  message: "Please accept Terms & Conditions",
}),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterDto = z.infer<typeof RegisterSchema>;