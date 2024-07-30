// components/AdminDashboard/UserManagement.tsx
import { User } from "@prisma/client";
import { FC } from "react";
import UserAction from "./UserAction";
import CreateUserButton from "./CreateUserButton";

interface Props {
  users: User[];
}

const UserManagement: FC<Props> = ({ users }) => {
  return (
    <div className="md:text-base text-sm lg:col-span-3">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-2xl mb-4">User Management</h2>
        <CreateUserButton />
      </div>
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
          <tbody className="divide-y-2 space-y-3">
            {users.map((user, i) => (
              <tr key={i}>
                <td>
                  {user.name} {user.lastName}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="space-x-4">
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
