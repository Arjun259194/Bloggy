export default async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen container mx-auto">
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
