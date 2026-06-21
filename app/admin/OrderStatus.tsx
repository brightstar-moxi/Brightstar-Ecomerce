"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function OrderStatus() {
  const orders = useQuery(
    api.orders.getAllOrders
  );

  if (orders === undefined) {
    return <p>Loading...</p>;
  }
  const totalOrders = orders.length;

  const pendingOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Pending Payment Approval"
    ).length;

  const processingOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Processing"
    ).length;

  const shippedOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Shipped"
    ).length;

  const deliveredOrders =
    orders.filter(
      (order) =>
        order.status ===
        "Delivered"
    ).length;
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-sm">

      <h2 className="mb-8 text-2xl font-bold text-slate-900">
        Orders Status
      </h2>

      {/* CIRCLE */}
      <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-green-400">

        <div className="flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white">

          <h3 className="text-5xl font-bold text-slate-900">
            {totalOrders}
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Total Orders
          </p>
        </div>
      </div>

      {/* STATUS */}
      <div className="mt-10 space-y-4">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>

            <p className="text-slate-600">
              Pending
            </p>
          </div>

          <span className="font-medium text-slate-900">
            {
              totalOrders
                ? Math.round(
                  (pendingOrders /
                    totalOrders) *
                  100
                )
                : 0
            }%
          </span>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-indigo-500"></span>

            <p className="text-slate-600">
              Processing
            </p>
          </div>

          <span className="font-medium text-slate-900">
            {
              totalOrders
                ? Math.round(
                  (processingOrders /
                    totalOrders) *
                  100
                )
                : 0
            }%
          </span>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-blue-400"></span>

            <p className="text-slate-600">
              Shipped
            </p>
          </div>

          <span className="font-medium text-slate-900">
            {
              totalOrders
                ? Math.round(
                  (shippedOrders /
                    totalOrders) *
                  100
                )
                : 0
            }%
          </span>
        </div>

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <p className="text-slate-600">
              Delivered
            </p>
          </div>

          <span className="font-medium text-slate-900">
            {
              totalOrders
                ? Math.round(
                  (deliveredOrders /
                    totalOrders) *
                  100
                )
                : 0
            }%
          </span>
        </div>
      </div>
    </div>
  );
}