import { z } from "zod";

export const FormSchema = z.object({
  email: z.string().describe("Email").email({ message: "Invalid Email" }),
  password: z
    .string()
    .describe("Password ")
    .min(1, { message: "Password is required" }),
});

export const SignupFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password ")
      .min(6, { message: "Must be a minimum of six characters" }),
    confirmPassword: z
      .string()
      .describe("Confirm Password ")
      .min(6, { message: "Must be a minimum of six characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
