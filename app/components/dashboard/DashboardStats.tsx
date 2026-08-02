"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {
  Package,
  Clock3,
  CheckCircle,
  Wallet,
} from "lucide-react";

export default function DashboardStats() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("user") || "{}"
        )
      : null;

  const stats = useQuery(
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
      title: "Orders",
      value: stats.totalOrders,
      icon: Package,
    },
    {
      title: "Pending",
      value: stats.pendingOrders,
      icon: Clock3,
    },
    {
      title: "Delivered",
      value: stats.deliveredOrders,
      icon: CheckCircle,
    },
    {
      title: "Spent",
      value: `₦${stats.totalSpent.toLocaleString()}`,
      icon: Wallet,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {card.title}
              </p>

              <Icon className="h-6 w-6 text-indigo-600" />
            </div>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}