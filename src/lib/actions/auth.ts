"use server";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
export type AuthState = { error?: string; success?: string };
function safeNext(v: string) {
  return v.startsWith("/") && !v.startsWith("//") ? v : "/dashboard";
}
export async function signIn(_s: AuthState, fd: FormData): Promise<AuthState> {
  const email = String(fd.get("email") ?? "").trim();
  const password = String(fd.get("password") ?? "");
  if (!/^\S+@\S+\.\S+$/.test(email))
    return { error: "Enter a valid email address." };
  if (!password) return { error: "Enter your password." };
  let sb;
  try {
    sb = await createClient();
  } catch {
    return {
      error:
        "Supabase is not configured. Add the variables from .env.example to .env.local.",
    };
  }
  const { error } = await sb.auth.signInWithPassword({ email, password });
  if (error)
    return {
      error:
        error.message === "Invalid login credentials"
          ? "Email or password is incorrect."
          : error.message,
    };
  redirect(safeNext(String(fd.get("next") ?? "/dashboard")));
}
export async function register(
  _s: AuthState,
  fd: FormData,
): Promise<AuthState> {
  const name = String(fd.get("name") ?? "").trim(),
    email = String(fd.get("email") ?? "").trim(),
    password = String(fd.get("password") ?? ""),
    confirm = String(fd.get("confirmPassword") ?? "");
  if (name.length < 2) return { error: "Name must be at least 2 characters." };
  if (!/^\S+@\S+\.\S+$/.test(email))
    return { error: "Enter a valid email address." };
  if (password.length < 8)
    return { error: "Password must contain at least 8 characters." };
  if (password !== confirm) return { error: "Passwords do not match." };
  let sb;
  try {
    sb = await createClient();
  } catch {
    return {
      error:
        "Supabase is not configured. Add the variables from .env.example to .env.local.",
    };
  }
  const { data, error } = await sb.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });
  if (error) return { error: error.message };
  if (data.session) redirect("/dashboard");
  return {
    success:
      "Account created. Check your email to confirm your address, then sign in.",
  };
}
export async function signOut() {
  const sb = await createClient();
  await sb.auth.signOut();
  redirect("/login");
}
