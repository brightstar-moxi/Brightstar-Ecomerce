"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function OrderOverview() {
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

  const pending =
    orders.filter(
      (o) =>
        o.status ===
        "Pending Payment Approval"
    ).length;

  const processing =
    orders.filter(
      (o) =>
        o.status ===
        "Processing"
    ).length;

  const shipped =
    orders.filter(
      (o) =>
        o.status ===
        "Shipped"
    ).length;

  const delivered =
    orders.filter(
      (o) =>
        o.status ===
        "Delivered"
    ).length;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-bold">
        Order Overview
      </h2>

      <div className="grid gap-4 md:grid-cols-4">

        <div className="rounded-2xl bg-yellow-50 p-4">
          Pending: {pending}
        </div>

        <div className="rounded-2xl bg-blue-50 p-4">
          Processing: {processing}
        </div>

        <div className="rounded-2xl bg-purple-50 p-4">
          Shipped: {shipped}
        </div>

        <div className="rounded-2xl bg-green-50 p-4">
          Delivered: {delivered}
        </div>

      </div>

    </div>
  );
}