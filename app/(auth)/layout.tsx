import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import "../globals.css";
import { getSessionUser } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggy",
  description: "One website for all blogs",
};

export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  // this code is responsible for redirecting unauthorized users
  const user = await getSessionUser();
  if (!user) redirect("/auth/login");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  );
}
