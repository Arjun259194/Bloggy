"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { Blog, Category, Prisma, User } from "@prisma/client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

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
      case "P2003":
        throw new Error("Foreign key constraint failed.");
      case "P2004":
        throw new Error("A constraint failed on the database.");
      case "P2005":
        throw new Error("Invalid value for a field.");
      case "P2006":
        throw new Error("Value out of range for the column.");
      case "P2007":
        throw new Error("Validation error.");
      case "P2008":
        throw new Error("Database timeout.");
      case "P2009":
        throw new Error("Query interpretation error.");
      case "P2010":
        throw new Error("Raw query failed.");
      case "P2011":
        throw new Error("Null constraint violation.");
      case "P2012":
        throw new Error("Missing required value.");
      case "P2013":
        throw new Error("Missing required argument.");
      case "P2014":
        throw new Error("Relation violation.");
      case "P2015":
        throw new Error("Invalid field for the model.");
      case "P2017":
        throw new Error("Multiple results returned where only one expected.");
      case "P2018":
        throw new Error("No results returned from the database.");
      case "P2019":
        throw new Error("Input error.");
      case "P2020":
        throw new Error("Table does not exist in the database.");
      case "P2021":
        throw new Error("Record not found for update.");
      case "P2022":
        throw new Error("Unique constraint violation.");
      case "P2023":
        throw new Error("Foreign key violation.");
      case "P2024":
        throw new Error("Transaction failed.");
      default:
        throw new Error("A database error occurred.");
    }
  } else {
    throw new Error("Error");
  }
}

export const deleteCategory = async (id: string, path?: string) => {
  try {
    await prisma.category.delete({ where: { id } });
  } catch (error) {
    ErrorHandler(error);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const createCategory = async (name: string, path?: string) => {
  try {
    await prisma.category.create({ data: { name } });
  } catch (err) {
    ErrorHandler(err);
  }

  revalidatePath(path ?? "/dashboard/admin");
  return;
};

export const updateCatagory = async ({ id, name }: Category, path?: string) => {
  try {
    await prisma.category.update({
      where: { id },
      data: {
        name,
      },
    });
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

export const logout = async () => {
  cookies().set("token", "");
  redirect("/auth/login");
};

export const createRating = async (
  data: {
    blogId: string;
    userId: string;
    value: number;
  },
  path?: string,
) => {
  if (data.value > 5 || data.value < 1) throw new Error("Not valid rating");

  try {
    const rating = await prisma.rating.findFirst({
      where: { blogId: data.blogId, userId: data.userId },
    });

    if (!rating) {
      await prisma.rating.create({ data });
    } else {
      await prisma.rating.update({
        where: {
          id: rating.id,
        },
        data: {
          value: data.value,
        },
      });
    }
  } catch (error) {
    ErrorHandler(error);
  }

  revalidatePath(path ?? "/dashboard/user");
  return;
};

export const createComment = async (
  data: {
    userId: string;
    blogId: string;
    content: string;
  },
  path?: string,
) => {
  try {
    await prisma.comment.create({ data });
  } catch (error) {
    ErrorHandler(error);
  }

  revalidatePath(path ?? "/dashboard/user");
  return;
};

export const likeBlog = async (
  userId: string,
  blogId: string,
  path?: string,
) => {
  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        blogId: blogId,
        userId: userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({ where: { id: existingLike.id } });
    } else {
      await prisma.like.create({ data: { userId, blogId } });
    }
  } catch (error) {
    ErrorHandler(error);
  }

  revalidatePath(path ?? "/dashboard/user");
  return;
};
