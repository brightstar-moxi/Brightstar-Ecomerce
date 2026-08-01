"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";


export default function DashboardStats() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("user") ||
            "{}"
        )
      : null;

  const stats =
    useQuery(
      api.orders.getDashboardStats,
      user?.id
        ? { userId: user.id }
        : "skip"
    );

  if (!stats) {
    return null;
  }

  const cards = [
    {
      title: "Total Orders",
      value: stats.totalOrders,
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders,
    },
    {
      title: "Delivered Orders",
      value: stats.deliveredOrders,
    },
    {
      title: "Total Spent",
      value: `₦${stats.totalSpent.toLocaleString()}`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {card.title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}