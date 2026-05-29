"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Page() {
  const createAdmin =
    useMutation(api.users.createFirstAdmin);

  return (
    <button
      onClick={async () => {
        const result = await createAdmin();
        console.log(result);
        alert("Admin created");
      }}
    >
      Create Admin
    </button>
  );
}