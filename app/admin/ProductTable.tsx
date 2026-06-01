import { useState } from "react";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";

import {
  Pencil,
  Trash2,
} from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Wireless Headphones",
//     category: "Electronics",
//     price: "$89.99",
//     stock: 45,
//     status: "Active",
//     image: "/product-2.jpg",
//   },
//   {
//     id: 2,
//     name: "Minimal Watch",
//     category: "Accessories",
//     price: "$149.99",
//     stock: 22,
//     status: "Active",
//     image: "/product-3.jpg",
//   },
//   {
//     id: 3,
//     name: "Leather Backpack",
//     category: "Bags",
//     price: "$129.99",
//     stock: 20,
//     status: "Active",
//     image: "/product-4.jpg",
//   },
//   {
//     id: 4,
//     name: "Running Shoes",
//     category: "Fashion",
//     price: "$79.99",
//     stock: 50,
//     status: "Active",
//     image: "/product-1.jpg",
//   },
//   {
//     id: 5,
//     name: "Smart Watch",
//     category: "Electronics",
//     price: "$99.99",
//     stock: 15,
//     status: "Inactive",
//     image: "/product-2.jpg",
//   },
// ];

export default function ProductTable() {
  const products = useQuery(
    api.products.getProducts
  );

  const deleteProduct = useMutation(
    api.products.deleteProduct
  );
  const handleDelete = async (
    id: Id<"products">
  ) => {
    const confirmed = window.confirm(
      "Delete this product?"
    );

    if (!confirmed) return;

    await deleteProduct({ id });

    alert("Product deleted");
  };

  const [editingId, setEditingId] =
    useState<
      Id<"products"> | null
    >(null);
  const handleEdit = (
    product: any
  ) => {

    setEditingId(product._id);

    setName(product.name);
    setDescription(
      product.description
    );
    setCategory(
      product.category
    );
    setImage(product.image);

    setPrice(
      product.price.toString()
    );

    setStock(
      product.stock.toString()
    );

    setOpenModal(true);
  };
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [stock, setStock] =
    useState("");

  const [image, setImage] =
    useState("");

  const createProduct =
    useMutation(
      api.products.createProduct
    );

  const handleCreateProduct = async () => {

  if (editingId) {

    await updateProduct({
      id: editingId,
      name,
      description,
      category,
      image,
      price: Number(price),
      stock: Number(stock),
      status: "Active",
    });

    alert("Product updated");

  } else {

    await createProduct({
      name,
      description,
      category,
      image,
      price: Number(price),
      stock: Number(stock),
      status: "Active",
    });

    alert("Product created");
  }

  setOpenModal(false);
};
const updateProduct = useMutation(
  api.products.updateProduct
);

  if (products === undefined) {
    return (
      <div className="p-6">
        Loading products...
      </div>
    );
  }
  return (
    <>
      <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">

        {/* TOP */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <h2 className="text-2xl font-bold text-slate-900">
            Products
          </h2>

          <button
            onClick={() =>
              setOpenModal(true)
            }

            className="h-12 rounded-2xl bg-indigo-600 px-6 text-sm font-medium text-white transition hover:bg-indigo-700">
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

              {products?.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-slate-100"
                >

                  {/* PRODUCT */}
                  <td className="py-5">

                    <div className="flex items-center gap-4">

                      <div className="overflow-hidden rounded-2xl bg-slate-100">

                        <Image
                          src={
                            product.image ||
                            "/placeholder-product.jpg"
                          }
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
                    ₦{product.price.toLocaleString()}
                  </td>

                  {/* STOCK */}
                  <td className="py-5 text-slate-600">
                    {product.stock}
                  </td>

                  {/* STATUS */}
                  <td className="py-5">

                    <span
                      className={`rounded-full px-4 py-2 text-xs font-medium ${product.status === "Active"
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

                      <button
                        onClick={() =>
                          handleEdit(product)
                        }
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(product._id)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-red-50 hover:text-red-600"
                      >
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
      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6">

            <h2 className="mb-6 text-2xl font-bold">
              Add Product
            </h2>

            <div className="space-y-4">

              <input
                placeholder="Product Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Category"
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Image URL"
                value={image}
                onChange={(e) =>
                  setImage(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) =>
                  setStock(e.target.value)
                }
                className="w-full rounded-xl border p-3"
              />

            </div>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() =>
                  setOpenModal(false)
                }
                className="flex-1 rounded-xl border py-3"
              >
                Cancel
              </button>

              <button
                onClick={handleCreateProduct}
                className="flex-1 rounded-xl bg-indigo-600 py-3 text-white"
              >
                Save Product
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );

}