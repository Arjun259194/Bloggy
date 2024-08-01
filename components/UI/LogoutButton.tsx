"use client";
import { toastPromise } from "@/util";
import { logout } from "@/lib/actions";
import { Button } from "../ui/button";

export default function LogoutButton() {
  return (
    <Button
      variant="secondary"
      disabled={false}
      onClick={() => {
        const p = logout();
        toastPromise(p);
      }}
    >
      Logout
    </Button>
  );
}
