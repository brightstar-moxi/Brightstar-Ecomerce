// import Link from "next/link";

// export default function QuickActions() {
//   return (
//     <div className="rounded-3xl bg-white p-6 shadow-sm">

//       <h2 className="mb-6 text-xl font-bold">
//         Quick Actions
//       </h2>

//       <div className="grid gap-4 md:grid-cols-4">

//         <Link
//           href="/marketplace"
//           className="rounded-2xl border p-5 text-center hover:bg-slate-50"
//         >
//           🛒 Shop
//         </Link>

//         <Link
//           href="/cart"
//           className="rounded-2xl border p-5 text-center hover:bg-slate-50"
//         >
//           🛍 Cart
//         </Link>

//         <Link
//           href="/dashboard/orders"
//           className="rounded-2xl border p-5 text-center hover:bg-slate-50"
//         >
//           📦 Orders
//         </Link>

//         <Link
//           href="/support"
//           className="rounded-2xl border p-5 text-center hover:bg-slate-50"
//         >
//           💬 Support
//         </Link>

//       </div>

//     </div>
//   );
// }

import Link from "next/link";

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        Quick Actions
      </h2>

      <div className="grid gap-4">

        <Link
          href="/marketplace"
          className="rounded-2xl bg-orange-500 p-4 text-center font-semibold text-white"
        >
          Shop Products
        </Link>

        <Link
          href="/dashboard/orders"
          className="rounded-2xl bg-indigo-600 p-4 text-center font-semibold text-white"
        >
          View Orders
        </Link>

      </div>

    </div>
  );
}