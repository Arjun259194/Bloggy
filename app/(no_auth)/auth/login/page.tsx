import LoginForm from "@/components/LoginForm";
import { Container } from "react-bootstrap";
import action from "./action";

export default function page() {
  return (
    <div className="min-h-96 grid place-items-center">
      <Container className="max-w-3xl">
        <h2 className="text-3xl capitalize my-3">Login Form</h2>
        <LoginForm action={action} />
      </Container>
    </div>
  );
}
