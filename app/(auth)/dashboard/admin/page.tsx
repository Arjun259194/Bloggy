import BlogManagement from "@/components/dashboard/admin/BlogManager";
import CategoryManagement from "@/components/dashboard/admin/CatagoriesManager";
import UserManagement from "@/components/dashboard/admin/UserManager";
import prisma from "@/lib/db";

const page = async () => {
  const [blogs, categories, users] = await Promise.all([
    prisma.blog.findMany({ include: { category: true, uploader: true } }),
    prisma.category.findMany({ include: { subcategories: true } }),
    prisma.user.findMany(),
  ]);

  return (
    <div className="space-y-5 md:grid md:gap-4 md:grid-cols-2">
      <UserManagement users={users} />
      <BlogManagement blogs={blogs} />
      <CategoryManagement categories={categories} />
    </div>
  );
};

export default page;
