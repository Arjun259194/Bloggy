import BlogManagement from "@/components/dashboard/admin/BlogManager";
import { calScore } from "@/components/UI/TrandingBlog";
import prisma from "@/lib/db";
import { checkRole } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function page() {
  const user = await checkRole("BLOG_UPLOADER");

  const [blogs, categories] = await Promise.all([
    prisma.blog.findMany({
      where: { uploaderId: user.id },
      include: { ratings: true, likes: true, category: true, uploader: true },
    }),
    prisma.category.findMany(),
  ]);

  return (
    <div className="">
      <div className="space-y-3 md:grid md:grid-cols-6 *:shadow-lg md:gap-4 md:grid-rows-3">
        <div className="rounded-xl p-10 flex flex-col hover:shadow-none items-center justify-center bg-gray-50 border-2 border-gray-200 text-center">
          <p className="text-6xl font-bold">{blogs.length}</p>
          <p className="text-gray-500 capitalize font-semibold">Total Posts</p>
        </div>
        <div className="rounded-xl p-10  flex  flex-col hover:shadow-none  items-center justify-center border-2 md:col-span-2 border-gray-200 bg-gray-50 text-center">
          <p className="text-6xl font-bold">
            {blogs.reduce((sum, curr) => sum + curr.likes.length, 0)}
          </p>
          <p className="text-gray-500 capitalize font-semibold">
            Total number of likes on all posts
          </p>
        </div>
        <div className="rounded-xl p-10 border-2 md:col-span-3 flex flex-col hover:shadow-none  items-center justify-center  border-gray-200 bg-gray-50 text-center">
          <p className="text-6xl md:text-8xl font-bold">
            {blogs
              .map((b) =>
                b.ratings.length <= 0
                  ? 0
                  : b.ratings.reduce((sum, curr) => sum + curr.value, 0) /
                  b.ratings.length,
              )
              .reduce((sum, curr) => sum + curr, 0)}
          </p>
          <p className="text-gray-500 capitalize font-semibold">
            Average rating of all blogs
          </p>
        </div>
        <div className="rounded-xl border-2 md:col-span-5 md:row-span-2 overflow-y-auto border-gray-200 p-2 hover:shadow-none  text-center">
          <BlogManagement
            categories={categories}
            blogs={blogs.map(
              ({
                id,
                title,
                content,
                categoryId,
                tags,
                uploaderId,
                category,
                uploader,
              }) => ({
                id,
                title,
                content,
                categoryId,
                tags,
                uploaderId,
                category,
                uploader,
              }),
            )}
          />
        </div>
        <Link
          className="rounded-xl bg-gray-800 text-gray-200 hover:shadow-none  flex flex-col items-center justify-center p-10 border-2  border-gray-200 text-center"
          href="/editor"
        >
          <Plus className="w-14 h-14 " />
          <p className="capitalize text-2xl font-semibold">Write Blog</p>
        </Link>
        <div className="rounded-xl p-10 flex flex-col hover:shadow-none items-center justify-center bg-gray-50 border-2 border-gray-200 text-center">
          <p className="text-6xl font-bold">
            {blogs.map((b) => calScore(b)).reduce((sum, curr) => sum + curr)}
          </p>
          <p className="text-gray-500 capitalize font-semibold">
            Tranding Score
          </p>
        </div>
      </div>
    </div>
  );
}
