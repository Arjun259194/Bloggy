import UserProfile from "@/components/dashboard/user/Profile";
import prisma from "@/lib/db";

type Props = {
  params: { id: string };
};

export default async function page({ params: { id } }: Props) {
  const foundUser = await prisma.user
    .findFirst({
      where: { id },
      include: {
        ratings: true,
        likes: { include: { blog: true } },
        comments: { include: { blog: true } },
        blogs: true,
      },
    })
    .catch(() => {
      throw new Error("Error while fetching data from database");
    });

  if (!foundUser) throw new Error("User not found in database");

  return <UserProfile showEditButton={false} user={foundUser} />;
}
