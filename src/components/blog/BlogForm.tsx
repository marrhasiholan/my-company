"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const blogSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters." }) 
    .max(100, { message: "Title cannot exceed 100 characters." }), 
  excerpt: z
    .string()
    .min(10, { message: "Excerpt must be at least 10 characters." })
    .max(200, { message: "Excerpt cannot exceed 200 characters." }),
  content: z
    .string()
    .min(50, { message: "Content must be at least 50 characters." }),
  tags: z.string().optional(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

interface BlogFormProps {
  onSubmit: (values: Omit<BlogFormValues, "tags"> & { tags: string[] }) => void;
  isLoading: boolean;
}

export default function BlogForm({ onSubmit, isLoading }: BlogFormProps) {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null); // tambahin state buat pesan

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      tags: "",
    },
  });

  const handleFormSubmit = async (values: BlogFormValues) => {
    setMessage(null);
    try {
      const tagsArray = values.tags
        ? values.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0)
        : [];
      await onSubmit({ ...values, tags: tagsArray });
      form.reset();
      setMessage({ type: "success", text: "Blog created successfully!" });
      alert("Blog Post Created Sucessfully!");
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to create blog post. Please try again.",
      });
      alert("Failed to create blog post!");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmit)}
        className="space-y-6"
      >
        {message && ( // tampilin pesan di sini
          <div
            className={`p-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your amazing blog title"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A short summary of your blog post"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write your full blog content here..."
                  rows={10}
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField //
          control={form.control} 
          name="tags"
          render={({ field }) => ( 
            <FormItem>
              <FormLabel>Tags (comma-separated)</FormLabel> 
              <FormControl>
                <Input
                  placeholder="react, nextjs, webdev"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-secondary hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Blog Post"} 
        </Button>
      </form>
    </Form>
  );
}
