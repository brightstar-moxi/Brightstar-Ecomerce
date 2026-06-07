import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";


import {
  Pencil,
  Trash2,
} from "lucide-react";

// const orders = [
//   {
//     id: "#ORD-1250",
//     customer: "Alex Johnson",
//     total: "$120.00",
//     status: "Pending",
//     date: "May 29, 2024",
//   },
//   {
//     id: "#ORD-1249",
//     customer: "Samantha Lee",
//     total: "$89.00",
//     status: "Paid",
//     date: "May 29, 2024",
//   },
//   {
//     id: "#ORD-1248",
//     customer: "Michael Brown",
//     total: "$150.00",
//     status: "Shipped",
//     date: "May 28, 2024",
//   },
//   {
//     id: "#ORD-1247",
//     customer: "Emily Davis",
//     total: "$75.00",
//     status: "Delivered",
//     date: "May 28, 2024",
//   },
//   {
//     id: "#ORD-1246",
//     customer: "David Wilson",
//     total: "$200.00",
//     status: "Pending",
//     date: "May 27, 2024",
//   },
// ];

export default function OrdersTable() {

  const deleteOrder = useMutation(
    api.orders.deleteOrder
  );

  const [selectedOrder, setSelectedOrder] =
    useState<any>(null);
  const orders = useQuery(
    api.orders.getAllOrders
  );

  const updateStatus = useMutation(
    api.orders.updateOrderStatus
  );
  if (orders === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">

      {/* TOP */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <h2 className="text-2xl font-bold text-slate-900">
          Orders
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row">

          {/* FILTER */}
          <select className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none">

            <option>All Status</option>
            <option>Pending</option>
            <option>Paid</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>

          {/* DATE */}
          <select className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none">

            <option>Select Date</option>
          </select>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search orders..."
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-600"
          />
        </div>
      </div>
      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
              <th className="pb-4 font-medium">Order ID</th>
              <th className="pb-4 font-medium">Customer</th>
              <th className="pb-4 font-medium">Total</th>
              <th className="pb-4 font-medium">Status</th>
              <th className="pb-4 font-medium">Date</th>
              <th className="pb-4 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-b border-slate-100">

                <td className="py-5 font-semibold text-slate-900">
                  {order._id}
                </td>

                <td className="py-5 text-slate-600">
                  {order.customerName}
                </td>

                <td className="py-5 font-medium text-slate-900">
                  ₦{order.total.toLocaleString()}
                </td>

                <td className="py-5">
                  <select
                    value={order.status}
                    onChange={(e) =>
                      updateStatus({
                        orderId: order._id,
                        status: e.target.value,
                      })
                    }
                    className="rounded-lg border px-3 py-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>

                <td className="py-5 text-slate-600">
                  {new Date(order._creationTime).toLocaleDateString()}
                </td>

                <td className="py-5">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-slate-100"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      onClick={() =>
                        deleteOrder({
                          orderId: order._id,
                        })
                      }
                      className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-red-50 hover:text-red-600"
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

      {/* PRODUCTS SECTION (OUTSIDE TABLE) */}
      {/* {selectedOrder && (
        <div className="mt-6 rounded-xl border p-4">
          <p className="mb-2 text-slate-500">Products</p>

          <div className="space-y-2">
            {selectedOrder?.products?.map((item: any) => {
              if (!item?.product) return null;

              return (
                <div
                  key={item.productId}
                  className="flex items-center justify-between rounded-xl border p-3"
                >
                  <span>{item.product.name}</span>
                  <span>x{item.quantity}</span>
                </div>
              );
            })}
          </div>
        </div>
      )} */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg rounded-3xl bg-white p-6">

            <h2 className="mb-6 text-2xl font-bold">
              Order Details
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-slate-500">
                  Customer
                </p>

                <h3 className="font-semibold">
                  {selectedOrder.customerName}
                </h3>
              </div>

              <div>
                <p className="text-slate-500">
                  Total
                </p>

                <h3 className="font-semibold">
                  ₦{selectedOrder.total}
                </h3>
              </div>

              <div>
                <p className="text-slate-500">
                  Status
                </p>

                <h3 className="font-semibold">
                  {selectedOrder.status}
                </h3>
              </div>

              <div>
                <p className="text-slate-500">
                  Order ID
                </p>

                <h3 className="font-semibold">
                  {selectedOrder._id}
                </h3>
              </div>
  {/* DEBUG
      <pre className="mt-4 overflow-auto rounded bg-slate-100 p-3 text-xs">
        {JSON.stringify(selectedOrder, null, 2)}
      </pre> */}

              <div className="mt-4">
                <p className="mb-2 text-slate-500">
                  Products
                </p>

                <div className="space-y-2">
                  {selectedOrder.products?.map(
                    (item: any) => (
                      <div
                        key={item.productId}
                        className="flex justify-between rounded-lg border p-3"
                      >
                        <span>
                          {item.product?.name}
                        </span>

                        <span>
                          x{item.quantity}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

            </div>

            <button
              onClick={() =>
                setSelectedOrder(null)
              }
              className="mt-6 w-full rounded-xl bg-indigo-600 py-3 text-white"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </div>
  );
}