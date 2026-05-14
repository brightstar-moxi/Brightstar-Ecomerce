import CustomerSidebar from "../components/dashboard/CustomerSidebar";
import DashboardStats from "../components/dashboard/DashboardStats";
import ProductList from "../components/dashboard/ProductList";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      <div className="lg:flex">
        
        {/* SIDEBAR */}
        <CustomerSidebar />

        {/* CONTENT */}
        <div className="flex-1 p-6 md:p-10">
          
          {/* TOP */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900">
              Welcome back, John! 👋
            </h1>

            <p className="mt-3 text-slate-600">
              Here&apos;s what&apos;s happening in your account today.
            </p>
          </div>

          {/* STATS */}
          <DashboardStats />

          {/* PRODUCTS */}
          <ProductList />
        </div>
      </div>
    </main>
  );
}