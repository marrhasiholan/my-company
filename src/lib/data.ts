export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string; //
  tags: string[];
  imageUrl: string;
}

let blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development with AI',
    excerpt: 'AI is rapidly transforming web development, from automated coding to personalized user experiences.',
    content: 'The integration of Artificial Intelligence (AI) into web development frameworks is no longer a futuristic concept but a rapidly evolving reality. From smart content generation and personalized user experiences to automated code reviews and predictive analytics, AI is poised to redefine how we build and interact with the web. Developers can leverage AI tools for optimizing performance, enhancing security, and creating more dynamic and responsive applications. This shift promises to streamline workflows and open up new frontiers for innovation...',
    author: 'Alice Johnson',
    publishDate: '2023-10-26T10:00:00Z',
    tags: ['AI', 'WebDev', 'Future'],
    imageUrl: "string",
  },
  {
    id: '2',
    title: 'Getting Started with Next.js App Router',
    excerpt: 'A comprehensive guide to the new App Router in Next.js 13+, covering server components and layouts.',
    content: 'Next.js 13 introduced the revolutionary App Router, a paradigm shift in how we build React applications with Next.js. Moving away from the `pages` directory, the `app` directory brings powerful new capabilities like React Server Components (RSCs), nested layouts, and streaming. This guide will walk you through setting up a new project with the App Router, understanding its core concepts, and leveraging its features to build highly performant and scalable web applications. We\'ll cover data fetching strategies, error boundaries, and optimizing client-server interactions...',
    author: 'Bob Williams',
    publishDate: '2024-01-15T14:30:00Z',
    tags: ['Next.js', 'React', 'Frontend'],
    imageUrl: "string",
  },
  {
    id: '3',
    title: 'Understanding CSS Flexbox for Responsive Layouts',
    excerpt: 'Mastering Flexbox is crucial for creating dynamic and responsive designs without hassle.',
    content: 'CSS Flexbox is a one-dimensional layout module that helps in arranging items within a container. It provides a powerful and efficient way to distribute space and align items, making responsive design significantly easier. Unlike traditional block or inline layouts, Flexbox allows items to grow and shrink, adapt to available space, and change their order dynamically. This article dives deep into the core concepts of Flexbox, including the flex container and flex items properties like `flex-direction`, `justify-content`, `align-items`, `flex-grow`, `flex-shrink`, and `flex-basis`. Understanding these properties is key to building flexible and robust layouts that adapt seamlessly across different screen sizes and devices...',
    author: 'Charlie Davis',
    publishDate: '2024-03-01T09:15:00Z',
    tags: ['CSS', 'Flexbox', 'Responsive Design'],
    imageUrl: "string",
  },
];

export const getBlogPosts = (): BlogPost[] => {
  return [...blogPosts]; // Return a copy to prevent direct mutation
};

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const addBlogPost = (newPost: Omit<BlogPost, 'id'>): BlogPost => {
  const id = (blogPosts.length + 1).toString(); // ID sederhana
  const post = { ...newPost, id };
  blogPosts.push(post);
  return post;
};