"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function ProductList() {
  const products = useQuery(
    api.products.getProducts
  );

  if (products === undefined) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {products.map((product) => (
        <div
          key={product._id}
          className="rounded-xl border p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full rounded-lg object-cover"
          />

          <h3 className="mt-3 font-bold">
            {product.name}
          </h3>

          <p className="text-slate-600">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}