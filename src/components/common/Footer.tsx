export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
      <p className="text-sm mt-2">Crafted with Next.js & Tailwind CSS.</p>
    </footer>
  );
}
