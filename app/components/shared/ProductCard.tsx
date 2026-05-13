import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

export default function ProductCard({
  name,
  price,
  image,
  category,
  rating,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      {/* IMAGE */}
      <div className="relative h-[280px] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-sm text-slate-500">
          {category}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          {name}
        </h3>

        {/* PRICE + RATING */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-slate-900">
              ${price}
            </p>

            <div className="mt-1 flex items-center gap-1 text-sm text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-slate-600">
                {rating}
              </span>
            </div>
          </div>

          {/* CART BUTTON */}
          <button className="rounded-xl bg-indigo-600 p-3 text-white transition hover:bg-indigo-700">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}