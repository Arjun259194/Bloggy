import { cookies } from "next/headers";
import * as jwt from "jsonwebtoken";

/**
 * Returns User id if authorized and authenticated
 */
export function getUserId() {
  let token = cookies().get("token")?.value;
  if (!token) return undefined;
  const userID = JWTToken.valid(token);
  return userID;
}

export class JWTToken {
  static create = (id: string) =>
    jwt.sign(id, process.env.JWT_SECRET || "SUPER_SECRET");

  static valid = (token: string): string | undefined => {
    try {
      return jwt.verify(
        token,
        process.env.JWT_SECRET || "SUPER_SECRET"
      ) as string;
    } catch (error) {
      console.error("Not a valid token");
      return undefined;
    }
  };
}
