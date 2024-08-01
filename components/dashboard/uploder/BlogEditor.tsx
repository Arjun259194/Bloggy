"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useForm from "@/hooks/useForm";
import { createBlog } from "@/lib/actions";
import { toastPromise } from "@/util";
import { Category, User } from "@prisma/client";
import toast from "react-hot-toast";
import Markdown from "react-markdown";

interface Props {
  user: User;
  categories: Category[];
}

const BlogEditor: React.FC<Props> = ({ user, categories }) => {
  const [state, change] = useForm({
    title: "Untitled",
    content: `# Hello

Start writting`,
    categoryId: "",
  });
  return (
    <section className="md:grid md:grid-cols-2">
      <div className="md:min-h-screen hide-scrollbar overflow-y-auto scroll-smooth p-2">
        <form
          action={() => {
            if (state.title === "Untitled" || state.title === "")
              return toast.error("Not valid title");
            if (state.categoryId === "")
              return toast.error("Not valid category");
            if (state.content === "") return toast.error("not valid content");

            const p = createBlog(user.id, { ...state });
            toastPromise(p, (data) => {
              window.location.href = `/blog/${data.id}`;
              return "Uploaded";
            });
          }}
          className="h-full space-y-2"
        >
          <div className="flex justify-between w-full mb-4">
            <h2 className="text-3xl capitalize font-bold">Bloggy Editor</h2>
            <Button>Upload</Button>
          </div>
          <div className="grid grid-cols-5">
            <input
              value={state.title}
              name="title"
              className="p-1 bg-gray-100 focus:outline-none text-3xl col-span-3"
              onChange={change}
              type="text"
              placeholder="Title"
            />
            <select
              onChange={change}
              name="categoryId"
              id="categoryId"
              className="col-span-2"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option selected={state.categoryId == c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <Separator />
          <textarea
            placeholder="Content"
            className="p-1 border-2 border-red-500 focus:outline-none bg-gray-100 text-lg w-full min-h-96"
            value={state.content}
            onChange={change}
            name="content"
            cols={10}
            id="content"
          ></textarea>
        </form>
      </div>
      <div>
        <Markdown className="prose md:prose-lg mx-auto my-5">
          {state.content}
        </Markdown>
      </div>
    </section>
  );
};

export default BlogEditor;
