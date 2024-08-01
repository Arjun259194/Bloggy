"use server";
import db from "@/lib/db";
import { PasswordHash } from "@/lib/hash";
import { JWTToken } from "@/lib/jwt";
import { loginFormSchema } from "@/lib/schema";
import { cookies } from "next/headers";

export default async function action(formData: FormData) {
  const parsedObj = loginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedObj.success) throw new Error(parsedObj.error.message);

  const { email, password } = parsedObj.data;

  const foundUser = await db.user.findFirst({ where: { email } });
  if (!foundUser) throw new Error("User not found");

  const isRightPass = await PasswordHash.check(password, foundUser.password);
  if (!isRightPass) throw new Error("Wrong password");

  const token = JWTToken.create(foundUser.id);

  const cookieStore = cookies();
  cookieStore.set("token", token, { path: "/", httpOnly: true, maxAge: 86400 });

  return;
}
