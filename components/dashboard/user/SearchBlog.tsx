"use client";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { Blog } from "@prisma/client";

type Props = {
  blogs: Blog[];
};

const SearchBlog: React.FC<Props> = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [query, setQuery] = useState("");

  const filteredBlogs =
    query === ""
      ? blogs
      : blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query.toLowerCase()),
      );

  const handleSelection = (blog: Blog) => {
    setSelectedBlog(blog);
    if(blog.id) 
      window.location.href = `/blog/${blog.id}`;
  };

  return (
    <div className="w-full rounded-md ouline-none focus:outline-none mx-auto">
      <Combobox
        value={selectedBlog}
        onChange={handleSelection}
        onClose={() => setQuery("")}
      >
        <div className="relative">
          <ComboboxInput
            aria-label="Search Blog"
            displayValue={(blog: Blog | null) => (blog ? blog.title : "")}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for a blog..."
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
          />
          <ComboboxOptions className="absolute w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {filteredBlogs.length === 0 && (
              <div className="p-2 text-gray-500">No results found</div>
            )}
            {filteredBlogs.map((blog) => (
              <ComboboxOption
                key={blog.id}
                value={blog}
                className={({ active }) =>
                  `cursor-pointer select-none relative p-3 ${active ? "bg-blue-100" : "bg-white"}`
                }
              >
                <span className="block truncate">{blog.title}</span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBlog;
