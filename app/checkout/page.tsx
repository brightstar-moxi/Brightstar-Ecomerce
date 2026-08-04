"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

// const orderItems = [
//   {
//     id: 1,
//     name: "AirMax Running Shoes",
//     price: 129.99,
//     image: "/product-1.jpg",
//   },
//   {
//     id: 2,
//     name: "Wireless Headphones",
//     price: 89.99,
//     image: "/product-2.jpg",
//   },
//   {
//     id: 3,
//     name: "Leather Backpack",
//     price: 149.99,
//     image: "/product-4.jpg",
//   },
// ];

export default function CheckoutPage() {
 const [paymentUploaded, setPaymentUploaded] =
  useState(false);

const [receipt, setReceipt] =
  useState<File | null>(null);

const router = useRouter();

const clearCart = useMutation(
  api.cart.clearCart
);

const createOrder = useMutation(
  api.orders.createOrder
);

const generateUploadUrl = useMutation(
  api.payments.generateUploadUrl
);

const createPayment = useMutation(
  api.payments.createPayment
);

const user =
  typeof window !== "undefined"
    ? JSON.parse(
        localStorage.getItem("user") || "{}"
      )
    : null;

/* =========================
   CART
========================= */

const cartItems = useQuery(
  api.cart.getCart,
  user?.id
    ? { userId: user.id }
    : "skip"
);

if (cartItems === undefined) {
  return <p>Loading...</p>;
}

const subtotal = cartItems.reduce(
  (acc, item) =>
    acc +
    (item.product?.price || 0) *
      item.quantity,
  0
);

const shipping = 0;
const tax = subtotal * 0.025;

const total =
  subtotal + shipping + tax;

/* =========================
   UPLOAD RECEIPT
========================= */

const handleUploadReceipt = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  try {
    const file = e.target.files?.[0];

    if (!file) return;

    setReceipt(file);

    const postUrl =
      await generateUploadUrl();

    const result = await fetch(
      postUrl,
      {
        method: "POST",
        headers: {
          "Content-Type":
            file.type,
        },
        body: file,
      }
    );

    const { storageId } =
      await result.json();

    await createPayment({
      userId: user.id,
      proof: storageId,
    });

    setPaymentUploaded(true);

    alert(
      "Receipt uploaded successfully"
    );
  } catch (error) {
    console.error(error);
    alert(
      "Failed to upload receipt"
    );
  }
};

/* =========================
   PLACE ORDER
========================= */

const handleCheckout = async () => {
  try {
    if (!user?.id) {
      alert("Please login first");
      return;
    }

    if (!paymentUploaded) {
      alert(
        "Upload payment proof first"
      );
      return;
    }

    await createOrder({
      userId: user.id,
    });

    await clearCart({
      userId: user.id,
    });

    alert(
      "Order placed successfully"
    );

    router.push(
      "/dashboard/orders"
    );
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};


  return (
    <main className="min-h-screen bg-slate-50">

      {/* <Navbar /> */}

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">

        {/* STEPS */}
        <div className="mb-14 flex items-center justify-center">

          <div className="flex w-full max-w-3xl items-center justify-between">

            {/* STEP 1 */}
            <div className="flex flex-col items-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-white text-sm font-semibold text-indigo-600">
                1
              </div>

              <p className="mt-3 text-sm font-medium text-slate-600">
                Shipping
              </p>
            </div>

            {/* LINE */}
            <div className="h-[2px] flex-1 bg-indigo-200"></div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                2
              </div>

              <p className="mt-3 text-sm font-semibold text-indigo-600">
                Payment
              </p>
            </div>

            {/* LINE */}
            <div className="h-[2px] flex-1 bg-slate-200"></div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-sm font-semibold text-slate-500">
                3
              </div>

              <p className="mt-3 text-sm font-medium text-slate-500">
                Review
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

          {/* LEFT */}
          <div className="rounded-[32px] bg-white p-8 shadow-sm">

            <h1 className="text-3xl font-bold text-slate-900">
              Payment Information
            </h1>

            {/* PAYMENT METHOD */}
            <div className="mt-10">

              <h2 className="text-lg font-semibold text-slate-900">
                Payment Method
              </h2>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <h3 className="font-semibold text-slate-900">
                  Bank Transfer (Manual)
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Please transfer the amount to the following bank account and upload your payment proof.
                </p>

                {/* BANK INFO */}
                <div className="mt-8 grid gap-5 sm:grid-cols-2">

                  <div>
                    <p className="text-sm text-slate-500">
                      Bank Name
                    </p>

                    <h4 className="mt-2 font-semibold text-slate-900">
                      Chase Bank
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Account Name
                    </p>

                    <h4 className="mt-2 font-semibold text-slate-900">
                      Shopora Store
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Account Number
                    </p>

                    <h4 className="mt-2 font-semibold text-slate-900">
                      0123456789
                    </h4>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Amount to Transfer
                    </p>

                    <h4 className="mt-2 text-lg font-bold text-indigo-600">
                      ₦{total.toFixed(2)}
                    </h4>
                  </div>
                </div>

                {/* RECEIPT */}
                <div className="mt-10">

                  <label className="mb-3 block font-semibold text-slate-900">
                    Receipt
                  </label>

                  <p className="mb-5 text-sm text-slate-500">
                    After payment, upload your payment proof below.
                  </p>

                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleUploadReceipt}
                  />

                  <label
                    htmlFor="paymentProof"
                    className="flex h-14 cursor-pointer items-center justify-center rounded-2xl bg-indigo-600 px-6 font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Upload Payment Proof
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-[32px] bg-white p-8 shadow-sm">

            <h2 className="text-2xl font-bold text-slate-900">
              Order Summary
            </h2>

            {/* ITEMS */}
            <div className="mt-8 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">

                    <Image
                      src={item.product?.image || "/placeholder.jpg"}
                      alt={item.product?.name || "Product"}
                      width={70}
                      height={70}
                      className="h-16 w-16 rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold">
                        {item.product?.name}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {item.quantity} × ₦
                        {item.product?.price}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

              {/*               
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4"
                >
                  
                  <div className="flex items-center gap-4">
                    
                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                      
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="h-16 w-16 object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        1 × ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>

            {/* TOTALS */}
            <div className="mt-10 space-y-5 border-t border-slate-200 pt-6">

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-medium text-slate-900">
                  ₦{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Shipping
                </span>

                <span className="font-medium text-slate-900">
                  ₦0.00
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">
                  Tax
                </span>

                <span className="font-medium text-slate-900">
                  ₦{tax.toLocaleString()}
                  {/* ₦{tax.toFixed(2)} */}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-5">

                <span className="text-xl font-bold text-slate-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-slate-900">
                  {/* ₦{total.toLocaleString()} */}
                  {/* ₦{total.toFixed(2)} */}
                  ₦{Number(total).toLocaleString()}
                </span>
              </div>
            </div>
           <button
  disabled={!paymentUploaded}
  onClick={handleCheckout}
  className="mt-8 h-14 w-full rounded-2xl bg-indigo-600 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
>
  Place Order
</button>
          </div>
        </div>
      </section>
    </main>
  );
}