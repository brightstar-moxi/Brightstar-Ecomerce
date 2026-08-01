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
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Recommended For You
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {products
          .slice(0, 4)
          .map((product) => (
            <div
              key={product._id}
              className="rounded-2xl border p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-4 h-48 w-full rounded-xl object-cover"
              />

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 font-bold text-indigo-600">
                ₦
                {product.price.toLocaleString()}
              </p>
            </div>
          ))}

      </div>

    </div>
  );
}