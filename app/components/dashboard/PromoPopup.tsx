"use client";

import { useEffect, useState } from "react";

export default function PromoPopup() {
  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    const seen =
      localStorage.getItem(
        "promoSeen"
      );

    if (!seen) {
      setTimeout(() => {
        setOpen(true);
      }, 2000);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem(
      "promoSeen",
      "true"
    );

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">

      <div className="w-full max-w-md rounded-[32px] bg-white p-8 text-center shadow-2xl">

        <div className="mb-4 text-5xl">
          🎉
        </div>

        <h2 className="text-3xl font-bold">
          Welcome!
        </h2>

        <p className="mt-3 text-slate-600">
          Get 10% OFF on your first order.
        </p>

        <div className="mt-5 rounded-2xl bg-orange-50 p-4">

          <p className="text-sm text-slate-500">
            Coupon Code
          </p>

          <h3 className="text-2xl font-bold text-orange-500">
            WELCOME10
          </h3>

        </div>

        <button
          className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white"
          onClick={closePopup}
        >
          Shop Now
        </button>

        <button
          className="mt-3 text-sm text-slate-500"
          onClick={closePopup}
        >
          Maybe Later
        </button>

      </div>

    </div>
  );
}