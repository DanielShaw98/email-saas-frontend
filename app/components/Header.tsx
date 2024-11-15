'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedToken = localStorage.getItem('authToken');
      setToken(savedToken);
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    router.push('/');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const isLoggedIn = !!token;

  const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Email SaaS</h1>
      <nav className="flex space-x-4">
        <ul>
          {isLoggedIn ? (
            <>
              <li>Welcome, {user?.firstName || 'User'}</li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <Link href="/auth/login">Login</Link>
              <Link href="/auth/register">Register</Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
