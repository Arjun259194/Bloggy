import { Category, Subcategory } from "@prisma/client";

type Cat = Category & { subcategories: Subcategory[] };

interface Props {
  catagories: Cat[];
}

const CategoryManagement: React.FC<Props> = ({ catagories }) => {
  return (
    <div className="md:text-base text-sm col-span-2">
      <h2 className="text-2xl mb-4">User Management</h2>
      {catagories.length <= 0 ? (
        <div className="text-center italic font-semibold text-gray-600">
          No Data
        </div>
      ) : (
        <table className="w-full bg-white rounded shadow text-center">
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 space-y-3">
            {catagories.map((category, i) => (
              <tr key={i}>
                <td>{category.name}</td>
                <td className="space-x-4">
                    {
                      //here
                    }
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
