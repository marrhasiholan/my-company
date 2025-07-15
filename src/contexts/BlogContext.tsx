'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  tags: string[];
  publishDate: string;
  readTime: number;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'publishDate'>) => void;
  getPost: (id: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to TechFlow',
    content: `## Introduction

Welcome to TechFlow, your trusted partner in innovative technology solutions.

### What We Do

- Web Development
- Cloud Solutions
- Cybersecurity

**Empowering your business with technology.**`,
    excerpt: 'Welcome to TechFlow, your trusted partner in innovative technology solutions.',
    author: 'Admin User',
    tags: ['Introduction', 'TechFlow'],
    publishDate: new Date().toISOString(),
    readTime: 3,
  },
  {
    id: '2',
    title: 'Getting Started with Our Services',
    content: `## Our Services

We offer a wide range of services to help your business grow:

- Custom Web Development
- Cloud Infrastructure
- Security Audits

### Why Choose Us?

**Expertise, reliability, and innovation.**`,
    excerpt: 'We offer a wide range of services to help your business grow.',
    author: 'Admin User',
    tags: ['Services', 'Getting Started'],
    publishDate: new Date().toISOString(),
    readTime: 4,
  },
];

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  const addPost = (post: Omit<BlogPost, 'id' | 'publishDate'>) => {
    const newPost: BlogPost = {
      ...post,
      id: (posts.length + 1).toString(),
      publishDate: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  const getPost = (id: string) => {
    return posts.find(post => post.id === id);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};