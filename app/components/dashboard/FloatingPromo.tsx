"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function FloatingPromo() {
  const [open, setOpen] =
    useState(true);

  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[320px]">

      <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl">

        <div className="flex items-center justify-between p-4">

          <div>

            <h3 className="text-lg font-bold">
              🔥 Flash Sale
            </h3>

            <p className="text-sm text-white/90">
              Up to 50% OFF today
            </p>

          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
          >
            <X size={18} />
          </button>

        </div>

        <div className="border-t border-white/20 p-4">

          <button className="w-full rounded-xl bg-white py-3 font-semibold text-orange-500">
            Shop Now
          </button>

        </div>

      </div>

    </div>
  );
}