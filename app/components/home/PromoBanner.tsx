import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-[32px] bg-slate-900">
          
          {/* CONTENT */}
          <div className="grid items-center gap-10 md:grid-cols-2">
            
            {/* LEFT */}
            <div className="p-10 md:p-16">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
                SUMMER SALE
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                Up to 50% Off
              </h2>

              <p className="mt-5 max-w-md text-lg text-slate-300">
                Discover amazing deals on premium products for a limited time only.
              </p>

              <button className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700">
                Shop Now
              </button>
            </div>

            {/* RIGHT */}
            <div className="relative h-[400px]">
              <Image
                src="/promo-banner.jpg"
                alt="Promo Banner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}