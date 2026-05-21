import {
  Eye,
  Trash2,
} from "lucide-react";

const payments = [
  {
    id: "#PAY-1250",
    orderId: "#ORD-1250",
    customer: "Alex Johnson",
    amount: "$120.00",
    status: "Pending",
  },
  {
    id: "#PAY-1249",
    orderId: "#ORD-1249",
    customer: "Samantha Lee",
    amount: "$89.00",
    status: "Approved",
  },
  {
    id: "#PAY-1248",
    orderId: "#ORD-1248",
    customer: "Michael Brown",
    amount: "$150.00",
    status: "Approved",
  },
  {
    id: "#PAY-1247",
    orderId: "#ORD-1247",
    customer: "Emily Davis",
    amount: "$75.00",
    status: "Rejected",
  },
  {
    id: "#PAY-1246",
    orderId: "#ORD-1246",
    customer: "David Wilson",
    amount: "$200.00",
    status: "Pending",
  },
];

export default function PaymentsTable() {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
      
      {/* TOP */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        <h2 className="text-2xl font-bold text-slate-900">
          Payments
        </h2>

        <div className="flex flex-col gap-3 sm:flex-row">
          
          {/* STATUS */}
          <select className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none">
            
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          {/* DATE */}
          <select className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none">
            
            <option>Select Date</option>
          </select>

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search payments..."
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-600"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        
        <table className="w-full min-w-[850px]">
          
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
              
              <th className="pb-4 font-medium">
                Payment ID
              </th>

              <th className="pb-4 font-medium">
                Order ID
              </th>

              <th className="pb-4 font-medium">
                Customer
              </th>

              <th className="pb-4 font-medium">
                Amount
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
            
            {payments.map((payment, index) => (
              <tr
                key={index}
                className="border-b border-slate-100"
              >
                
                {/* PAYMENT ID */}
                <td className="py-5 font-semibold text-slate-900">
                  {payment.id}
                </td>

                {/* ORDER ID */}
                <td className="py-5 text-slate-600">
                  {payment.orderId}
                </td>

                {/* CUSTOMER */}
                <td className="py-5 text-slate-600">
                  {payment.customer}
                </td>

                {/* AMOUNT */}
                <td className="py-5 font-medium text-slate-900">
                  {payment.amount}
                </td>

                {/* STATUS */}
                <td className="py-5">
                  
                  <span
                    className={`rounded-full px-4 py-2 text-xs font-medium ${
                      payment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : payment.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="py-5">
                  
                  <div className="flex justify-end gap-3">
                    
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 transition hover:bg-slate-100">
                      
                      <Eye size={16} />
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