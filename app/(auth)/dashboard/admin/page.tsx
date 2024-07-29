import BlogManagement from "@/components/dashboard/admin/BlogManager";
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

  return (
    <div className="space-y-5">
      <UserManagement users={users} />
      <BlogManagement blogs={blogs} />
      <CatagoryManagement catagories={catagories} />
    </div>
  );
};

export default page;
