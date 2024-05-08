"use client";

import { performLogin } from "@/app/actions";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const { setAuth } = useAuth();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);
      if (found?.id) {
        setAuth(found);
        router.push("/");
      } else {
        setError("Please provide a valid credential");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-indigo-600 btn-primary hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
      <div className="my-1 text-red-500">{error}</div>
    </>
  );
}
