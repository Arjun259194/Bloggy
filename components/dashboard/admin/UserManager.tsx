// components/AdminDashboard/UserManagement.tsx
'use client'
import { FC } from "react";
import toast from "react-hot-toast";

const fakeUsers = [
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  {
    id: "1",
    name: "John",
    lastName: "Doe",
    countryCode: "+1",
    country: "USA",
    contactNumber: "1234567890",
    state: "CA",
    city: "Los Angeles",
    address: "123 Main St",
    email: "john@example.com",
    role: "ADMIN",
  },
  // Add more fake users
];

const UserManagement: FC = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">User Management</h2>
      <table className="w-full bg-white rounded shadow text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fakeUsers.map((user) => (
            <tr key={user.id}>
              <td>
                {user.name} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => toast.success("Edit user")}
                >
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

export default UserManagement;
