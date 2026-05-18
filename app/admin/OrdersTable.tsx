import {
  Pencil,
  Trash2,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-1250",
    customer: "Alex Johnson",
    total: "$120.00",
    status: "Pending",
    date: "May 29, 2024",
  },
  {
    id: "#ORD-1249",
    customer: "Samantha Lee",
    total: "$89.00",
    status: "Paid",
    date: "May 29, 2024",
  },
  {
    id: "#ORD-1248",
    customer: "Michael Brown",
    total: "$150.00",
    status: "Shipped",
    date: "May 28, 2024",
  },
  {
    id: "#ORD-1247",
    customer: "Emily Davis",
    total: "$75.00",
    status: "Delivered",
    date: "May 28, 2024",
  },
  {
    id: "#ORD-1246",
    customer: "David Wilson",
    total: "$200.00",
    status: "Pending",
    date: "May 27, 2024",
  },
];

export default function OrdersTable() {
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
              
              <th className="pb-4 font-medium">
                Order ID
              </th>

              <th className="pb-4 font-medium">
                Customer
              </th>

              <th className="pb-4 font-medium">
                Total
              </th>

              <th className="pb-4 font-medium">
                Status
              </th>

              <th className="pb-4 font-medium">
                Date
              </th>

              <th className="pb-4 font-medium text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-slate-100"
              >
                
                {/* ID */}
                <td className="py-5 font-semibold text-slate-900">
                  {order.id}
                </td>

                {/* CUSTOMER */}
                <td className="py-5 text-slate-600">
                  {order.customer}
                </td>

                {/* TOTAL */}
                <td className="py-5 font-medium text-slate-900">
                  {order.total}
                </td>

                {/* STATUS */}
                <td className="py-5">
                  
                  <span
                    className={`rounded-full px-4 py-2 text-xs font-medium ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : order.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* DATE */}
                <td className="py-5 text-slate-600">
                  {order.date}
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