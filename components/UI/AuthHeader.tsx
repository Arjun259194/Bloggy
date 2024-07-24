import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Header() {
  return (
    <header className="flex items-center border-b-2 border-b-gray-200 justify-between container mx-auto py-3">
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
    </header>
  );
}
