"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function action() {
  "use server";
  cookies().set("token", "");
  redirect("/auth/login");
}
