"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center border-b-2 border-b-gray-200 justify-between container mx-auto py-3">
      <div className="flex items-center space-x-10">
        <h1 className="text-3xl font-semibold capitalize">
          <Link href="/">Bloggy</Link>
        </h1>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard/user">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <div className="hidden md:flex space-x-3">
          <Button asChild variant="secondary">
            <Link href="/auth/register">Register</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden z-40 absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/dashboard/user" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/auth/register" onClick={() => setIsOpen(false)}>
                <Button variant="secondary">Register</Button>
              </Link>
            </li>
            <li>
              <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                <Button>Login</Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

// export default function Header() {
//   return (
//     <header className="flex items-center border-b-2 border-b-gray-200 justify-between container mx-auto py-3">
//       <div className="flex items-center space-x-10">
//         <h1 className="text-3xl font-semibold capitalize">
//           <Link href="/">Bloggy</Link>
//         </h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div className="flex items-center space-x-3">
//         <Link href="/auth/register">
//           <Button variant="secondary">Register</Button>
//         </Link>
//         <Link href="/auth/login">
//           <Button>Login</Button>
//         </Link>
//       </div>
//     </header>
//   );
// }
