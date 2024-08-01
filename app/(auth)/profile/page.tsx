import UserProfile from "@/components/dashboard/user/Profile";
import { getSessionUser } from "@/lib/auth";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await getSessionUser();
  if (!user) redirect("/auth/login");

  const fullUserData = await prisma.user.findFirst({
    where: { id: user.id },
    include: {
      blogs: true,
      comments: { include: { blog: true } },
      likes: { include: { blog: true } },
      ratings: true,
    },
  });
  if (!fullUserData) throw new Error("User not found");

  return <UserProfile user={fullUserData} />;
}
