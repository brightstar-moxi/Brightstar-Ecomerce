"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function NotificationsPage() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("user") || "{}"
        )
      : null;

  const notifications = useQuery(
    api.notifications.getNotifications,
    user?.id
      ? { userId: user.id }
      : "skip"
  );

  if (!notifications) {
    return <p>Loading...</p>;
  }

  return (
   <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
  <h1 className="text-3xl font-bold">
    Notifications
  </h1>

  <p className="mt-2 text-indigo-100">
    Stay updated on your orders and account activity.
  </p>

{notifications?.length === 0 && (
  <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
    <h3 className="text-xl font-semibold">
      No Notifications Yet
    </h3>

    <p className="mt-2 text-slate-500">
      Order updates will appear here.
    </p>
  </div>
)}
      {notifications.map(
        (notification) => (
        <div
  key={notification._id}
  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
>
  <div className="flex items-start justify-between">

    <div>
      <h3 className="font-semibold text-slate-900">
        {notification.title}
      </h3>

      <p className="mt-2 text-slate-600">
        {notification.message}
      </p>
    </div>

    {!notification.read && (
      <span className="h-3 w-3 rounded-full bg-red-500" />
    )}

  </div>

  <p className="mt-4 text-xs text-slate-400">
    {new Date(
      notification.createdAt
    ).toLocaleString()}
  </p>
</div>
        )
      )}
    </div>
  );
}