const stats = [
  {
    title: "Total Orders",
    value: "12",
  },
  {
    title: "Pending Orders",
    value: "2",
  },
  {
    title: "Delivered Orders",
    value: "9",
  },
  {
    title: "Total Spent",
    value: "$1,299",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {stat.title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}