const customers = [
  {
    name: "Alex Johnson",
    email: "alex@example.com",
    orders: 12,
    joined: "May 10, 2024",
    status: "Active",
  },
  {
    name: "Samantha Lee",
    email: "samantha@example.com",
    orders: 8,
    joined: "May 12, 2024",
    status: "Active",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
    orders: 15,
    joined: "May 8, 2024",
    status: "Active",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    orders: 5,
    joined: "May 15, 2024",
    status: "Active",
  },
  {
    name: "David Wilson",
    email: "david@example.com",
    orders: 7,
    joined: "May 17, 2024",
    status: "Inactive",
  },
];

export default function CustomersTable() {
  return (
    <div className="rounded-[32px] bg-white p-6 shadow-sm md:p-8">
      
      {/* TOP */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        
        <h2 className="text-2xl font-bold text-slate-900">
          Customers
        </h2>

        <input
          type="text"
          placeholder="Search customers..."
          className="h-12 w-full rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-indigo-600 md:w-[300px]"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        
        <table className="w-full min-w-[800px]">
          
          <thead>
            <tr className="border-b border-slate-200 text-left text-sm text-slate-500">
              
              <th className="pb-4 font-medium">
                Customer
              </th>

              <th className="pb-4 font-medium">
                Email
              </th>

              <th className="pb-4 font-medium">
                Orders
              </th>

              <th className="pb-4 font-medium">
                Joined
              </th>

              <th className="pb-4 font-medium">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            
            {customers.map((customer, index) => (
              <tr
                key={index}
                className="border-b border-slate-100"
              >
                
                {/* CUSTOMER */}
                <td className="py-5">
                  
                  <div className="flex items-center gap-4">
                    
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
                      {customer.name.charAt(0)}
                    </div>

                    <h3 className="font-semibold text-slate-900">
                      {customer.name}
                    </h3>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="py-5 text-slate-600">
                  {customer.email}
                </td>

                {/* ORDERS */}
                <td className="py-5 font-medium text-slate-900">
                  {customer.orders}
                </td>

                {/* JOINED */}
                <td className="py-5 text-slate-600">
                  {customer.joined}
                </td>

                {/* STATUS */}
                <td className="py-5">
                  
                  <span
                    className={`rounded-full px-4 py-2 text-xs font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}