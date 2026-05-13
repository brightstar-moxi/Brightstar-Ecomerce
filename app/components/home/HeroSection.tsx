import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:px-8">
        
        {/* LEFT */}
        <div>
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            NEW COLLECTION
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            Elevate Your Shopping Experience
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Discover premium products crafted for modern lifestyle.
            Quality you can trust, style you’ll love.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700">
              Shop Now
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
              Explore Collection
            </button>
          </div>

          {/* TRUST */}
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600">
            <div>✔ Secure Payment</div>
            <div>✔ Fast Delivery</div>
            <div>✔ Easy Returns</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[400px] w-[400px] rounded-full bg-indigo-200 blur-3xl opacity-30"></div>

          <Image
            src="/hero-product.png"
            alt="Hero Product"
            width={600}
            height={600}
            className="relative z-10 object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}