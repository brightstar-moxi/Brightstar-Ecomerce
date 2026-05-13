import Image from "next/image";
import Link from "next/link";

import {
  FaApple,
  FaGoogle,
} from "react-icons/fa";

import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FF] p-4 md:p-8">
      
      <div className="mx-auto grid min-h-[90vh] max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-xl md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-500 p-10 text-white md:flex md:flex-col md:justify-between">
          
          {/* TOP */}
          <div>
            <h2 className="text-3xl font-bold">
              Welcome Back! 👋
            </h2>

            <p className="mt-4 max-w-xs text-indigo-100">
              Please login to your account and continue shopping.
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
                Login to your account
              </h1>

              <p className="mt-3 text-slate-500">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* FORM */}
            <form className="mt-10 space-y-6">
              
              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-indigo-600"
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
                    placeholder="Enter your password"
                    className="flex-1 bg-transparent outline-none"
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
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </button>
              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-indigo-600 font-medium text-white transition hover:bg-indigo-700"
              >
                Login
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

            {/* SOCIAL LOGIN */}
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

            {/* SIGNUP */}
            <p className="mt-8 text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}

              <Link
                href="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}