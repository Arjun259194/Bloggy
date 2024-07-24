"use client";

import { useEffect, useState } from "react";
import useForm from "@/hooks/useForm";
import { Col, Form, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "./UI/Button";
import { getCounrtyDialCode, toastPromise } from "@/util";

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

const RegisterForm = (props: { action: (arg1: FormData) => Promise<void> }) => {
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
          data.map((d) => ({ name: d.name, dial_code: d.dial_code }))
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
      (c) => c.dial_code === state.countryCode
    )?.name;

    if (!country) {
      toast.error("Re-Enter the country code");
      return;
    }

    change({ target: { name: "country", value: country } } as any);

    try {
      const p = axios.get(
        "https://countriesnow.space/api/v0.1/countries/states/q?country=" +
          country
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
    <Form
      action={async (formdata) => {
        const p = props.action(formdata);
        toastPromise(
          p,
          () => {
            window.location.href = "/auth/login";
            return "Registered";
          },
          (err) => `${err}`
        );
      }}
      className="space-y-4"
    >
      <Row>
        <Col md={6}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              value={state.name}
              onChange={change}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={state.lastName}
              required
              onChange={change}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="contactNumber">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
          type="text"
          name="contactNumber"
          required
          inputMode="numeric"
          // pattern="[0-9]"
          value={state.contactNumber}
          onChange={change}
        />
      </Form.Group>
      <Form.Group controlId="countryCode">
        <Form.Label>Country Code</Form.Label>
        <Form.Control
          as="select"
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
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          name="country"
          required
          value={state.country}
          readOnly
        />
      </Form.Group>
      <Row>
        <Col md={6}>
          <Form.Group controlId="state">
            <Form.Label>State/Province</Form.Label>
            <Form.Control
              as="select"
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
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              as="select"
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
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          required
          value={state.address}
          onChange={change}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          required
          value={state.email}
          onChange={change}
        />
      </Form.Group>
      <Form.Group className="space-y-3">
        <span>Role</span>
        <div className="flex space-x-5">
          <div className="flex space-x-3">
            <Form.Check
              type="radio"
              id="blog-uploader"
              value="BLOG_UPLOADER"
              name="role"
              onChange={change}
              checked={state.role === "BLOG_UPLOADER"}
            />
            <Form.Label htmlFor="blog-uploader"> Reader </Form.Label>
          </div>
          <div className="flex space-x-3">
            <Form.Check
              type="radio"
              id="user"
              value="USER"
              name="role"
              checked={state.role === "USER"}
              onChange={change}
            />
            <Form.Label htmlFor="user">Blog Uploader</Form.Label>
          </div>
        </div>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          required
          value={state.password}
          onChange={change}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          required
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Button type="submit">Register</Button>
      </Form.Group>
    </Form>
  );
};

export default RegisterForm;
