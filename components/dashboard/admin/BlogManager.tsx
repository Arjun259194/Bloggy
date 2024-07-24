'use client'
// components/AdminDashboard/BlogManagement.tsx
import { FC } from 'react';
import toast from 'react-hot-toast';

const fakeBlogs = [
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  {
    id: '1',
    title: 'Sample Blog',
    category: 'Tech',
    uploader: 'John Doe',
  },
  // Add more fake blogs
];

const BlogManagement: FC = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Blog Management</h2>
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
          {fakeBlogs.map((blog) => (
            <tr key={blog.id}>
              <td className='text-center'>{blog.title}</td>
              <td className='text-center'>{blog.category}</td>
              <td className='text-center'>{blog.uploader}</td>
              <td className='text-center'>
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => toast.success('Edit blog')}>
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

export default BlogManagement;

