import { checkRole } from "@/lib/utils";

export default async function page() {
  await checkRole("USER")
  return (
    <div>
      <h1> this is home page </h1>
      <p>only auth user can come here</p>
    </div>
  );
}
