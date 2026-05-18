import Image from "next/image";

import {
  Pencil,
  Trash2,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$89.99",
    stock: 45,
    status: "Active",
    image: "/product-2.jpg",
  },
  {
    id: 2,
    name: "Minimal Watch",
    category: "Accessories",
    price: "$149.99",
    stock: 22,
    status: "Active",
    image: "/product-3.jpg",
  },
  {
    id: 3,
    name: "Leather Backpack",
    category: "Bags",
    price: "$129.99",
    stock: 20,
    status: "Active",
    image: "/product-4.jpg",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    price: "$79.99",
    stock: 50,
    status: "Active",
    image: "/product-1.jpg",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: "$99.99",
    stock: 15,
    status: "Inactive",
    image: "/product-2.jpg",
  },
];

export default function ProductTable() {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
      
      {/* TOP */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        <h2 className="text-2xl font-bold text-slate-900">
          Products
        </h2>

        <button className="h-12 rounded-2xl bg-indigo-600 px-6 text-sm font-medium text-white transition hover:bg-indigo-700">
          + Add Product
        </button>
      </div>

      {/* SEARCH */}
      <div className="mb-8">
        
        <input
          type="text"
          placeholder="Search products..."
          className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-indigo-600"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        
        <table className="w-full min-w-[800px]">
          
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
              
              <th className="pb-4 font-medium">
                Product
              </th>

              <th className="pb-4 font-medium">
                Category
              </th>

              <th className="pb-4 font-medium">
                Price
              </th>

              <th className="pb-4 font-medium">
                Stock
              </th>

              <th className="pb-4 font-medium">
                Status
              </th>

              <th className="pb-4 font-medium text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-slate-100"
              >
                
                {/* PRODUCT */}
                <td className="py-5">
                  
                  <div className="flex items-center gap-4">
                    
                    <div className="overflow-hidden rounded-2xl bg-slate-100">
                      
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={70}
                        height={70}
                        className="h-14 w-14 object-cover"
                      />
                    </div>

                    <h3 className="font-semibold text-slate-900">
                      {product.name}
                    </h3>
                  </div>
                </td>

                {/* CATEGORY */}
                <td className="py-5 text-slate-600">
                  {product.category}
                </td>

                {/* PRICE */}
                <td className="py-5 font-medium text-slate-900">
                  {product.price}
                </td>

                {/* STOCK */}
                <td className="py-5 text-slate-600">
                  {product.stock}
                </td>

                {/* STATUS */}
                <td className="py-5">
                  
                  <span
                    className={`rounded-full px-4 py-2 text-xs font-medium ${
                      product.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {product.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="py-5">
                  
                  <div className="flex justify-end gap-3">
                    
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100">
                      
                      <Pencil size={16} />
                    </button>

                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-red-50 hover:text-red-600">
                      
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}