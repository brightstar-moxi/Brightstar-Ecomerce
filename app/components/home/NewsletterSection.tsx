export default function NewsletterSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        
        <div className="rounded-[32px] bg-slate-900 px-6 py-14 text-center md:px-16">
          
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white">
            NEWSLETTER
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Subscribe for Updates
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Get updates on new arrivals, exclusive offers, and premium collections.
          </p>

          {/* FORM */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-xl border border-slate-700 bg-slate-800 px-5 text-white outline-none placeholder:text-slate-400 focus:border-indigo-500"
            />

            <button className="h-14 rounded-xl bg-indigo-600 px-8 font-medium text-white transition hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}