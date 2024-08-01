"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useForm from "@/hooks/useForm";
import { createComment } from "@/lib/actions";
import { toastPromise } from "@/util";
import { ReactNode } from "react";

interface Props {
  blogId: string;
  userId: string;
  children: ReactNode
}

const CommentButton: React.FC<Props> = ({ userId, blogId, children }) => {
  const [{ content }, change, reset] = useForm({
    content: "",
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Write a comment</DialogTitle>
        </DialogHeader>
        <form
          action={() => {
            const p = createComment({ userId, blogId, content });
            toastPromise(p);
            reset();
          }}
          className="space-y-4 p-4"
        >
          <div className="flex flex-col space-y-2">
            <textarea
              name="content"
              value={content}
              onChange={change}
              rows={10}
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
      </DialogContent>
    </Dialog>
  );
};

export default CommentButton;
