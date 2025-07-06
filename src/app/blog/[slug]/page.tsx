import { getBlogPostById } from "@/lib/data";
import { notFound } from "next/navigation"; //

interface BlogPostDetailProps {
  params: {
    slug: string;
  };
}

export default function BlogPostDetailPage({ params }: BlogPostDetailProps) {
  const { slug } = params;
  const post = getBlogPostById(slug);

  if (!post) {
    notFound(); //
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container mx-auto py-12 p-4 max-w-4xl">
      <article className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-6">
          By {post.author} on {formattedDate}
        </p>
        <div className="prose max-w-none mb-8">
          <p>{post.content}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
