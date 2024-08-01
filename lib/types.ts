import prisma from "./db";

type UserUpdateFn = typeof prisma.user.update;

type UserUpdateFnParam =  Parameters<UserUpdateFn>

export type UserUpdateFnData = UserUpdateFnParam[0]['data']


