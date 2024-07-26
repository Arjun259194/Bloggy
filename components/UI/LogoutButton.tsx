'use client'
import { toastPromise } from "@/util";
import action from "./logout";
import { Button } from "../ui/button";

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
