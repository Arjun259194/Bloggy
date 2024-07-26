"use server";
import RegisterForm from "@/components/registerForm";
import Link from "next/link";
import action from "./action";

export default async function page() {
  return (
    <div className="my-3">
      <section className="container mx-auto max-w-3xl space-y-3">
        <h2 className="text-3xl capitalize my-3">Register Form</h2>
        <p>
          Already joined?{" "}
          <Link
            href="/auth/login"
            className="text-blue-500 underline underline-offset-2"
          >
            login
          </Link>
        </p>
        <RegisterForm action={action} />
      </section>
    </div>
  );
}
