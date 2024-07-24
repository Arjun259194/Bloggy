import BlogManagement from "@/components/dashboard/admin/BlogManager";
import CategoryManagement from "@/components/dashboard/admin/CatagoriesManager";
import UserManagement from "@/components/dashboard/admin/UserManager";

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <BlogManagement />
      <CategoryManagement />
      <UserManagement />
    </div>
  );
};

export default page;
