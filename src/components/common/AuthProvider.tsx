"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { loginUser, logoutUser, getCurrentUser } from "@/lib/auth"; // Fungsi simulasi dari lib/auth.ts

interface User {
  username: string;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Status loading autentikasi awal

  useEffect(() => {
    // Cek user dari localStorage saat mount
    const userFromStorage = getCurrentUser();
    if (userFromStorage) {
      setUser(userFromStorage);
    }
    setLoading(false); // Selesai loading
  }, []);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    setLoading(true);
    const loggedInUser = await loginUser(username, password);
    if (loggedInUser) {
      setUser(loggedInUser);
      setLoading(false);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
