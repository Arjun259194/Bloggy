import BlogManagement from "@/components/dashboard/admin/BlogManager";
import UserManagement from "@/components/dashboard/admin/UserManager";
import prisma from "@/lib/db";

const page = async () => {
  const [blogs, users] = await Promise.all([
    prisma.blog.findMany({ include: { category: true, uploader: true } }),
    prisma.user.findMany(),
  ]);

  return (
    <div className="space-y-5">
      <UserManagement users={users} />
      <BlogManagement blogs={blogs} />
    </div>
  );
};

export default page;
