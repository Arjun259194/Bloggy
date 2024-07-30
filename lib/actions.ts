"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { Blog, Category, Prisma, User } from "@prisma/client";

function ErrorHandler(error: unknown): never {
  console.error("Error:", error);
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        throw new Error("Resource already exists.");
      case "P2016":
        throw new Error("Record not found.");
      case "P2025":
        throw new Error("Record not found.");
      default:
        throw new Error("A database error occurred.");
    }
  } else {
    throw new Error("Error");
  }
}


export const deleteCategory = async (id:string, path?: string) => {
  try {
    await prisma.category.delete({where: {id}})
  } catch (error) {
    ErrorHandler(error)
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
}

export const createCategory = async (name: string, path?: string) => {
  try {
    await prisma.category.create({ data: { name } });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const updateCatagory = async ( {id, name}:Category, path?: string) => {
  try {
    await prisma.category.update({ where: { id }, data: {
      name
    } });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

type Data = Pick<Blog, "id" | "title" | "content" | "categoryId">;

export const updateBlog = async ({ id, ...data }: Data, path?: string) => {
  try {
    await prisma.blog.update({ where: { id }, data });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const updateUser = async ({ id, ...data }: User, path?: string) => {
  try {
    await prisma.user.update({ where: { id }, data });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const deleteBlog = async (id: string, path?: string) => {
  try {
    await prisma.blog.delete({ where: { id } });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const deleteUser = async (id: string, path?: string) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};
