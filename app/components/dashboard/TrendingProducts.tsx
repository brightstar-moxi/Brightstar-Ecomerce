export default function TrendingProducts() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        🔥 Trending Products
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span>Wireless Headset</span>
          <span className="font-semibold">
            ₦25,000
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span>Gaming Mouse</span>
          <span className="font-semibold">
            ₦15,000
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span>Smart Watch</span>
          <span className="font-semibold">
            ₦45,000
          </span>
        </div>

      </div>

    </div>
  );
}