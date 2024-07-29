import * as jwt from "jsonwebtoken";

export class JWTToken {
  static create = (id: string) =>
    jwt.sign(id, process.env.JWT_SECRET || "SUPER_SECRET");

  static valid = (token: string): string | undefined => {
    try {
      return jwt.verify(
        token,
        process.env.JWT_SECRET || "SUPER_SECRET",
      ) as string;
    } catch (error) {
      console.error("Not a valid token");
      return undefined;
    }
  };
}
