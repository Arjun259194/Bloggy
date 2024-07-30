import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useForm from "@/hooks/useForm";
import { updateCatagory, updateUser } from "@/lib/actions";
import { toastPromise } from "@/util";
import { Category } from "@prisma/client";
import React, { useState } from "react";

interface Props {
  category: Category;
}

const CategoryUpdateFormButton: React.FC<Props> = ({ category }) => {
  const [state, change, reset] = useForm(category);

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to change user data?</DialogTitle>
          <DialogDescription>
            make sure to check all field before updating user data.
          </DialogDescription>
          <form
            action={() => {
              toastPromise(updateCatagory(state), () => "updated");
            }}
            className="space-y-4 p-4"
          >
            <div className="flex items-center space-x-4">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                value={state.name}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="w-full flex justify-between items-center">
              <Button
                variant={"outline"}
                onClick={(e) => {
                  e.preventDefault();
                  reset();
                }}
              >
                Reset
              </Button>
              <Button>Update</Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryUpdateFormButton;
