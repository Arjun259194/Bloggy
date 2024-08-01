import BlogEditor from "@/components/dashboard/uploder/BlogEditor";
import prisma from "@/lib/db";
import { checkRole } from "@/lib/utils";

export default async function page() {
  const user = await checkRole("BLOG_UPLOADER");

  const categories = await prisma.category.findMany();

  return (
    <div>
      <BlogEditor categories={categories} user={user} />
    </div>
  );
}
