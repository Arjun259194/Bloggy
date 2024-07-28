"use client";
import { deleteBlog } from "@/lib/actions";
import { toastPromise } from "@/util";
import { Blog, Category, Subcategory, User } from "@prisma/client";
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
import BlogUpdateFormButton from "./BlogUpdateFormButton";

interface Props {
  blog: Blog;
  categories: Category[];
  subcategories: Subcategory[];
}

const BlogAction: FC<Props> = (props) => {
  return (
    <>
      <BlogUpdateFormButton {...props} />
      <Dialog>
        <DialogTrigger className={buttonVariants({ variant: "destructive" })}>
          Delete
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this blog?
            </DialogTitle>
            <DialogDescription>
              make sure to conferm the blog you want to delete
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
                toastPromise(deleteBlog(props.blog.id), () => "Deleted");
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

export default BlogAction;
