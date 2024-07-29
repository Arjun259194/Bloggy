"use server";
import prisma from "@/lib/db";
import { PasswordHash } from "@/lib/hash";
import { registerFormSchema } from "@/lib/schema";

const action = async (formData: FormData) => {
  const obj = {
    name: formData.get("name"),
    lastName: formData.get("lastName"),
    countryCode: formData.get("countryCode"),
    country: formData.get("country"),
    contactNumber: formData.get("contactNumber"),
    state: formData.get("state"),
    city: formData.get("city"),
    address: formData.get("address"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    role: formData.get("role"),
  };

  const parsedObj = registerFormSchema.safeParse(obj);

  if (!parsedObj.success) {
    console.error(parsedObj.error.message)
    throw new Error("Not valid form data");

  }

  const { data } = parsedObj;

  const findUser = await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });

  if (findUser) throw new Error("User already exits");

  const { password, confirmPassword, ...newUserData } = data;

  const NOT_MATCHING_PASSWORD = password !== confirmPassword;
  if (NOT_MATCHING_PASSWORD) throw new Error("Password not matching");

  try {
    await prisma.user.create({
      data: {
        ...newUserData,
        password: await PasswordHash.new(password),
        contactNumber: data.contactNumber.toString(),
      },
    });
  } catch (err) {
    console.error("Error while creating user", err);
    throw new Error("Error while creating new user");
  }

  return;
};

export default action;
