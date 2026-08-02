export default function FlashSale() {
  return (
    <div className="mb-8 rounded-[32px] bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold">
            ⚡ Flash Sale
          </h2>

          <p className="mt-2 text-white/90">
            Limited-time deals available today.
          </p>
        </div>

        <button className="rounded-xl bg-white px-5 py-3 font-semibold text-red-500">
          View All
        </button>

      </div>

    </div>
  );
}