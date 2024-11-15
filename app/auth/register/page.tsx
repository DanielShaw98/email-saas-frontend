'use client';

import { useState } from 'react';
import { registerUser } from '@/lib/api';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");  // Error state for feedback
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = await registerUser(email, password, firstName, lastName);

      if (newUser.token) {
        localStorage.setItem('authToken', newUser.token);
        console.log("User registered:", newUser);
        router.push("/");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setError("An error occurred during registration.");
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col space-y-4">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
