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
import { Blog, Category, Subcategory } from "@prisma/client";
import { toastPromise } from "@/util";
import { updateBlog } from "@/lib/actions";

interface Props {
  blog: Blog;
  categories: Category[];
  subcategories: Subcategory[];
}

const BlogUpdateFormButton: FC<Props> = ({ blog, ...props }) => {
  const [state, change, reset] = useForm({
    title: blog.title,
    content: blog.content,
  });

  useEffect(() => console.table(state), [state]); // debug

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        Edit
      </DialogTrigger>
      <DialogContent className="min-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Are you sure you want to change blog data?</DialogTitle>
          <DialogDescription>
            Make sure to check all fields before updating blog data.
          </DialogDescription>
          <form
            action={() => {
              toastPromise(updateBlog({ id: blog.id, ...state }));
            }}
            className="space-y-4 p-4"
          >
            <div className="flex flex-col space-y-2">
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
            <div className="flex flex-col space-y-2">
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
                rows={20}
                className="block overflow-auto w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
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

export default BlogUpdateFormButton;
