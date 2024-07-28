"use client";
import { Category, Subcategory } from "@prisma/client";
import { FC } from "react";
import toast from "react-hot-toast";

const fakeCategories = [
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  {
    id: "1",
    name: "Tech",
    subcategories: ["AI", "Blockchain"],
  },
  // Add more fake categories
];

type Cat = Category & { subcategories: Subcategory[] };

interface Props {
  categories: Cat[];
}

const CategoryManagement: FC<Props> = ({ categories }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Category Management</h2>
      {categories.length <= 0 ? (
        <div className="text-center italic font-semibold text-gray-600">
          No Data
        </div>
      ) : (
        <table className="w-full bg-white rounded shadow text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th className="hidden lg:block">Subcategories</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => (
              <tr key={i}>
                <td>{category.name}</td>
                <td className="hidden lg:block">
                  {category.subcategories.map((sub, i) => (
                    <span key={i}>{sub.name}</span>
                  ))}
                </td>
                <td>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => toast.success("Edit category")}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-gray-50 border border-red-600 text-red-600 px-2 py-1 rounded"
                    onClick={() => toast.error("Delete blog")}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoryManagement;
