"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Eye, Tag as TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useBlog } from "@/contexts/BlogContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { addPost } = useBlog();
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  // Calculate read time (assuming 200 words per minute)
  const calculateReadTime = (text: string): number => {
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  // Generate excerpt from content
  const generateExcerpt = (text: string): string => {
    const plainText = text.replace(/#{1,6}\s/g, "").replace(/\*\*/g, "");
    return plainText.substring(0, 150) + (plainText.length > 150 ? "..." : "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in both title and content",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const tagArray = tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
      const excerpt = generateExcerpt(content);
      const readTime = calculateReadTime(content);

      addPost({
        title,
        content,
        excerpt,
        author: user?.name || "Anonymous",
        tags: tagArray,
        readTime,
      });

      toast({
        title: "Success!",
        description: "Your blog post has been created successfully",
      });

      router.push("/blog");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const previewContent = () => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      } else if (paragraph.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="text-xl font-semibold text-gray-900 mt-6 mb-3"
          >
            {paragraph.replace("### ", "")}
          </h3>
        );
      } else if (paragraph.startsWith("- ")) {
        const listItems = paragraph
          .split("\n")
          .filter((item) => item.startsWith("- "));
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-1">
            {listItems.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        );
      } else if (paragraph.trim()) {
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {paragraph}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-brand-50 via-purple-50 to-white py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Create New{" "}
            <span className="bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent">
              Blog Post
            </span>
          </h1>
          <p className="text-gray-600">
            Share your knowledge and insights with the community
          </p>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Blog Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors text-lg"
                  placeholder="Enter your blog post title..."
                  required
                />
              </div>

              {/* Tags */}
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tags (comma-separated)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <TagIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    placeholder="e.g., Technology, Web Development, Tutorial"
                  />
                </div>
              </div>

              {/* Preview Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    type="button"
                    variant={isPreview ? "outline" : "default"}
                    onClick={() => setIsPreview(false)}
                    className={
                      !isPreview ? "bg-brand-600 hover:bg-brand-700" : ""
                    }
                  >
                    Write
                  </Button>
                  <Button
                    type="button"
                    variant={isPreview ? "default" : "outline"}
                    onClick={() => setIsPreview(true)}
                    className={
                      isPreview ? "bg-brand-600 hover:bg-brand-700" : ""
                    }
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
                {content && (
                  <div className="text-sm text-gray-500">
                    {calculateReadTime(content)} min read •{" "}
                    {content.split(/\s+/).length} words
                  </div>
                )}
              </div>

              {/* Content Editor/Preview */}
              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Content
                </label>
                {!isPreview ? (
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={20}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none font-mono text-sm"
                    placeholder="Write your blog content here... You can use Markdown formatting:

## Heading 2
### Heading 3

**Bold text**

- List item 1
- List item 2

Regular paragraph text..."
                    required
                  />
                ) : (
                  <div className="min-h-96 p-6 border border-gray-300 rounded-lg bg-gray-50">
                    {title && (
                      <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        {title}
                      </h1>
                    )}
                    {content ? (
                      <div className="prose prose-lg max-w-none">
                        {previewContent()}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">
                        Start writing to see the preview...
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Markdown Help */}
              {!isPreview && (
                <div className="bg-brand-50 p-4 rounded-lg">
                  <h4 className="text-sm font-medium text-brand-800 mb-2">
                    Markdown Quick Reference:
                  </h4>
                  <div className="text-xs text-brand-700 space-y-1">
                    <div>
                      <code>## Heading 2</code> - Large heading
                    </div>
                    <div>
                      <code>### Heading 3</code> - Medium heading
                    </div>
                    <div>
                      <code>**Bold text**</code> - Bold formatting
                    </div>
                    <div>
                      <code>- List item</code> - Bullet point
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/blog")}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading || !title.trim() || !content.trim()}
                  className="bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-700 hover:to-purple-700"
                >
                  {isLoading ? (
                    "Publishing..."
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Publish Post
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default CreateBlog;
