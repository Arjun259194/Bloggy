import React, { FC, useEffect } from "react";
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
import {  Category, Subcategory } from "@prisma/client";

type Cat = Category & { subcategories: Subcategory[] };

interface Props {
  catagory: Cat;
}

const CatagoryUpdateFormButton: FC<Props> = ({ catagory }) => {
  const [state, change, reset] = useForm(catagory);

  useEffect(() => console.table(state), [state]); // debug

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to change blog data?</DialogTitle>
          <DialogDescription>
            Make sure to check all fields before updating blog data.
          </DialogDescription>
          <form className="space-y-4 p-4">
            <div className="flex items-center space-x-4">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Title
              </label>
              <input
                name="title"
                type="text"
                value={state.title}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="content"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Content
              </label>
              <textarea
                name="content"
                value={state.content}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="categoryId"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Category
              </label>
              <select
                name="categoryId"
                id="categoryId"
                value={state.categoryId}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {props.categories.map((cat) => {
                  return (
                    <option
                      selected={state.subcategoryId === cat.id}
                      value={cat.id}
                    >
                      {cat.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="subcategoryId"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Subcategory
              </label>
              <select
                name="subcategoryId"
                id="subcategoryId"
                value={state.subcategoryId}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {props.subcategories.map((sub) => {
                  return (
                    <option
                      selected={state.subcategoryId === sub.id}
                      value={sub.id}
                    >
                      {sub.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex w-full items-center justify-between">
              <Button
                variant={"outline"}
                onClick={(e) => {
                  e.preventDefault();
                  reset();
                }}
              >
                reset
              </Button>
              <Button>Update</Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CatagoryUpdateFormButton;
