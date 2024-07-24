import z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    // .min(8, { message: "Password must be at least 8 characters long" })
    // .regex(/[a-z]/, {
    //   message: "Password must contain at least one lowercase letter",
    // })
    // .regex(/[A-Z]/, {
    //   message: "Password must contain at least one uppercase letter",
    // })
    // .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});



/*
model User {
  id            String       @id @default(auto()) @map("_id") @db.ObjectId
  name          String
  lastName      String
  countryCode   Int
  country       String
  contactNumber String
  state         String
  city          String
  address       String
  email         String      @unique
  password      String
  role          Role
  blogs         Blog[]      @relation("UserBlogs")
  comments      Comment[]
  likes         Like[]
  ratings       Rating[]
  followers     Following[] @relation("UserFollowers")
  following     Following[] @relation("UserFollowing")

  @@map("users")
}
 */

export const registerFormSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  countryCode: z.string({message: "Not valid country code"}),
  country: z.string(),
  contactNumber: z.string(),
  state: z.string(),
  city: z.string(),
  address: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string(),
  confirmPassword: z.string(),
  role: z.enum(["USER", "ADMIN", "BLOG_UPLOADER"]), // Assuming roles are defined
})
