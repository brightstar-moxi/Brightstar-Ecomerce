"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function OrdersPage() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("user") || "{}"
        )
      : null;

  const orders = useQuery(
    api.orders.getOrders,
    user?.id
      ? { userId: user.id }
      : "skip"
  );

  if (orders === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Orders
      </h1>

      <div className="space-y-4">
      {orders.map((order) => (
  <div
    key={order._id}
    className="rounded-xl border p-4"
  >
    <p>
      Order ID: {order._id}
    </p>

    <div className="my-3">
      <span
        className={`rounded-full px-3 py-1 text-sm font-medium ${
          order.status === "Processing"
            ? "bg-blue-100 text-blue-700"
            : order.status === "Shipped"
            ? "bg-purple-100 text-purple-700"
            : order.status === "Delivered"
            ? "bg-green-100 text-green-700"
            : order.status === "Payment Rejected"
            ? "bg-red-100 text-red-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
      >
        {order.status}
      </span>
    </div>

    <p className="mb-4">
      Total: ₦
      {order.total.toLocaleString()}
    </p>

    {/* PRODUCTS */}
    <div className="space-y-4">
      {order.products?.map(
        (item: any) => (
          <div
            key={item._id}
            className="flex items-center gap-4"
          >
            <img
              src={item.product?.image}
              alt={item.product?.name}
              className="h-16 w-16 rounded-xl object-cover"
            />

            <div>
              <h3 className="font-semibold">
                {item.product?.name}
              </h3>

              <p className="text-sm text-slate-500">
                Qty: {item.quantity}
              </p>

              <p className="font-medium">
                ₦
                {item.price.toLocaleString()}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  </div>
))}
      </div>
      
    </main>
  );
}