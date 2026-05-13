import ProductCard from "../shared/ProductCard";

const products = [
  {
    name: "AirMax Running Shoes",
    price: 129.99,
    image: "/product-1.jpg",
    category: "Men's Shoes",
    rating: 4.8,
  },
  {
    name: "Wireless Headphones",
    price: 89.99,
    image: "/product-2.jpg",
    category: "Audio",
    rating: 4.7,
  },
  {
    name: "Minimal Watch",
    price: 199.99,
    image: "/product-3.jpg",
    category: "Accessories",
    rating: 4.9,
  },
  {
    name: "Leather Backpack",
    price: 149.99,
    image: "/product-4.jpg",
    category: "Bags",
    rating: 4.8,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* TOP */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900">
            Featured Products
          </h2>

          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View all products
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}