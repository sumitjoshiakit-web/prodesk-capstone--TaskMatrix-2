"use client";
import { useEffect } from "react";
import { useAuthStore, type AuthUser } from "@/store/auth-store";
export function DashboardUserSync({ user }: { user: AuthUser }) {
  const setUser = useAuthStore((s) => s.setUser);
  useEffect(() => {
    setUser(user);
  }, [setUser, user]);
  return null;
}
