import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { AuthProvider } from "@/components/common/AuthProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Company Profile",
  description:
    "A professional and modern company profile website with Next.js, Tailwind, and Shadcn UI.",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <QueryClientProvider client={queryClient}>
          {/* AuthProvider membungkus semua yang butuh info user login */}
          <AuthProvider>
          <TooltipProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </TooltipProvider>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} /> // untuk debug query
        </QueryClientProvider>
      </body>
    </html>
  );
}
