"use client";

import { useState,  useEffect,} from "react";
import { useMutation,  useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function SettingsPage() {
const currentUser =
  typeof window !== "undefined"
    ? JSON.parse(
        localStorage.getItem("user") || "{}"
      )
    : null;

const user = useQuery(
  api.users.getUserById,
  currentUser?.id
    ? {
        userId:
          currentUser.id,
      }
    : "skip"
);
useEffect(() => {
  if (user) {
    setName(
      user.name || ""
    );

    setPhone(
      user.phone || ""
    );
  }
}, [user]);

  const updateProfile =
    useMutation(
      api.users.updateProfile
    );

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const handleSave = async () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    await updateProfile({
      userId: user.id,
      name,
      phone,
    });

   localStorage.setItem(
  "user",
  JSON.stringify({
    ...currentUser,
    name,
  })
);

alert(
  "Profile updated successfully"
);

window.location.reload();
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">

      <h1 className="mb-8 text-3xl font-bold">
        Account Settings
      </h1>

      <div className="space-y-6">
<div className="mb-8 flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
    {name?.charAt(0)}
  </div>

  <div>
    <h2 className="font-bold">
      {name}
    </h2>

    <p className="text-slate-500">
      {currentUser?.email}
    </p>
  </div>

</div>
        <div>
          <label>Name</label>

          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="Your name"
          />
        </div>
        <div>
  <label>Email</label>

  <input
    value={currentUser?.email || ""}
    disabled
    className="mt-2 w-full rounded-xl border bg-slate-100 p-3"
  />
</div>

        <div>
          <label>Phone Number</label>

          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="mt-2 w-full rounded-xl border p-3"
            placeholder="+234..."
          />
        </div>

        <button
          onClick={handleSave}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}