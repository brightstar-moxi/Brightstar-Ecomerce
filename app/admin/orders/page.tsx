"use client";

import AdminSidebar from "../AdminSiderbar";
import AdminTopbar from "../AdminTopbar";
import OrdersTable from "../OrdersTable";

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      <div className="lg:flex">
        
        {/* SIDEBAR */}
        <AdminSidebar />

        {/* CONTENT */}
        <div className="flex-1 p-6 pt-24 md:p-10 lg:ml-[290px] lg:pt-10">
          
          {/* TOPBAR */}
          <AdminTopbar />

          {/* TABLE */}
          <OrdersTable />
        </div>
      </div>
    </main>
  );
}