"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import {
  FaApple,
  FaGoogle,
} from "react-icons/fa";

import { EyeOff } from "lucide-react";


export default function SignupPage() {
  const signup = useMutation(api.users.signup);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [agree, setAgree] = useState(false);

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
if (
  !name ||
  !email ||
  !password ||
  !confirmPassword
) {
  return alert("Please fill all fields");
}

if (password.length < 6) {
  return alert(
    "Password must be at least 6 characters"
  );
}

if (password !== confirmPassword) {
  return alert("Passwords do not match");
}

if (!agree) {
  return alert(
    "Please agree to Terms & Conditions"
  );
}
    try {
      setLoading(true);

      await signup({
        name,
        email,
        password,
      });

      alert("Account created successfully");

    } catch (error: any) {
      alert(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#F5F7FF] p-4 md:p-8">

      <div className="mx-auto grid min-h-[90vh] max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-xl md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-500 p-10 text-white md:flex md:flex-col md:justify-between">

          {/* TOP */}
          <div>
            <h2 className="text-3xl font-bold">
              Create Account 🚀
            </h2>

            <p className="mt-4 max-w-xs text-indigo-100">
              Join us today and start shopping the best premium products.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative flex items-center justify-center py-10">
            <Image
              src="/auth-bag.png"
              alt="Shopping Bag"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          {/* STATS */}
          <div className="flex items-center justify-between border-t border-white/20 pt-6">

            <div>
              <h3 className="text-2xl font-bold">
                10K+
              </h3>

              <p className="text-sm text-indigo-100">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                500+
              </h3>

              <p className="text-sm text-indigo-100">
                Premium Products
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                99%
              </h3>

              <p className="text-sm text-indigo-100">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center px-6 py-10 md:px-14">

          <div className="w-full max-w-md">

            {/* TITLE */}
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Create your account
              </h1>

              <p className="mt-3 text-slate-500">
                Fill in the details to create your account.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSignup} className="mt-10 space-y-5">

              {/* FULL NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="h-12 w-full rounded-xl border border-slate-300 text-slate-700 bg-white px-4 outline-none transition focus:border-indigo-600"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-12 w-full text-slate-700 rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-indigo-600"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>

                <div className="flex h-12 items-center rounded-xl border border-slate-300 px-4 focus-within:border-indigo-600">

                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="flex-1 text-slate-700 bg-transparent outline-none"
                  />

                  <button type="button" >
                    <EyeOff
                      size={20}
                      className="text-slate-400"
                    />
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Confirm Password
                </label>

                <div className="flex h-12 items-center rounded-xl border border-slate-300 px-4 focus-within:border-indigo-600">

                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Confirm your password"
                    className="flex-1 text-slate-700 bg-transparent outline-none"
                  />

                  <button type="button">
                    <EyeOff
                      size={20}
                      className="text-slate-400"
                    />
                  </button>
                </div>
              </div>

              {/* TERMS */}
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
  type="checkbox"
  checked={agree}
  onChange={(e) =>
    setAgree(e.target.checked)
  }
  className="mt-1"
/>
                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-medium text-indigo-600"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="font-medium text-indigo-600"
                  >
                    Privacy Policy
                  </button>
                </span>
              </label>

              {/* SIGNUP BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="h-12 w-full rounded-xl bg-indigo-600 font-medium text-white transition hover:bg-indigo-700 disabled:opacity-70"
              >
                {loading ? "Creating..." : "Sign Up"}
              </button>
            </form>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200"></div>

              <span className="text-sm text-slate-400">
                Or continue with
              </span>

              <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="grid grid-cols-2 gap-4">

              <button className="flex h-12 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 transition hover:bg-slate-50">
                <FaGoogle />
                Google
              </button>

              <button className="flex h-12 items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-700 transition hover:bg-slate-50">
                <FaApple />
                Apple
              </button>
            </div>

            {/* LOGIN */}
            <p className="mt-8 text-center text-sm text-slate-600">
              Already have an account?{" "}

              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}