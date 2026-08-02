"use client"
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getUser } from "@/lib/auth";
import CustomerSidebar from "../components/dashboard/CustomerSidebar";
import DashboardStats from "../components/dashboard/DashboardStats";
import DashboardTopbar from "../components/dashboard/DashboardTopbar";
 import ProductList from "../components/dashboard/ProductList";
import RecentOrders from "../components/dashboard/RecentOrders";
import OrderOverview from "../components/dashboard/OrderOverview";
import QuickActions from "../components/dashboard/QuickActions";
import RecommendedProducts from "../components/dashboard/RecommendedProducts";
import Categories from "../components/dashboard/Categories";
import FlashSale from "../components/dashboard/FlashSale";
import HeroBanner from "../components/dashboard/HeroBanner";
import SearchBanner from "../components/dashboard/SearchBanner";
import TrendingProducts from "../components/dashboard/TrendingProducts";


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
         {/* <div className="mb-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 p-8 text-white">

  <div className="max-w-xl">

    <h1 className="text-4xl font-bold">
      Welcome back, {user?.name} 👋
    </h1>

    <p className="mt-3 text-white/90">
      Discover amazing deals and track your orders effortlessly.
    </p>

    <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-orange-600">
      Start Shopping
    </button>

  </div>

</div> */}
<HeroBanner />
<SearchBanner />
   <DashboardStats />

<Categories />

<FlashSale />

<div className="grid gap-8 lg:grid-cols-3">

  {/* MAIN CONTENT */}
  <div className="space-y-8 lg:col-span-2">

    <ProductList />

    <RecommendedProducts />

  </div>

  {/* SIDEBAR */}
<div className="space-y-8">

  <QuickActions />

  <RecentOrders />

  <OrderOverview />

  <TrendingProducts />

</div>
</div>
{/* <div className="mt-8">
  <ProductList />
</div> */}


        </div>
      </div>
    </main>
  );
}