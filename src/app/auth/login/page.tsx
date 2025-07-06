"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState(""); // State untuk username
  const [password, setPassword] = useState(""); // State untuk password
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Tambahkan state untuk menampung pesan kesalahan
  const router = useRouter(); // Gunakan useRouter untuk navigasi
  const { login } = useAuth(); // Gunakan hook autentikasi

  // Fungsi untuk mengirimkan data login
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah refresh halaman
    setErrorMessage(null); // reset error message
    setIsLoading(true); // Tambahkan loading state
    const success = await login(username, password); // panggil hook login
    setIsLoading(false); // setelah login selesai, ganti loading state menjadi false

    if (success) {
      router.push("/blog/create"); // redirect ke halaman blog create
    } else {
      setErrorMessage("Invalid username or password."); // tampilkan pesan error
    }
  };

  return (
    // Fungsi untuk menampilkan komponen login
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)] bg-gray-50 p-4">
      <Card className="w-full max-w-sm shadow-xl border border-gray-100">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl text-primary">Welcome Back!</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your credentials to access the blog creation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            {errorMessage && (
              <div className="p-3 rounded-md bg-red-100 text-red-700 text-sm">
                {errorMessage}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="user or admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="p-2 border-gray-300 focus-visible:ring-secondary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password123 or admin123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 border-gray-300 focus-visible:ring-secondary"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-blue-800 text-white py-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging
                  in...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
