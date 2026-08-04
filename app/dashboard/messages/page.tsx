"use client";

import {
  MessageCircle,
  Package,
  CreditCard,
  RotateCcw,
  HelpCircle,
} from "lucide-react";

export default function MessagesPage() {
  const supportOptions = [
    {
      title: "Order Issues",
      description:
        "Problems with an order or delivery.",
      icon: Package,
    },
    {
      title: "Payment Issues",
      description:
        "Payment approval or refund issues.",
      icon: CreditCard,
    },
    {
      title: "Returns & Refunds",
      description:
        "Request returns or refunds.",
      icon: RotateCcw,
    },
    {
      title: "General Support",
      description:
        "Ask any question about your account.",
      icon: HelpCircle,
    },
  ];

  return (
    <div className="space-y-8">

      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Customer Support
        </h1>

        <p className="mt-2 text-slate-500">
          Need help? Contact support or
          browse common issues below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {supportOptions.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 transition hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
                <Icon
                  size={24}
                  className="text-indigo-600"
                />
              </div>

              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-white/20 p-3">
            <MessageCircle size={30} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Live Chat Support
            </h2>

            <p className="mt-1 text-indigo-100">
              Usually replies within a few
              minutes.
            </p>
          </div>

        </div>

        <button
          className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-600"
        >
          Start Chat
        </button>

      </div>

    </div>
  );
}