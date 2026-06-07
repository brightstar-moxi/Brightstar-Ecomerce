"use client";

import Link from "next/link";
import {
  Menu,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Shopora
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            Shop
          </Link>

          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            Categories
          </Link>

          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            New Arrivals
          </Link>

          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-indigo-600">
            Deals
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden items-center gap-4 md:flex">
          
          {/* SEARCH */}
          <div className="flex items-center rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Search size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* CART */}
          <button className="relative">
            <ShoppingCart className="text-slate-700" />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
              0
            </span>
          </button>

          {/* LOGIN */}
          <button className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
            Login
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden"
        >
          <Menu className="text-slate-800" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white p-6 shadow-xl">
            
            {/* TOP */}
            <div className="mb-8 flex items-center justify-between ">
              <h2 className="text-xl font-bold text-slate-900">
                Menu
              </h2>

              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="text-slate-700" />
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-6 bg-white ">
              <Link href="/" className="text-slate-700">
                Shop
              </Link>

              <Link href="/" className="text-slate-700">
                Categories
              </Link>

              <Link href="/" className="text-slate-700">
                New Arrivals
              </Link>

              <Link href="/" className="text-slate-700">
                Deals
              </Link>
            </nav>

            {/* LOGIN BUTTON */}
            <button className="mt-10 w-full rounded-xl bg-indigo-600 py-3 font-medium text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}