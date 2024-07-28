export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen container mx-auto">
      <main className="flex-grow py-6 px-2">{children}</main>
    </div>
  );
}
