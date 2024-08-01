"use client";
import { deleteUser } from "@/lib/actions";
import { toastPromise } from "@/util";
import UserUpdateFormButton from "./UserUpdateFormButton";
import { Category, User } from "@prisma/client";
import { FC } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";

interface Props {
  user: User;
}

const UserAction: FC<Props> = ({ user }) => {
  return (
    <>
      <UserUpdateFormButton user={user}>
        <Button variant="secondary">Edit</Button>
      </UserUpdateFormButton>
      <Dialog>
        <DialogTrigger className={buttonVariants({ variant: "destructive" })}>
          Delete
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this user?
            </DialogTitle>
            <DialogDescription>
              make sure to conferm the user you want to delete
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <Button
              onClick={() => {
                toastPromise(deleteUser(user.id), () => {
                  return "Deleted";
                });
              }}
              variant="destructive"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

// <button
//   className="bg-gray-50 border border-red-600 text-red-600 px-2 py-1 rounded"
//   onClick={() => {
//     toastPromise(deleteUser(user.id), () => {
//       return "Deleted";
//     });
//   }}
// >
//   Delete
// </button>
export default UserAction;
