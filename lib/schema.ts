import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({ message: "not valid password" }),
  // .min(8, { message: "Password must be at least 8 characters long" })
  // .regex(/[a-z]/, {
  //   message: "Password must contain at least one lowercase letter",
  // })
  // .regex(/[A-Z]/, {
  //   message: "Password must contain at least one uppercase letter",
  // })
  // .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

export const registerFormSchema = z.object({
  name: z.string({ message: "Not valid name" }),
  lastName: z.string({ message: "Not valid lastname" }),
  countryCode: z.string({ message: "Not valid country code" }),
  country: z.string({ message: "No counrty selected" }),
  contactNumber: z.string({ message: "Not valid contact number" }),
  state: z.string({ message: "Not valid state" }),
  city: z.string({ message: "Not valid city" }),
  address: z.string({ message: "Not valid address" }),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, { message: "Not strong password" }),
  confirmPassword: z.string(),
  role: z.enum(["USER", "ADMIN", "BLOG_UPLOADER"], {
    message: "Not valid role",
  }),
});
