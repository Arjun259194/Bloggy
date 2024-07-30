"use client";
import action from "@/app/(no_auth)/auth/register/action";
import RegisterForm from "@/components/registerForm";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toastPromise } from "@/util";

export default function CreateUserButton() {
  return (
    <Dialog>
      <DialogTrigger className={buttonVariants()}>Create</DialogTrigger>
      <DialogContent className="max-h-96 overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create new user</DialogTitle>
          <DialogDescription>
            Make sure to check all the infomation before creating a user
          </DialogDescription>
        </DialogHeader>
        <RegisterForm
          action={(formdata) => {
            toastPromise(action(formdata), () => {
              window.location.reload();
              return "Registered";
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
