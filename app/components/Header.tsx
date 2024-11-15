"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Email SaaS</h1>
      <nav className="flex space-x-4">
        <Link href="/">Home</Link>
        {!user ? (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        ) : (
          <span>Welcome, {user}</span>
        )}
      </nav>
    </header>
  );
};

export default Header;
