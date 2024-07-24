'use server'
import RegisterForm from "@/components/registerForm";
import Link from "next/link";
import { Container } from "react-bootstrap";
import action from "./action";
import prisma from "@/lib/db";

export default async function page() {
  return (
    <div className="my-3">
      <Container className="max-w-3xl space-y-3">
        <h2 className="text-3xl capitalize my-3">Register Form</h2>
        <RegisterForm action={action} />
        <p>Already joined? <Link href="/auth/login" className="text-blue-500 underline underline-offset-2">login</Link></p>
      </Container>
    </div>
  );
}
