import BlogPostCard from "@/components/blog/BlogPostCard";
import { getBlogPosts } from "@/lib/data"; // ambil data dari simulasi database

export default function BlogListPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto py-12 p-4">
      <h1 className="text-5xl font-bold text-center mb-8">Our Blog</h1>
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
        Temukan artikel terbaru, wawasan industri, dan berita dari tim kami.
      </p>

      {posts.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">
          No blog posts available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
