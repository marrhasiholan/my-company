"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBlog } from "@/contexts/BlogContext";
import { motion } from "framer-motion";

interface BlogDetailProps {
  id: string;
}

const BlogDetail = ({ id }: BlogDetailProps) => {
  const { getPost } = useBlog();

  const post = getPost(id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Post Not Found
          </h1>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 space-x-6 mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>
                  {new Date(post.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-xl"
        />
      </motion.div>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="text-2xl font-bold text-gray-900 mt-12 mb-6"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            } else if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold text-gray-900 mt-8 mb-4"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            } else if (paragraph.startsWith("- ")) {
              const listItems = paragraph
                .split("\n")
                .filter((item) => item.startsWith("- "));
              return (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                  {listItems.map((item, idx) => (
                    <li key={idx} className="text-gray-700">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            } else if (paragraph.trim()) {
              return (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Author Bio */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <div className="flex items-center">
            <img
              src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {post.author}
              </h4>
              <p className="text-gray-600">Senior Developer at TechFlow</p>
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-200 pt-8 mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Share this article
          </h3>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm">
              Share on Twitter
            </Button>
            <Button variant="outline" size="sm">
              Share on LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Copy Link
            </Button>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default BlogDetail;
