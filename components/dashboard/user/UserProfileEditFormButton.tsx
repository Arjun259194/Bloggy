"use client";
import { User } from "@prisma/client";
import { FC, ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useForm from "@/hooks/useForm";
import { getCounrtyDialCode, toastPromise } from "@/util";
import { updateUser } from "@/lib/actions";
import toast from "react-hot-toast";
import axios from "axios";

interface Props {
  user: User;
  children: ReactNode;
}

interface Country {
  name: string;
  dial_code: string;
}

const UserProfileEditFormButton: FC<Props> = ({ user, children }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [state, change, reset] = useForm(user);

  useEffect(() => {
    try {
      const p = getCounrtyDialCode();
      toastPromise(p, (data) => {
        setCountries(
          data.map((d) => ({ name: d.name, dial_code: d.dial_code })),
        );
        return "countries loaded";
      });
    } catch (e) {
      console.error(e);
      toast.error("error");
    }
  }, []);

  useEffect(() => {
    if (!state.countryCode) return;

    const country = countries.find(
      (c) => c.dial_code === state.countryCode,
    )?.name;

    if (!country) {
      toast.error("Re-Enter the country code");
      return;
    }

    change({ target: { name: "country", value: country } } as any);

    try {
      const p = axios.get(
        "https://countriesnow.space/api/v0.1/countries/states/q?country=" +
          country,
      );

      toastPromise(p, (data) => {
        const states = data.data.data.states as {
          name: string;
          state_code: string;
        }[];
        setStates(states.map((s) => s.name));
        return "States loaded";
      });
    } catch (e) {
      console.error(e);
      toast.error("error");
    }
  }, [state.countryCode]);

  useEffect(() => {
    if (!state.state) return;

    let data = JSON.stringify({
      country: state.country,
      state: state.state,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://countriesnow.space/api/v0.1/countries/state/cities",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const p = axios(config);

      toastPromise(p, (data) => {
        const cities = data.data.data as string[];
        setCities(cities);
        console.log(states);
        return "Cities loaded";
      });
    } catch (e) {
      console.error(e);
      toast.error("error");
    }
  }, [state.state]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to change user data?</DialogTitle>
          <DialogDescription>
            make sure to check all field before updating user data.
          </DialogDescription>
          <form
            action={() => {
              toastPromise(
                updateUser({
                  id: user.id,
                  name: state.name,
                  lastName: state.lastName,
                  countryCode: state.countryCode,
                  country: state.country,
                  contactNumber: state.contactNumber,
                  state: state.state,
                  city: state.city,
                  address: state.address,
                  email: state.email,
                  password: state.password,
                  role: state.role,
                }),
                () => "updated",
              );
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
                className="text-sm font-medium text-gray-700 w-24"
                htmlFor="countryCode"
              >
                Country Code
              </label>
              <select
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                id="countryCode"
                name="countryCode"
                required
                value={state.countryCode}
                onChange={change}
              >
                <option value={user.countryCode}>
                  {user.countryCode}(deafult)
                </option>
                {countries.map((country, i) => (
                  <option key={i} value={country.dial_code}>
                    {country.name} ({country.dial_code})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label
                className="text-sm font-medium text-gray-700 w-24"
                htmlFor="country"
              >
                Country
              </label>
              <input
                type="text"
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                id="country"
                name="country"
                required
                value={state.country}
                readOnly
              />
            </div>
            <div className="flex items-center space-x-4">
              <label
                className="text-sm font-medium text-gray-700 w-24"
                htmlFor="state"
              >
                State/Province
              </label>
              <select
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                id="state"
                name="state"
                required
                value={state.state}
                onChange={change}
              >
                <option value={user.state}>{user.state}(default)</option>
                {states.map((state, i) => (
                  <option key={i} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-4">
              <label
                className="text-sm font-medium text-gray-700 w-24"
                htmlFor="city"
              >
                City
              </label>
              <select
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                id="city"
                name="city"
                required
                value={state.city}
                onChange={change}
              >
                <option value={user.city}>{user.city}(default)</option>
                {cities.map((city, i) => (
                  <option key={i} value={city}>
                    {city}
                  </option>
                ))}
              </select>
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

export default UserProfileEditFormButton;
