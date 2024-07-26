"use client";
import { User } from "@prisma/client";
import { FC, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useForm from "@/hooks/useForm";

interface Props {
  user: User;
}

const UserUpdateFormButton: FC<Props> = ({ user }) => {
  const [state, change] = useForm(user);

  useEffect(() => console.table(state), [state]); // debug

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
          <form className="space-y-4 p-4">
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
            <div className="flex items-center space-x-4">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                value={state.lastName}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                value={state.email}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Address
              </label>
              <input
                name="address"
                type="text"
                value={state.address}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="countryCode"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Country Code
              </label>
              <input
                name="countryCode"
                type="text"
                value={state.countryCode}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Country
              </label>
              <input
                name="country"
                type="text"
                value={state.country}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="state"
                className="text-sm font-medium text-gray-700 w-24"
              >
                State
              </label>
              <input
                name="state"
                type="text"
                value={state.state}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700 w-24"
              >
                City
              </label>
              <input
                name="city"
                value={state.city}
                onChange={change}
                type="text"
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                htmlFor="role"
                className="text-sm font-medium text-gray-700 w-24"
              >
                Role
              </label>
              <select
                name="role"
                id="role"
                value={state.role}
                onChange={change}
                className="block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option selected={user.role === "USER"} value="USER">
                  User
                </option>
                <option
                  selected={user.role === "BLOG_UPLOADER"}
                  value="BLOG_UPLOADER"
                >
                  Uploader
                </option>
                <option selected={user.role === "ADMIN"} value="ADMIN">
                  Admin
                </option>
              </select>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserUpdateFormButton;
