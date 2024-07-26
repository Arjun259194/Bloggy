import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex items-center border-b-2 border-b-gray-200 justify-between container mx-auto py-3">
      <div className="flex items-center space-x-10">
        <h1 className="text-3xl font-semibold capitalize">
          <Link href="/">Bloggy</Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <Link href="/auth/register">
          <Button variant="secondary">Register</Button>
        </Link>
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
      </div>
    </header>
  );
}
