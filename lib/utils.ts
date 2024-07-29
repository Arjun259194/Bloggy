import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { redirect } from "next/navigation";
import { $Enums } from "@prisma/client";
import { getSessionUser } from "./auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function checkRole(role: $Enums.Role) {
  const user = await getSessionUser();
  if (!user) redirect("/auth/login");
  if (user.role !== role) {
    switch (user.role) {
      case "ADMIN":
        redirect("/dashboard/admin");
      case "USER":
        redirect("/dashboard/user");
      case "BLOG_UPLOADER":
        redirect("/dashboard/uploader");
    }
  }
  return user;
}
