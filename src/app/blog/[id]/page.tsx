import Layout from "@/components/Layout";
import BlogDetail from "@/components/pages/BlogDetail";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <BlogDetail id={params.id} />
    </Layout>
  );
}
