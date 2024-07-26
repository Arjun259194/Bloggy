// components/AdminDashboard/UserManagement.tsx
import { deleteUser } from "@/lib/actions";
import { toastPromise } from "@/util";
import { User } from "@prisma/client";
import { FC } from "react";
import UserUpdateFormButton from "./UserUpdateFormButton";
import UserAction from "./UserAction";

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

interface Props {
  users: User[];
}

const UserManagement: FC<Props> = ({ users }) => {
  return (
    <div className="col-span-2">
      <h2 className="text-2xl mb-4">User Management</h2>
      {users.length <= 0 ? (
        <div className="text-center italic font-semibold text-gray-600">
          No Data
        </div>
      ) : (
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
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.name} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <UserAction user={user} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserManagement;
