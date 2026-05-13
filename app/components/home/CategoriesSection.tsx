import Image from "next/image";

const categories = [
  {
    name: "Fashion",
    image: "/category-fashion.jpg",
  },
  {
    name: "Electronics",
    image: "/category-electronics.jpg",
  },
  {
    name: "Accessories",
    image: "/category-accessories.jpg",
  },
  {
    name: "Lifestyle",
    image: "/category-lifestyle.jpg",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* TOP */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">
            Shop by Category
          </h2>

          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View all categories
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* IMAGE */}
              <div className="relative h-[300px] w-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 z-10">
                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>

                <p className="mt-2 text-sm text-slate-200">
                  Explore Collection
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}