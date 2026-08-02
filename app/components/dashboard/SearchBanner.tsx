"use client";

import { Search } from "lucide-react";

export default function SearchBanner() {
  return (
    <div className="mb-8 rounded-3xl bg-white p-4 shadow-sm">

      <div className="flex items-center gap-3">

        <Search className="text-slate-400" />

        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-transparent outline-none"
        />

      </div>

    </div>
  );
}