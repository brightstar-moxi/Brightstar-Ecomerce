"use client";

import Link from "next/link";
import { useState } from "react";

import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  MessageSquare,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Orders",
    icon: ShoppingBag,
    href: "/dashboard/orders",
  },
  // {
  //   title: "Wishlist",
  //   icon: Heart,
  //   href: "/dashboard/wishlist",
  // },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
  },
  // {
  //   title: "Addresses",
  //   icon: MapPin,
  //   href: "/dashboard/address",
  // },
  // // {
  //   title: "Payment Methods",
  //   icon: CreditCard,
  //   href: "/dashboard/payment",
  // },
  {
    title: "Account Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function CustomerSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 lg:hidden">

        <h1 className="text-2xl font-bold text-slate-900">
          Shopora
        </h1>

        <button onClick={() => setOpen(true)}>
          <Menu className="text-slate-800" />
        </button>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${open
            ? "visible opacity-100"
            : "invisible opacity-0"
          }`}
      />

      {/* SIDEBAR */}
      {/* <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[280px] flex-col border-r border-slate-200 bg-white p-6 transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      > */}
      <aside
  className={`fixed left-0 top-0 z-50 h-screen w-[280px]
  flex flex-col border-r border-slate-200 bg-white p-6
  overflow-y-auto
  transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full"}
  lg:translate-x-0`}
>

        {/* TOP */}
        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold text-slate-900">
            Shopora
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="lg:hidden"
          >
            <X className="text-slate-700" />
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
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${item.title === "Dashboard"
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-100"
                  }`}
              >
                <Icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/login";
          }}
          className="mt-auto flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
          <LogOut size={18} />
          Logout
        </button>
      </aside>
    </>
  );
}