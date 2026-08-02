"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function RecommendedProducts() {
  const products =
    useQuery(
      api.products.getProducts
    );

  if (!products) return null;

  return (
    <div className="rounded-[32px] bg-white p-6 shadow-sm">

      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-slate-900">
          Recommended For You
        </h2>

        <button className="font-semibold text-orange-500 hover:text-orange-600">
          View All →
        </button>

      </div>

      {/* PRODUCTS */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {products
          .slice(0, 4)
          .map((product) => (

            <div
              key={product._id}
              className="
              group
              overflow-hidden
              rounded-[24px]
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                {/* DISCOUNT BADGE */}
                <div className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -20%
                </div>

                {/* WISHLIST */}
                <button
                  className="
                  absolute right-3 top-3 z-10
                  flex h-10 w-10 items-center
                  justify-center rounded-full
                  bg-white shadow
                "
                >
                  ❤️
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                  h-60
                  w-full
                  object-cover
                  transition
                  duration-300
                  group-hover:scale-105
                "
                />

              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3 className="line-clamp-2 font-semibold text-slate-900">
                  {product.name}
                </h3>

                {/* RATING */}
                <div className="mt-2 text-sm">
                  ⭐⭐⭐⭐⭐
                  <span className="ml-2 text-slate-500">
                    (4.9)
                  </span>
                </div>

                {/* PRICE */}
                <div className="mt-3">

                  <p className="text-2xl font-bold text-orange-500">
                    ₦
                    {product.price.toLocaleString()}
                  </p>

                  <p className="text-sm text-slate-400 line-through">
                    ₦
                    {(
                      product.price * 1.2
                    ).toLocaleString()}
                  </p>

                </div>

                {/* BUTTON */}
                <button
                  className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-orange-500
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-orange-600
                "
                >
                  View Product
                </button>

              </div>

            </div>

          ))}

      </div>

    </div>
  );
}