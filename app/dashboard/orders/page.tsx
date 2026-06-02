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

            <p>
              Status: {order.status}
            </p>

            <p>
              Total: ₦
              {order.total.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}