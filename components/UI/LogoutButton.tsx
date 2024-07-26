'use client'
import Button from "./Button";
import { toastPromise } from "@/util";
import action from "./logout";

export default function LogoutButton() {
  return (
    <Button
      variant="secondary"
      disabled={false}
      onClick={() => {
        const p = action();
        toastPromise(p);
      }}
    >
      Logout
    </Button>
  );
}
