"use server";
import { cookies } from "next/headers";
import prisma from "./db";
import { JWTToken } from "./jwt";

export async function getSessionUser() {
  try {
    const userID = (() => {
      let token = cookies().get("token")?.value;
      if (!token) return undefined;
      const userID = JWTToken.valid(token);
      return userID;
    })();

    if (!userID) return undefined;

    return (
      (await prisma.user.findFirst({ where: { id: userID } })) ?? undefined
    );
  } catch (err) {
    console.error("Error while getting session user: ", err);
    return undefined;
  }
}
