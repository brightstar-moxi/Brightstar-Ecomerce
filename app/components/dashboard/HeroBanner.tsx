"use client";

import { useState, useEffect } from "react";

const banners = [
  {
    title: "Mega Electronics Sale",
    subtitle: "Up to 50% Off",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Fashion Weekend",
    subtitle: "Latest Styles",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
  {
    title: "Gaming Deals",
    subtitle: "Save Big Today",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
  },
];

export default function HeroBanner() {
  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    const timer =
      setInterval(() => {
        setIndex(
          (prev) =>
            (prev + 1) %
            banners.length
        );
      }, 4000);

    return () =>
      clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-8 overflow-hidden rounded-[32px]">

      <img
        src={
          banners[index].image
        }
        alt=""
        className="h-[320px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">

        <h1 className="text-5xl font-bold">
          {
            banners[index]
              .title
          }
        </h1>

        <p className="mt-3 text-xl">
          {
            banners[index]
              .subtitle
          }
        </p>

        <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold">
          Shop Now
        </button>

      </div>

    </div>
  );
}