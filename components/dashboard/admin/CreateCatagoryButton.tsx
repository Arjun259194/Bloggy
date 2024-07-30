"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createCategory } from "@/lib/actions";
import { toastPromise } from "@/util";
import React, { useState } from "react";

const CreateCatagoryButton = () => {
  const [name, setName] = useState("");

  function reset() {
    setName("");
  }

  return (
    <Dialog>
      <DialogTrigger className={buttonVariants()}>Create</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Create new Catagory</DialogTitle>
        </DialogHeader>
        <form
          className="space-y-3"
          action={() => {
            toastPromise(createCategory(name), () => {
              reset();
              return "created category";
            });
          }}
        >
          <div className="">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 w-24"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(event) => setName((_) => event.target.value)}
              className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between items-center">
            <Button
              onClick={(e) => {
                e.preventDefault();
                reset();
              }}
              variant={"outline"}
            >
              Reset
            </Button>
            <Button>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCatagoryButton;
