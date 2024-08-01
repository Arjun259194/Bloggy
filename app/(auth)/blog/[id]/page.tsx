import BlogPostAction from "@/components/BlogPostAction";
import NoBlogFound from "@/components/NoBlogFound";
import { Separator } from "@/components/ui/separator";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { getSessionUser } from "@/lib/auth";
import prisma from "@/lib/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";

type Props = {
  params: { id: string };
};

export default async function page({ params: { id } }: Props) {
  const u = await getSessionUser();
  if (!u) redirect("/auth/login");
  const blog = await prisma.blog.findFirst({
    where: { id },
    include: {
      likes: true,
      comments: {
        include: {
          user: true,
        },
      },
      ratings: true,
    },
  });
  if (!blog) return <NoBlogFound />;
  return (
    <div className="container mx-auto md:w-1/2 p-2">
      <h1 className="text-3xl md:text-6xl text-center capitalize mb-10 text-gray-950 font-bold">
        {blog.title}
      </h1>
      <Separator />
      <BlogPostAction sessionUserId={u.id} {...blog} />
      <Separator />
      <TracingBeam>
        <Markdown className="prose md:prose-lg mx-auto my-5">
          {blog.content}
        </Markdown>
      </TracingBeam>
      <Separator />
      <div className="mt-20">
        <h2 className="text-4xl capitalize font-semibold">Comments</h2>
        <Separator />
        <div className="space-y-5 mt-5">
          {blog.comments.map(({ content, user }) => {
            return (
              <div className="p-4 rounded-lg border border-gray-300 bg-white shadow-lg hover:shadow-md transition-shadow duration-300 max-w-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="text-lg md:text-xl font-semibold text-gray-900">
                    <Link href={`/user/${user.id}`}>
                      {user.name} {user.lastName}
                    </Link>
                  </span>
                </div>
                <div className="mt-3 text-gray-700 text-base">
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
{
  // <div className="p-4 space-y-2 rounded-2xl border-2 border-gray-200 bg-gray-100 shadow-md hover:shadow-none max-w-2xl min-w-xl">
  //   <span className="text-lg md:text-xl capitalize font-semibold">
  //     <Link href={`/user/${c.user.id}`}>
  //       {c.user.name + " " + c.user.lastName}
  //     </Link>
  //   </span>
  //   <p>{c.content}</p>
  // </div>
}
