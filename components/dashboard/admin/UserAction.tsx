"use client";
import { deleteUser } from "@/lib/actions";
import { toastPromise } from "@/util";
import UserUpdateFormButton from "./UserUpdateFormButton";
import { User } from "@prisma/client";
import { FC } from "react";

interface Props {
  user: User;
}

const UserAction: FC<Props> = ({ user }) => {
  return (
    <>
      <UserUpdateFormButton user={user} />
      <button
        className="bg-gray-50 border border-red-600 text-red-600 px-2 py-1 rounded"
        onClick={() => {
          toastPromise(deleteUser(user.id), () => {
            return "Deleted";
          });
        }}
      >
        Delete
      </button>
    </>
  );
};

export default UserAction;
