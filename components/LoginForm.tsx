"use client";
import { toastPromise } from "@/util";
import { Button } from "./ui/button";

export default function LoginForm(props: {
  action: (arg1: FormData) => Promise<void>;
}): JSX.Element {
  return (
    <form
      action={async (formdata) => {
        const p = props.action(formdata);
        toastPromise(p, () => {
          // window.location.href = "/home"
          return "Logged in";
        });
      }}
      className="space-y-3"
    >
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
          id="password"
          name="password"
          required
        />
      </div>
      <div className="mb-4">
        <Button>Login</Button>
      </div>
    </form>
  );
}

// <Form className="space-y-3" action={async (formdata) => {
//     const p = props.action(formdata);
//     toastPromise(p, () => {
//         // window.location.href = "/home"
//         return "Logged in"
//     });
// }}>
//   <Form.Group>
//     <Form.Label>Email</Form.Label>
//     <Form.Control required type="text" name="email" />
//   </Form.Group>
//   <Form.Group>
//     <Form.Label>Password</Form.Label>
//     <Form.Control required type="password" name="password" />
//   </Form.Group>
//   <Form.Group>
//     <Button>Login</Button>
//   </Form.Group>
// </Form>
