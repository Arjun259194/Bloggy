import SearchBlog from "@/components/dashboard/user/SearchBlog";
import BlogCard from "@/components/UI/BlogCard";
import TrandingBlog from "@/components/UI/TrandingBlog";
import prisma from "@/lib/db";
import { checkRole } from "@/lib/utils";

export default async function page() {
  const { id } = await checkRole("USER");
  const blogs = await prisma.blog.findMany({
    include: {
      likes: true,
      category: true,
      ratings: true,
    },
  });

  return (
    <div className="overflow-y-auto md:grid md:grid-cols-4 md:gap-5">
      <div className="md:col-span-3 space-y-3">
        <SearchBlog blogs={blogs} />
        {blogs.reverse().map((b, i) => {
          return <BlogCard key={i} {...b} sessionUserId={id} />;
        })}
      </div>
      <div className="md:sticky md:top-4">
        <TrandingBlog blogs={blogs} />
      </div>
    </div>
  );
}
