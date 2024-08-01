import { Blog, Category, Like, Rating } from "@prisma/client";
import React from "react";
import Link from "next/link";

type CompleteBlog = Blog & {
  category: Category | null;
  likes: Like[];
  ratings: Rating[];
};

interface Props {
  blogs: CompleteBlog[];
}

function calScore(b: CompleteBlog, LIKE_WAIGHT = 1, RATING_WAIGHT = 2): number {
  const totalLikes = b.likes.length;
  const averageRating =
    b.ratings.length > 0
      ? b.ratings.reduce((sum, curr) => sum + curr.value, 0) / b.ratings.length
      : 0;

  return totalLikes * LIKE_WAIGHT + averageRating * RATING_WAIGHT;
}

const TrandingBlog: React.FC<Props> = ({ blogs }) => {
  const trandingBlogs = blogs
    .sort((a, b) => calScore(b) - calScore(a))
    .slice(0, 5);

  trandingBlogs.map((b) => {
    console.log(b.title);
    console.log("Score is " + calScore(b));
  });

  return (
    <div className="bg-white rounded-lg hidden md:block p-2 divide-y-2 divide-gray-800 ">
      <h2 className="text-2xl font-semibold text-gray-700">Tranding</h2>
      {trandingBlogs.map((b) => {
        return (
          <>
            <Link href={`/blog/${b.id}`}>
              <p className="hover:underline p-2 font-semibold text-gray-600">
                {b.title}
              </p>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default TrandingBlog;
