import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import { BlogProvider } from "@/contexts/BlogContext";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Company Profile",
  description:
    "A professional and modern company profile website with Next.js, Tailwind, and Shadcn UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AuthProvider>
            <BlogProvider>
              <ClientLayout>{children}</ClientLayout>
            </BlogProvider>
          </AuthProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
