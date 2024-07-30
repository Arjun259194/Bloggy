"use client";
import { deleteCategory } from "@/lib/actions";
import { toastPromise } from "@/util";
import { Category } from "@prisma/client";
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
import CategoryUpdateFormButton from "./CategoryUpdateFormButton";

interface Props {
  category: Category;
}

const CategoryAction: FC<Props> = ({ category }) => {
  return (
    <>
      <CategoryUpdateFormButton category={category} />
      <Dialog>
        <DialogTrigger className={buttonVariants({ variant: "destructive" })}>
          Delete
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this category?
            </DialogTitle>
            <DialogDescription>
              make sure to conferm the category you want to delete
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
                toastPromise(deleteCategory(category.id), () => {
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
export default CategoryAction;
