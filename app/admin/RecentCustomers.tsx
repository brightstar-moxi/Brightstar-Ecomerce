const customers = [
  {
    name: "Alex Johnson",
    email: "alex@example.com",
  },
  {
    name: "Samantha Lee",
    email: "samantha@example.com",
  },
  {
    name: "Michael Brown",
    email: "michael@example.com",
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
  },
];

export default function RecentCustomers() {
  return (
    <div className="rounded-[32px] bg-white p-8 shadow-sm">
      
      <div className="mb-8 flex items-center justify-between">
        
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Customers
        </h2>

        <button className="text-sm font-medium text-indigo-600">
          View all
        </button>
      </div>

      <div className="space-y-6">
        
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            
            <div className="flex items-center gap-4">
              
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                {customer.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {customer.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {customer.email}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-500">
              May 29, 2024
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}