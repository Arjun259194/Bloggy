'use client'
import { Form } from "react-bootstrap";
import Button from "./UI/Button";
import { toastPromise } from "@/util";

export default function LoginForm(props: {action: (arg1:FormData) => Promise<void>}): JSX.Element {
  return (
    <Form className="space-y-3" action={async (formdata) => {
        const p = props.action(formdata);
        toastPromise(p, () => {
            // window.location.href = "/home"
            return "Logged in"
        });
    }}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control required type="text" name="email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" name="password" />
      </Form.Group>
      <Form.Group>
        <Button>Login</Button>
      </Form.Group>
    </Form>
  );
}
