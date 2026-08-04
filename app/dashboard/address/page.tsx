"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function AddressPage() {
    const user =
        typeof window !== "undefined"
            ? JSON.parse(
                localStorage.getItem("user") || "{}"
            )
            : null;

    const addresses = useQuery(
        api.addresses.getAddresses,
        user?.id
            ? { userId: user.id }
            : "skip"
    );

    const createAddress = useMutation(
        api.addresses.createAddress
    );

    const deleteAddress = useMutation(
        api.addresses.deleteAddress
    );

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
    });

    const handleSubmit = async () => {
        if (!user?.id) return;

        await createAddress({
            userId: user.id,
            ...form,
        });

        setForm({
            fullName: "",
            phone: "",
            address: "",
            city: "",
            state: "",
        });

        alert("Address Added");
    };

    return (
        <div className="space-y-8">

          <div className="mb-6 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
  <h1 className="text-3xl font-bold">
    Delivery Addresses
  </h1>

  <p className="mt-2 text-indigo-100">
    Manage where your orders will be delivered.
  </p>
</div>

           <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <div className="mb-8">
    <h2 className="text-2xl font-bold text-slate-900">
      Add New Address
    </h2>

    <p className="mt-2 text-slate-500">
      Enter your delivery details below.
    </p>
  </div>

  <div className="grid gap-5 md:grid-cols-2">

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Full Name
      </label>

      <input
        placeholder="John Doe"
        value={form.fullName}
        onChange={(e) =>
          setForm({
            ...form,
            fullName: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Phone Number
      </label>

      <input
        placeholder="+234 800 000 0000"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        City
      </label>

      <input
        placeholder="Lagos"
        value={form.city}
        onChange={(e) =>
          setForm({
            ...form,
            city: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        State
      </label>

      <input
        placeholder="Lagos State"
        value={form.state}
        onChange={(e) =>
          setForm({
            ...form,
            state: e.target.value,
          })
        }
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
      />
    </div>

  </div>

  <div className="mt-5">
    <label className="mb-2 block text-sm font-medium text-slate-700">
      Delivery Address
    </label>

    <textarea
      placeholder="Enter your complete delivery address..."
      value={form.address}
      onChange={(e) =>
        setForm({
          ...form,
          address: e.target.value,
        })
      }
      rows={4}
      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500"
    />
  </div>

  <div className="mt-8 flex justify-end">
    <button
      onClick={handleSubmit}
      className="rounded-2xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      Save Address
    </button>
  </div>

</div>

            <div className="space-y-4">
                {addresses?.length === 0 && (
  <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
    <h3 className="text-xl font-semibold">
      No Address Saved
    </h3>

    <p className="mt-2 text-slate-500">
      Add your first delivery address.
    </p>
  </div>
)}

                {addresses?.map((address) => (
                    <div
                        key={address._id}
                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                    >

                        <div className="flex items-center justify-between">

                            <div>
                                <h3 className="text-lg font-bold">
                                    {address.fullName}
                                </h3>

                                <p className="mt-1 text-slate-500">
                                    {address.phone}
                                </p>
                            </div>

                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                Active
                            </span>

                        </div>

                        <div className="mt-4 border-t pt-4">

                            <p className="text-slate-700">
                                {address.address}
                            </p>

                            <p className="mt-1 text-slate-500">
                                {address.city}, {address.state}
                            </p>

                        </div>

                        <div className="mt-5 flex gap-3">

                            <button
                                className="rounded-xl border px-4 py-2 text-sm"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() =>
                                    deleteAddress({
                                        addressId: address._id,
                                    })
                                }
                                className="rounded-xl bg-red-500 px-4 py-2 text-sm text-white"
                            >
                                Delete
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}