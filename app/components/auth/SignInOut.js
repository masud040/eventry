"use client";

import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInOut() {
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  function logOut() {
    setAuth(null);
    router.push("/login");
  }
  return (
    <>
      {auth ? (
        <>
          <li className="text-indigo-600">Hello {auth?.name}</li>
          <span>|</span>
          <li onClick={logOut}>Logout</li>
        </>
      ) : (
        <>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
}
