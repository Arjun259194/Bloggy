"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { Blog, Category, User } from "@prisma/client";

export const updateCatagory = async (
  { id, ...data }: Category,
  path?: string,
) => {
  try {
    await prisma.category.update({ where: { id }, data });
  } catch (err) {
    console.error("Error while updating user:", err);
    throw new Error("Failed to update user");
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

type Data = Pick<Blog, "id" | "title" | "content">;

export const updateBlog = async ({ id, ...data }: Data, path?: string) => {
  try {
    await prisma.blog.update({ where: { id }, data });
  } catch (err) {
    console.error("Error while updating user:", err);
    throw new Error("Failed to update user");
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const updateUser = async ({ id, ...data }: User, path?: string) => {
  try {
    await prisma.user.update({ where: { id }, data });
  } catch (err) {
    console.error("Error while updating user:", err);
    throw new Error("Failed to update user");
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const deleteBlog = async (id: string, path?: string) => {
  try {
    await prisma.blog.delete({ where: { id } });
  } catch (err) {
    console.error("Error while deleting user:", err);
    throw new Error("Failed to delete user");
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const deleteUser = async (id: string, path?: string) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (err) {
    console.error("Error while deleting user:", err);
    throw new Error("Failed to delete user");
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};
