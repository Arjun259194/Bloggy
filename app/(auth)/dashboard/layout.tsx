import { SidebarWrapper } from "@/components/UI/SideBarWrapper";

export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarWrapper>
      <div className="flex-grow p-4 md:p-6 overflow-y-auto">{children}</div>
    </SidebarWrapper>
  );
}
