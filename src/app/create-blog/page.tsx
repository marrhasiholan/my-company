import Layout from "@/components/Layout";
import CreateBlog from "@/components/pages/CreateBlog";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CreateBlogPage() {
  return (
    <ProtectedRoute>
      <Layout>
        <CreateBlog />
      </Layout>
    </ProtectedRoute>
  );
}
