const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    growth: "+12.5%",
  },
  {
    title: "Total Revenue",
    value: "$32,450",
    growth: "+18.3%",
  },
  {
    title: "Total Customers",
    value: "2,356",
    growth: "+8.7%",
  },
  {
    title: "Pending Payments",
    value: "23",
    growth: "-3.2%",
  },
];

export default function AdminStats() {
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

          <p className="mt-3 text-sm font-medium text-green-600">
            {stat.growth} from last month
          </p>
        </div>
      ))}
    </div>
  );
}