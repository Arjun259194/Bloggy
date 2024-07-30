import { Blog, Category, User } from "@prisma/client";
import { FC } from "react";
import BlogAction from "./BlogAction";

interface Props {
  blogs: (Blog & {
    category: Category | null;
    uploader: User;
  })[];
  categories: Category[];
}

const BlogManagement: FC<Props> = async ({ blogs, categories }) => {
  return (
    <div className="text-sm md:text-base lg:col-span-2">
      <h2 className="text-2xl mb-4">Blog Management</h2>
      {blogs.length <= 0 ? (
        <div className="text-center italic font-semibold text-gray-600">
          No Data
        </div>
      ) : (
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Uploader</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, i) => (
              <tr key={i}>
                <td className="text-center">{blog.title}</td>
                <td className="text-center">
                  {blog?.category?.name ?? "Not assigned"}
                </td>
                <td className="text-center">{blog.uploader.name}</td>
                <td className="text-center space-x-3">
                  <BlogAction categories={categories} blog={blog} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BlogManagement;
