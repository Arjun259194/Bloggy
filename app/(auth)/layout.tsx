import { Inter } from "next/font/google";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import "../globals.css";
import { getSessionUser } from "@/lib/auth";
import { SidebarWrapper } from "@/components/UI/SideBarWrapper";

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
 <SidebarWrapper>
      <main className="flex-grow p-4 md:p-6 overflow-y-auto">{children}</main>
    </SidebarWrapper>
      </body>
    </html>
  );
}
