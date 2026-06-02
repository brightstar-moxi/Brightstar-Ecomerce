"use client";
import { useMutation } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";

export default function ProductList() {
  const [addedId, setAddedId] = useState("");
  const user = typeof window !== "undefined"
    ? JSON.parse(
      localStorage.getItem("user") || "{}"
    )
    : null;
  const products = useQuery(
    api.products.getProducts
  );

  const addToCart = useMutation(
    api.cart.addToCart
  );

  if (products === undefined) {
    return <p>Loading products...</p>;
  }
  // const handleAddToCart = async (
  //   productId: any
  // ) => {

  //   if (!user?.id) {
  //     alert("Please login first");
  //     return;
  //   }

  //   await addToCart({
  //     userId: user.id,
  //     productId,
  //   });

  //   alert("Added to cart");
  // };
  const handleAddToCart = async (
    productId: any
  ) => {
    await addToCart({
      userId: user.id,
      productId,
    });

    setAddedId(productId);
  };
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
          <button
            onClick={() =>
              handleAddToCart(product._id)
            }
            className="mt-3 w-full rounded-lg bg-indigo-600 py-2 text-white"
          >
            {addedId === product._id
              ? "✓ Added"
              : "Add To Cart"}
          </button>
        </div>

      ))}
    </div>
  );
}