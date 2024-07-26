"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const deleteUser = async (id: string) => {
  console.log(id);
  try {
    await prisma.user.delete({
      where: { id: id, },
      include: {
        blogs: true,
        likes: true,
        ratings: true,
        comments: true,
        followers: true,
        following: true,
      },
    });
  } catch (err) {
    console.error("Error while deleting user:", err);
    throw new Error("Failed to delete user");
  }

  revalidatePath("/dashboard/admin");
  return;
};
