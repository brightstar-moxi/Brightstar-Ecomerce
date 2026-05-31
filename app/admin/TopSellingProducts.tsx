import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    amount: "$4,250",
    image: "/product-2.jpg",
    progress: "80%",
  },
  {
    id: 2,
    name: "Minimal Watch",
    category: "Accessories",
    amount: "$3,240",
    image: "/product-3.jpg",
    progress: "65%",
  },
  {
    id: 3,
    name: "Leather Backpack",
    category: "Bags",
    amount: "$2,310",
    image: "/product-4.jpg",
    progress: "50%",
  },
];

export default function TopSellingProducts() {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-sm">
      
      <div className="mb-8 flex items-center justify-between">
        
        <h2 className="text-2xl font-bold text-slate-900">
          Top Selling Products
        </h2>

        <button className="text-sm font-medium text-indigo-600">
          View all
        </button>
      </div>

      <div className="space-y-6">
        
        {products.map((product) => (
          <div key={product.id}>
            
            <div className="flex items-center justify-between gap-4">
              
              <div className="flex items-center gap-4">
                
                <div className="overflow-hidden rounded-2xl bg-slate-100">
                  
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={70}
                    height={70}
                    className="h-16 w-16 object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {product.category}
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-slate-900">
                {product.amount}
              </h4>
            </div>

            {/* PROGRESS */}
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              
              <div
                className="h-full rounded-full bg-indigo-600"
                style={{
                  width: product.progress,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}