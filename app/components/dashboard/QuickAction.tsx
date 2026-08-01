import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <Link
          href="/marketplace"
          className="rounded-2xl bg-indigo-600 p-4 text-center text-white"
        >
          Shop Now
        </Link>

        <Link
          href="/dashboard/orders"
          className="rounded-2xl bg-slate-900 p-4 text-center text-white"
        >
          My Orders
        </Link>

      </div>
    </div>
  );
}