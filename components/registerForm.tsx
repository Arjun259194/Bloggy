"use client";

import { useEffect, useState } from "react";
import useForm from "@/hooks/useForm";
import toast from "react-hot-toast";
import axios from "axios";
import { getCounrtyDialCode, toastPromise } from "@/util";
import { Button } from "./ui/button";

interface Country {
  name: string;
  dial_code: string;
}

interface State {
  name: string;
  lastName: string;
  countryCode: string;
  country: string;
  contactNumber: string;
  state: string;
  city: string;
  address: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "USER" | "BLOG_UPLOADER";
}

const RegisterForm = (props: {
  action: (arg1: FormData) => void;
}) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [state, change] = useForm<State>({
    name: "",
    lastName: "",
    countryCode: "",
    country: "",
    contactNumber: "",
    state: "",
    city: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

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
    <form
      className="space-y-5 mx-5 md:mx-0"
      action={props.action}
    >
      <div className="md:grid md:grid-cols-2 md:gap-3 w-full">
        <div className="">
          <div className="">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              id="name"
              name="name"
              required
              value={state.name}
              onChange={change}
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              id="lastName"
              name="lastName"
              required
              value={state.lastName}
              onChange={change}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="text"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="contactNumber"
          name="contactNumber"
          required
          value={state.contactNumber}
          onChange={change}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="countryCode">Country Code</label>
        <select
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="countryCode"
          name="countryCode"
          required
          value={state.countryCode}
          onChange={change}
        >
          <option value="">Select country code</option>
          {countries.map((country, i) => (
            <option key={i} value={country.dial_code}>
              {country.name} ({country.dial_code})
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="country">Country</label>
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
      <div className="md:grid md:grid-cols-2 md:gap-3 w-full">
        <div className="">
          <div className="">
            <label htmlFor="state">State/Province</label>
            <select
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              id="state"
              name="state"
              required
              value={state.state}
              onChange={change}
            >
              <option value="">Select state/province</option>
              {states.map((state, i) => (
                <option key={i} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="">
          <div className="">
            <label htmlFor="city">City</label>
            <select
              className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
              id="city"
              name="city"
              required
              value={state.city}
              onChange={change}
            >
              <option value="">Select city</option>
              {cities.map((city, i) => (
                <option key={i} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="address"
          name="address"
          required
          value={state.address}
          onChange={change}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="email"
          name="email"
          required
          value={state.email}
          onChange={change}
        />
      </div>
      <div className="mb-4 space-y-3">
        <span>Role</span>
        <div className="flex space-x-5">
          <div className="flex space-x-1">
            <input
              type="radio"
              id="blog-uploader"
              value="BLOG_UPLOADER"
              name="role"
              onChange={change}
              checked={state.role === "BLOG_UPLOADER"}
            />
            <label htmlFor="blog-uploader">Uploader</label>
          </div>
          <div className="flex space-x-1">
            <input
              type="radio"
              id="user"
              value="USER"
              name="role"
              onChange={change}
              checked={state.role === "USER"}
            />
            <label htmlFor="user">User</label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="password"
          name="password"
          required
          value={state.password}
          onChange={change}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={state.confirmPassword}
          onChange={change}
        />
      </div>
      <div className="mb-4">
        <Button>Register</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
