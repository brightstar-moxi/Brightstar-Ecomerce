"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { getUser } from "@/lib/auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const [authorized, setAuthorized] =
    useState(false);

  useEffect(() => {

    const user = getUser();

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "admin") {
      router.replace("/dashboard");
      return;
    }

    setAuthorized(true);

  }, [router]);

  if (!authorized) {
    return null;
  }

  return <>{children}</>;
}