import prisma from "@/lib/db";
import { checkRole } from "@/lib/utils";

export default async function page() {
  const user = await checkRole("BLOG_UPLOADER");

  const blogs = await prisma.blog.findMany({
    where: {
      uploaderId: user.id,
    },
  });

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Blog Uploader Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Create New Blog</h2>
          <BlogForm onSubmit={(formData) => console.log(formData)} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogList.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 border rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
