'use client'
import { FC } from 'react';
import toast from 'react-hot-toast';

const fakeCategories = [
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  {
    id: '1',
    name: 'Tech',
    subcategories: ['AI', 'Blockchain'],
  },
  // Add more fake categories
];

const CategoryManagement: FC = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Category Management</h2>
      <table className="w-full bg-white rounded shadow text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subcategories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fakeCategories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.subcategories.join(', ')}</td>
              <td>
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => toast.success('Edit category')}>
                  Edit
                </button>
                <button className="bg-gray-50 border border-red-600 text-red-600 px-2 py-1 rounded" onClick={() => toast.error('Delete blog')}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryManagement;
