import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Prisma } from "@prisma/client";
import { Edit, Shield, Upload, User } from "lucide-react";
import Link from "next/link";
import UserUpdateFormButton from "../admin/UserUpdateFormButton";
import UserProfileEditFormButton from "./UserProfileEditFormButton";

type User = Prisma.UserGetPayload<{
  include: {
    blogs: true;
    comments: { include: { blog: true } };
    likes: { include: { blog: true } };
    ratings: true;
  };
}>;

interface Props {
  user: User;
  showEditButton: boolean;
}

const UserProfile: React.FC<Props> = ({ user, showEditButton }) => {
  return (
    <div className=" mx-auto p-6 space-y-8 bg-white rounded-lg shadow-lg">
      <div className="space-y-6 bg-white">
        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <div className="flex space-x-3 items-center">
              <h1 className="text-3xl flex items-center font-bold text-gray-800">
                {user.role === "ADMIN" ? (
                  <Shield className="w-8 h-8" />
                ) : user.role === "BLOG_UPLOADER" ? (
                  <Upload className="w-8 h-8" />
                ) : (
                  <User className="w-8 h-8" />
                )}
                {user.name} {user.lastName}
              </h1>

              {showEditButton ? (
                <UserProfileEditFormButton user={user}>
                  <Button size="icon">
                    <Edit />
                  </Button>
                </UserProfileEditFormButton>
              ) : null}
            </div>
            <div className="text-xs md:text-sm text-gray-700">
              <p className="">{user.email}</p>
              <p>
                {user.countryCode} {user.contactNumber}
              </p>
            </div>
            <div className="space-y-2">
              <p className="capitalize text-xs md:text-sm">
                {user.address.toLowerCase()}
              </p>
              <div className="">
                <Badge variant="outline" className="">
                  {user.city}
                </Badge>
                <Badge variant="outline" className="">
                  {user.state}
                </Badge>
                <Badge variant="outline" className="">
                  {user.country}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {user.role === "BLOG_UPLOADER" ? (
        <>
          <div>
            <h2 className="text-2xl font-semibold text-gray-700">Blogs</h2>
            <ul className="space-y-4">
              {user.blogs.length <= 0 ? (
                <div>
                  <h2 className="text-2xl text-center text-gray-600">
                    No Blog Found
                  </h2>
                </div>
              ) : (
                user.blogs.map((blog, i) => (
                  <li
                    key={i}
                    className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <Link href={`/blog/${blog.id}`}>
                      <div className="block text-lg font-bold text-blue-600 hover:underline">
                        {blog.title}
                      </div>
                    </Link>
                    <p className="text-gray-700">
                      {blog.content.slice(0, 100)}...
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
          <Separator />
        </>
      ) : null}

      <div className="">
        <h2 className="text-2xl font-semibold text-gray-700">Comments</h2>
        <ul className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-2">
          {user.comments.length <= 0 ? (
            <div className="">
              <h2 className="text-2xl text-center text-gray-600">
                No comment Found
              </h2>
            </div>
          ) : (
            user.comments.map((comment) => (
              <li
                key={comment.id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <Link href={`/blog/${comment.blogId}`}>
                  <p className="text-gray-700">{comment.content}</p>
                  <small className="text-gray-500">
                    On: {comment.blog.title}
                  </small>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
      <Separator />

      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Likes</h2>
        <ul className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-2">
          {user.likes.length <= 0 ? (
            <div className="md:col-span-2">
              <h2 className="text-2xl text-center text-gray-600">
                No likes Found
              </h2>
            </div>
          ) : (
            user.likes.map((like) => (
              <li
                key={like.id}
                className="p-4 border border-gray-300 rounded-lg shadow-sm"
              >
                <Link href={`/blog/${like.blogId}`}>
                  <p className="text-gray-700">Liked: {like.blog.title}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
