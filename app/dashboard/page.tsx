"use client"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getUser } from "@/lib/auth";
import CustomerSidebar from "../components/dashboard/CustomerSidebar";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
// import ProductList from "../components/dashboard/ProductList";
import RecentOrders from "../components/dashboard/RecentOrders";
import OrderOverview from "../components/dashboard/OrderOverview";
import QuickActions from "../components/dashboard/QuickActions";
import RecommendedProducts from "../components/dashboard/RecommendedProducts";
export default function DashboardPage() {
  const router = useRouter();
 const [user, setUser] = useState<any>(null);
useEffect(() => {
  const currentUser = getUser();
  // console.log("USER:", currentUser);
  if (!currentUser) {
    router.push("/login");
    return;
  }

  if (currentUser.role !== "customer") {
    router.push("/admin");
    return;
  }

  setUser(currentUser);
}, [router]);
  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-slate-50">
      
      <div className="lg:flex">
        
        {/* SIDEBAR */}
        <CustomerSidebar />

        {/* CONTENT */}
       {/* <div className="flex-1 max-w-400 p-6 md:p-10"> */}
       <div className="flex-1 p-6 md:p-10 lg:ml-[280px]">
          
          {/* TOPBAR */}
          <DashboardTopbar />

          {/* WELCOME */}
         <div className="mb-10 rounded-[32px] bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">

  <h1 className="text-4xl font-bold">
    Welcome back, {user?.name} 👋
  </h1>

  <p className="mt-3 opacity-90">
    Track orders, discover products and manage your account.
  </p>

</div>

    <DashboardStats />



<div className="mt-8">
  <RecentOrders />
</div>

<div className="mt-8">
  <OrderOverview />
</div>

<div className="mt-8">
  <RecommendedProducts />
</div>

<div className="mt-8">
  <QuickActions />
</div>
{/* <div className="mt-8">
  <ProductList />
</div> */}


        </div>
      </div>
    </main>
  );
}