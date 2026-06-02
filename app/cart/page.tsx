// "use client";

// import { useQuery } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import Image from "next/image";
// import { useMutation } from "convex/react";
// import { useRouter } from "next/navigation";
// import Navbar from "../components/layout/Navbar";

// import {
//   Minus,
//   Plus,
//   Trash2,
//   ShieldCheck,
// } from "lucide-react";

// // const cartItems = [
// //   {
// //     id: 1,
// //     name: "AirMax Running Shoes",
// //     price: 129.99,
// //     image: "/product-1.jpg",
// //     color: "White",
// //     quantity: 1,
// //   },
// //   {
// //     id: 2,
// //     name: "Wireless Headphones",
// //     price: 89.99,
// //     image: "/product-2.jpg",
// //     color: "Black",
// //     quantity: 1,
// //   },
// //   {
// //     id: 3,
// //     name: "Leather Backpack",
// //     price: 149.99,
// //     image: "/product-4.jpg",
// //     color: "Brown",
// //     quantity: 1,
// //   },
// // ];
// // const cartItems = []

// export default function CartPage() {
//  const user =
//   typeof window !== "undefined"
//     ? JSON.parse(
//         localStorage.getItem("user") || "{}"
//       )
//     : null;

// const cartItems = useQuery(
//   api.cart.getCart,
//   user?.id
//     ? { userId: user.id }
//     : "skip"
// );

// if (cartItems === undefined) {
//   return <p>Loading cart...</p>;
// }

// const subtotal = cartItems.reduce(
//   (acc, item) =>
//     acc +
//     (item.product?.price || 0) *
//       item.quantity,
//   0
// );

// const shipping = 0;
// const tax = 33.10;

// const total = subtotal + shipping + tax;

// const router = useRouter();

// const createOrder = useMutation(
//   api.orders.createOrder
// );

// const clearCart = useMutation(
//   api.cart.clearCart
// );
// const handleCheckout = async () => {

//   if (!user?.id) {
//     return;
//   }

//   await createOrder({
//     userId: user.id,
//   });

//   await clearCart({
//     userId: user.id,
//   });

//   alert("Order placed successfully");

//   router.push(
//     "/dashboard/orders"
//   );
// };

"use client";
import Navbar from "../components/layout/Navbar";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  Minus,
  Plus,
  Trash2,
  ShieldCheck,
} from "lucide-react";

export default function CartPage() {
  const router = useRouter();

  const createOrder = useMutation(api.orders.createOrder);
  const clearCart = useMutation(api.cart.clearCart);

  // ✅ safe client-only state
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const userId = user?.id ?? null;

  // ✅ IMPORTANT: do NOT conditionally change hook behavior
  const cartItems = useQuery(
    api.cart.getCart,
    userId ? { userId } : "skip"
  );

  if (cartItems === undefined) {
    return <p>Loading cart...</p>;
  }

  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + (item.product?.price || 0) * item.quantity,
    0
  );

  const shipping = 0;
  const tax = 33.1;
  const total = subtotal + shipping + tax;

  const handleCheckout = async () => {
    if (!userId) return;

    await createOrder({ userId });
    await clearCart({ userId });

    alert("Order placed successfully");
    router.push("/dashboard/orders");
  };

 
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">

        {/* TITLE */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-slate-900">
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-500">
            {cartItems.length} items
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}
          <div className="rounded-[32px] bg-white p-6 shadow-sm">

            {/* CONTINUE */}
            <button className="mb-8 text-sm font-medium text-indigo-600">
              Continue Shopping
            </button>

            {/* ITEMS */}
            <div className="space-y-6">

              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between"
                >

                  {/* PRODUCT */}
                  <div className="flex items-center gap-5">

                    <div className="overflow-hidden rounded-2xl bg-slate-100">

                      <Image
                        src={
                          item.product?.image ||
                          "/placeholder-product.jpg"}
                        alt= {item.product?.name ||
                          "/placeholder-product.jpg"}
                        width={100}
                        height={100}
                        className="h-24 w-24 object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">
                        {item.product?.name}
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        Category: {item.product?.category}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center gap-5">

                    {/* PRICE */}
                    <h3 className="w-24 text-lg font-semibold text-slate-900">
                      ${item.product?.price}
                    </h3>

                    {/* QUANTITY */}
                    <div className="flex h-11 items-center rounded-xl border border-slate-200">

                      <button className="flex h-full w-10 items-center justify-center">
                        <Minus size={16} />
                      </button>

                      <span className="flex h-full w-10 items-center justify-center border-x border-slate-200 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button className="flex h-full w-10 items-center justify-center">
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* DELETE */}
                    <button className="text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-[32px] bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-900">
              Order Summary
            </h2>

            {/* SUMMARY */}
            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-medium text-slate-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Shipping
                </span>

                <span className="font-medium text-slate-900">
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Tax
                </span>

                <span className="font-medium text-slate-900">
                  ${tax.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-slate-200 pt-5">

                <div className="flex items-center justify-between">

                  <span className="text-xl font-bold text-slate-900">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-slate-900">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* CHECKOUT */}
            <button
            onClick={handleCheckout}
            className="mt-8 h-14 w-full rounded-2xl bg-indigo-600 font-semibold text-white transition hover:bg-indigo-700">
              Proceed to Checkout
            </button>

            {/* SECURITY */}
            <div className="mt-6 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <ShieldCheck
                  size={20}
                  className="text-indigo-600"
                />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Secure Checkout
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Your data is protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}