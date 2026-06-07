"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

import {
  EyeOff,
  Mail,
  Lock,
  ShoppingBag,
} from "lucide-react";

import { FaGoogle } from "react-icons/fa";

export default function AdminLoginPage() {
  // const router = useRouter();

  const login = useMutation(api.users.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) return;

    const parsedUser = JSON.parse(user);

    if (parsedUser.role === "admin") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleAdminLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill all fields");
    }

    try {
      setLoading(true);

      const user = await login({
        email,
        password,
      });

      if (user.role !== "admin") {
        return alert(
          "Access denied. Admin account required."
        );
      }

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      router.push("/admin/dashboard");

    } catch (error: any) {
      alert(
        error?.message ||
        "Invalid credentials"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5F7FF] px-4 py-10">

      <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">

        {/* ICON */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-600 shadow-lg">

          <ShoppingBag
            size={34}
            className="text-white"
          />
        </div>

        {/* TITLE */}
        <div className="mt-8 text-center">

          <h1 className="text-4xl font-bold text-slate-900">
            Admin Login
          </h1>

          <p className="mt-4 text-slate-500">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleAdminLogin} className="mt-10 space-y-6">

          {/* EMAIL */}
          <div>

            <label className="mb-3 block text-sm font-medium text-slate-700">
              Email address
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-slate-300 px-4 focus-within:border-indigo-600">

              <Mail
                size={20}
                className="text-slate-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="admin@example.com"
                className="ml-3 flex-1 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>

            <label className="mb-3 block text-sm font-medium text-slate-700">
              Password
            </label>

            <div className="flex h-14 items-center rounded-2xl border border-slate-300 px-4 focus-within:border-indigo-600">

              <Lock
                size={20}
                className="text-slate-400"
              />

              <input
                type="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Enter your password"
                className="ml-3 flex-1 bg-transparent outline-none"
              />

              <button type="button">
                <EyeOff
                  size={20}
                  className="text-slate-400"
                />
              </button>
            </div>
          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-slate-600">

              <input type="checkbox" />

              Remember me
            </label>

            <button
              type="button"
              className="text-sm font-medium text-indigo-600"
            >
              Forgot password?
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="h-14 w-full rounded-2xl bg-indigo-600 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="my-8 flex items-center gap-4">

          <div className="h-px flex-1 bg-slate-200"></div>

          <span className="text-sm text-slate-400">
            or continue with
          </span>

          <div className="h-px flex-1 bg-slate-200"></div>
        </div>

        {/* GOOGLE */}
        <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white font-medium text-slate-700 transition hover:bg-slate-50">

          <FaGoogle />

          Continue with Google
        </button>

        {/* BACK */}
        <Link
          href="/"
          className="mt-8 block text-center text-sm font-medium text-slate-500 hover:text-indigo-600"
        >
          ← Back to Store
        </Link>
      </div>
    </main>
  );
}