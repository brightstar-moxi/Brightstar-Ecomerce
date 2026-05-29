"use client"
// import { useEffect } from "react";
// import { useState } from "react";

// import { useRouter } from "next/navigation";

// import { getUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  PackageCheck,
  BarChart3,
} from "lucide-react";

export default function AdminPage() {
//   const router = useRouter();
//   const [authorized, setAuthorized] =
//   useState(false);

//   useEffect(() => {
//   const user = getUser();

//   if (!user) {
//     router.replace("/admin");
//     return;
//   }

//   if (user.role !== "admin") {
//     router.replace("/dashboard");
//     return;
//   }

//   setAuthorized(true);

// }, [router]);
// if (!authorized) {
//   return null;
// }
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FF]">
      
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="flex flex-col justify-center px-6 py-14 md:px-16 lg:px-24">
          
          {/* LOGO */}
          <Link
            href="/"
            className="mb-16 text-3xl font-bold text-slate-900"
          >
            Shopora
          </Link>

          {/* CONTENT */}
          <div>
            
            <h1 className="max-w-lg text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
              Welcome Back,
              <br />
              Admin 👋
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-slate-600">
              Sign in to your admin account and manage your store efficiently.
            </p>

            {/* FEATURES */}
            <div className="mt-14 space-y-8">
              
              {/* ITEM */}
              <div className="flex items-start gap-5">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <ShieldCheck className="text-indigo-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Secure Access
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Your data is protected with advanced security.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-5">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <PackageCheck className="text-indigo-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Full Control
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Manage products, orders, customers and more.
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-5">
                
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <BarChart3 className="text-indigo-600" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Real-time Insights
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Track performance and grow your business.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-col gap-5 sm:flex-row">
              
              <Link
                href="/admin/login"
                className="flex h-14 items-center justify-center rounded-2xl bg-indigo-600 px-10 font-semibold text-white transition hover:bg-indigo-700"
              >
                Admin Login
              </Link>

              <Link
                href="/"
                className="flex h-14 items-center justify-center rounded-2xl border border-slate-300 bg-white px-10 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Back To Store
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden items-center justify-center overflow-hidden lg:flex">
          
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-slate-100"></div>

          {/* CIRCLE */}
          <div className="absolute h-[700px] w-[700px] rounded-full bg-indigo-200/30 blur-3xl"></div>

          {/* IMAGE */}
          <div className="relative z-10">
            
            <Image
              src="/admin-dashboard.png"
              alt="Admin Dashboard"
              width={850}
              height={850}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}