import {
  Bell,
  Globe,
  Search,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <div className="mb-8 flex flex-col gap-5 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
        Dashboard
      </h1>

      {/* RIGHT */}
      <div className="flex items-center gap-3 sm:gap-4">
        
        {/* SEARCH */}
        <div className="flex h-11 flex-1 items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm sm:h-12">
          
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search here..."
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* NOTIFICATION */}
          <button className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
            
            <Bell size={18} />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
          </button>

          {/* LANGUAGE */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
            
            <Globe size={18} />
          </button>

          {/* PROFILE */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-sm sm:h-12 sm:w-12">
            J
          </div>
          <button
  onClick={() => {
    localStorage.removeItem("user");
    window.location.href = "/admin";
  }}
   className="mt-auto flex w-full items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-medium text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20"

>
  Logout
</button>
        </div>
      </div>
    </div>
  );
}