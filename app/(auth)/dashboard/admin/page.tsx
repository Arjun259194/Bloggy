import BlogManagement from "@/components/dashboard/admin/BlogManager";
import CategoryManagement from "@/components/dashboard/admin/CategoryManagement";
import UserManagement from "@/components/dashboard/admin/UserManager";
import prisma from "@/lib/db";
import { checkRole } from "@/lib/utils";

const page = async () => {
  await checkRole("ADMIN");

  const [blogs, users, catagories] = await Promise.all([
    prisma.blog.findMany({ include: { category: true, uploader: true } }),
    prisma.user.findMany(),
    prisma.category.findMany(),
  ]);

  console.log(catagories);

  return (
    <div className="space-y-5 lg:grid lg:grid-col-3 lg:gap-3">
      <UserManagement users={users} />
      <BlogManagement categories={catagories} blogs={blogs} />
      <CategoryManagement catagories={catagories} />
    </div>
  );
};

export default page;
