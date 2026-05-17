import AdminSidebar from "../AdminSiderbar";
import AdminTopbar from "../AdminTopbar";
import AdminStats from "../AdminStats";
import SalesChart from "../SalesChart";
import TopSellingProducts from "../TopSellingProducts";
import OrderStatus from "../OrderStatus";
import RecentCustomers from "../RecentCustomers";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      <div className="lg:flex">
        
        {/* SIDEBAR */}
        <AdminSidebar />

        {/* CONTENT */}
       <div className="flex-1 p-6 md:p-10 lg:ml-[290px]">
          
          {/* TOPBAR */}
          <AdminTopbar />

          {/* STATS */}
          <AdminStats />

          {/* CHART + ORDERS */}
          <div className="mt-10 grid gap-8 xl:grid-cols-[1fr_380px]">
            
            {/* CHART */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              
              <div className="mb-8 flex items-center justify-between">
                
                <h2 className="text-2xl font-bold text-slate-900">
                  Sales Overview
                </h2>

                <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
                  This Month
                </button>
              </div>

              <div className="flex h-[350px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-slate-400">
                <SalesChart/>
              </div>
             
            </div>

            {/* RECENT ORDERS */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              
              <div className="mb-8 flex items-center justify-between">
                
                <h2 className="text-2xl font-bold text-slate-900">
                  Recent Orders
                </h2>

                <button className="text-sm font-medium text-indigo-600">
                  View all
                </button>
              </div>

              <div className="space-y-5">
                
                {[
                  "Pending",
                  "Paid",
                  "Shipped",
                  "Delivered",
                ].map((status, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-slate-100 pb-4"
                  >
                    
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        #ORD-{1250 - index}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        May 20, 2024
                      </p>
                    </div>

                    <div className="text-right">
                      
                      <h4 className="font-semibold text-slate-900">
                        $120.00
                      </h4>

                      <span className="mt-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
           {/* BOTTOM */}
<div className="mt-8 grid gap-8 xl:grid-cols-3">
  
  <TopSellingProducts />

   <OrderStatus />

  <RecentCustomers />
</div>
        </div>
      </div>
    </main>
  );
}