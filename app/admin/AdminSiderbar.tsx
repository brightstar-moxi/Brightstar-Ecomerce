"use client";

import Link from "next/link";
import { useState } from "react";

import {
  LayoutDashboard,
  ShoppingBag,
  ClipboardList,
  CreditCard,
  Users,
  FolderKanban,
  TicketPercent,
  MessageSquare,
  FileBarChart2,
  Settings,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    title: "Products",
    icon: ShoppingBag,
    href: "/admin/products",
  },
  {
    title: "Orders",
    icon: ClipboardList,
    href: "/admin/orders",
  },
  {
    title: "Payments",
    icon: CreditCard,
    href: "/admin/payments",
  },
  {
    title: "Customers",
    icon: Users,
    href: "/admin/customers",
  },
  {
    title: "Categories",
    icon: FolderKanban,
    href: "/admin/categories",
  },
  {
    title: "Coupons",
    icon: TicketPercent,
    href: "/admin/coupons",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/admin/messages",
  },
  {
    title: "Reports",
    icon: FileBarChart2,
    href: "/admin/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:hidden">
        
        <h1 className="text-2xl font-bold text-slate-900">
          Shopora
        </h1>

        <button onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* SIDEBAR */}
      <aside
     className={`fixed left-0 top-0 z-50 flex min-h-screen w-[290px] flex-col overflow-y-auto bg-[#071028] p-6 text-white transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        {/* TOP */}
        <div className="flex items-center justify-between">
          
          <h1 className="text-3xl font-bold">
            Shopora
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <X />
          </button>
        </div>

        {/* MENU */}
        <div className="mt-10 flex flex-col gap-2">
          
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  item.title === "Dashboard"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-white/10"
                }`}
              >
                <Icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* PROFILE */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl bg-white/10 p-4">
          
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold">
            J
          </div>

          <div>
            <h3 className="font-semibold">
              John Doe
            </h3>

            <p className="text-sm text-slate-400">
              Admin
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}