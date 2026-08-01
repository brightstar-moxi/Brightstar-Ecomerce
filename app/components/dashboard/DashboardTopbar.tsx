"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/auth";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import Link from "next/link";

import {
  Bell,
  Search,
  ShoppingCart,
} from "lucide-react";

export default function DashboardTopbar() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const currentUser = getUser();
    setUser(currentUser);
  }, []);

  // const user =
  //   typeof window !== "undefined"
  //     ? JSON.parse(
  //       localStorage.getItem("user") || "{}"
  //     )
  //     : null;
  const cartItems = useQuery(
    api.cart.getCart,
    user?.id
      ? { userId: user.id }
      : "skip"
  );

  const cartCount =
    cartItems?.reduce(
      (total, item) =>
        total + item.quantity,
      0
    ) || 0;
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      {/* SEARCH */}
      <div className="flex h-12 w-full max-w-xl items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm">

        <Search
          size={20}
          className="text-slate-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          className="ml-3 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-between gap-5 lg:justify-end">
        {/* CART */}
        <Link href="/cart">

          <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">

            <ShoppingCart
              size={20}
              className="text-slate-700"
            />

            {cartCount! > 0 && (
              <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                {cartCount}
              </span>
            )}

          </button>

        </Link>
        {/* NOTIFICATION */}
        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">

          <Bell
            size={20}
            className="text-slate-700"
          />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">

          <Image
            src="/profile.jpg"
            alt="Profile"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />

          <div className="hidden sm:block">
            <h3 className="text-sm font-semibold text-slate-900">
              {user?.name || "Customer"}
            </h3>

            <p className="text-xs text-slate-500">
              Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}