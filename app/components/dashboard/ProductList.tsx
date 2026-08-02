"use client";
import { useMutation } from "convex/react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";

export default function ProductList() {
 const [addedId, setAddedId] = useState<any>(null);
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
  <div>

    {/* HEADER */}
    <div className="mb-6 flex items-center justify-between">

      <h2 className="text-2xl font-bold text-slate-900">
        Recommended Products
      </h2>

      <button className="font-semibold text-orange-500 hover:text-orange-600">
        View All →
      </button>

    </div>

    {/* PRODUCTS */}
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

      {products.map((product) => (

        <div
          key={product._id}
          className="
          group
          overflow-hidden
          rounded-[28px]
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

            <img
              src={product.image}
              alt={product.name}
              className="
              h-64
              w-full
              object-cover
              transition
              duration-300
              group-hover:scale-105
            "
            />

          </div>

          {/* CONTENT */}
          <div className="p-5">

            <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
              {product.name}
            </h3>

            {/* STARS */}
            <div className="mt-2 flex items-center gap-1">

              ⭐⭐⭐⭐⭐

              <span className="ml-2 text-xs text-slate-500">
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
              onClick={() =>
                handleAddToCart(product._id)
              }
              className="
              mt-5
              w-full
              rounded-2xl
              bg-orange-500
              py-3
              font-semibold
              text-white
              transition
              hover:bg-orange-600
            "
            >
              {addedId === product._id
                ? "✓ Added To Cart"
                : "Add To Cart"}
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>
);
}