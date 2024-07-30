import CreateCatagoryButton from "./CreateCatagoryButton";
import CategoryAction from "./CategoryAction";
import { Category } from "@prisma/client";

interface Props {
  catagories: Category[];
}

const CategoryManagement: React.FC<Props> = ({ catagories }) => {
  return (
    <div className="md:text-base text-sm">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl mb-4">Category Management</h2>
        <CreateCatagoryButton />
      </div>
      {catagories.length <= 0 ? (
        <div className="text-center italic font-semibold text-gray-600">
          No Data
        </div>
      ) : (
        <>
          <table className="w-full bg-white rounded shadow text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 space-y-3">
              {catagories.map((category, i) => (
                <tr key={i}>
                  <td>{category.name}</td>
                  <td className="space-x-4">
                    <CategoryAction category={category} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CategoryManagement;
