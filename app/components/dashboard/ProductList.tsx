import ProductCard from "../shared/ProductCard";

const products = [
  {
    name: "Nike AirMax",
    price: 120,
    image: "/product-1.jpg",
    category: "Shoes",
    rating: 4.8,
  },
  {
    name: "Wireless Headphones",
    price: 85,
    image: "/product-2.jpg",
    category: "Audio",
    rating: 4.7,
  },
  {
    name: "Luxury Watch",
    price: 230,
    image: "/product-3.jpg",
    category: "Accessories",
    rating: 4.9,
  },
  {
    name: "Leather Backpack",
    price: 140,
    image: "/product-4.jpg",
    category: "Fashion",
    rating: 4.8,
  },
];

export default function ProductList() {
  return (
    <section className="mt-10">
      
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          Products
        </h2>

        <button className="text-sm font-medium text-indigo-600">
          View all
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
    </section>
  );
}