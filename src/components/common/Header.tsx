"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth"; // hook simulasi autentikasi
import { usePathname, useRouter } from "next/navigation"; // untuk navigasi setelah logout

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login"); // redirect ke halam login setelah logout
  };

  return (
    <header className="bg-white shadow-md p4 flex justify-between items-center">
      <Link href="/" className="hover: text-blue-600">
        Your Brand Logo {/* Ganti dengan logo Anda */}
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover: text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover: text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover: text-blue-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/teams" className="hover: text-blue-600">
              Teams
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover: text-blue-600">
              Blog
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/blog/create" className="hover:text-blue-600">
                  Create Blog
                </Link>
              </li>
              <li>
                <Button onClick={handleLogout} variant="ghost">
                  Logout ({user.username})
                </Button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/auth/login" className="hover:text-blue-600">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
