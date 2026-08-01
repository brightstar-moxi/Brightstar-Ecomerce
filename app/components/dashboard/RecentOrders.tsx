"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function RecentOrders() {
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

  if (!orders) return null;

  const recentOrders =
    [...orders]
      .sort(
        (a, b) =>
          b._creationTime -
          a._creationTime
      )
      .slice(0, 5);

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Recent Orders
      </h2>

      <div className="space-y-4">
        {recentOrders.map((order) => (
          <div
            key={order._id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div>
              <p className="font-semibold">
                #{String(order._id).slice(-8)}
              </p>

              <p className="text-sm text-slate-500">
                {new Date(
                  order._creationTime
                ).toLocaleDateString()}
              </p>
            </div>

            <span className="font-medium">
              ₦
              {order.total.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}