interface User {
  username: string;
  // bisa tambaahin role: 'admin' | 'user' di sini
}

const STORAGE_KEY = 'user_session';

export const loginUser = async (username: string, password: string): Promise<User | null> => {
  // Simulasi API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'user' && password === 'password123') {
        const user: User = { username: 'user' };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        resolve(user);
      } else if (username === 'admin' && password === 'admin123') {
        const user: User = { username: 'admin' };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        resolve(user);
      }
      else {
        resolve(null); // gagal login
      }
    }, 500); // simulasi delay
  });
};

export const logoutUser = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null; // cuma jalanin di client-side
  const storedUser = localStorage.getItem(STORAGE_KEY);
  return storedUser ? JSON.parse(storedUser) : null;
};