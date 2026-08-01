"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import OrderTimeline from "@/app/components/orders/OrdersTimeline";
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
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-8 text-4xl font-bold text-slate-900">
        My Orders
      </h1>

      <div className="space-y-4">
      {orders.map((order) => (
<div
  key={order._id}
  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
>

  {/* HEADER */}
  <div className="grid grid-cols-1 gap-4 md:grid-cols-4 p-4">

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-400">
      Order Number
    </p>

    <h2 className="mt-1 text-lg font-bold text-slate-900">
      #{String(order._id).slice(-8)}
    </h2>
  </div>

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-400">
      Order Date
    </p>

    <h2 className="mt-1 font-medium text-slate-700">
      {new Date(
        order._creationTime
      ).toLocaleDateString()}
    </h2>
  </div>

  <div>
    <p className="text-xs uppercase tracking-wide text-slate-400">
      Total
    </p>

    <h2 className="mt-1 text-xl font-bold text-indigo-600">
      ₦{order.total.toLocaleString()}
    </h2>
  </div>

  <div className="flex items-center justify-start md:justify-end">
    <span
      className={`rounded-full px-4 py-2 text-sm font-medium ${
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

</div>
  {/* PRODUCTS */}
  <div className="p-6">

    <h3 className="mb-5 text-lg font-semibold text-slate-900">
      Products Ordered
    </h3>

    <div className="space-y-4">

      {order.products?.map(
        (item: any) => (
          <div
            key={item._id}
            className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.product?.image}
                alt={item.product?.name}
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div>

                <h4 className="font-semibold text-slate-900">
                  {item.product?.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Quantity: {item.quantity}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold text-slate-900">
                ₦{item.price.toLocaleString()}
              </p>

            </div>

          </div>
        )
      )}

    </div>

  </div>

  {/* TRACKING */}
  <div className="border-t border-slate-100 p-6">

    <h3 className="mb-4 text-lg font-semibold text-slate-900">
      Track Order
    </h3>

    <OrderTimeline
      status={order.status}
    />

       {order.status === "Payment Rejected" && (
      <button
        className="mt-6 rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
      >
        Upload New Receipt
      </button>
    )}

  </div>

</div>
))}
      </div>
    </main>
  );
}