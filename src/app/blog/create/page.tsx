"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth"; // hook simulasi autentikasi
import BlogForm from "@/components/blog/BlogForm";
import { addBlogPost } from "@/lib/data"; // fungsi untuk menambahkan blog ke "database"
import { BlogPost } from "@/lib/data"; //

export default function CreateBlogPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/auth/login");
    }
  }, [user, authLoading, router]);

  const handleBlogSubmit = async (
    values: Omit<BlogPost, "id" | "publishDate" | "author" | "imageUrl"> & {
      tags: string[];
    }
  ) => {
    setIsSubmitting(true);

    const newPost: Omit<BlogPost, "id"> = {
      ...values,
      author: user?.username || "Anonymous",
      publishDate: new Date().toISOString(),
      imageUrl: "/blog-thumb-placeholder.jpg",
    };

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulasi delay API
    addBlogPost(newPost); // Memanggil fungsi dari lib/data
    console.log("New blog added:", newPost);
    setIsSubmitting(false);
    router.push("/blog");
  };

  if (authLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)]">
        <p>Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto py-12 p-4">
      <h1 className="text-5xl font-bold text-center mb-8">
        Create New Blog Post
      </h1>
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <BlogForm onSubmit={handleBlogSubmit} isLoading={isSubmitting} />
      </div>
    </div>
  );
}
