import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Command,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { LoginForm } from "@/components/auth-form";
export const metadata: Metadata = { title: "Sign in" };
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  const target =
    next?.startsWith("/") && !next.startsWith("//") ? next : "/dashboard";
  return (
    <main className="auth-layout">
      <section className="auth-panel">
        <Link href="/login" className="brand">
          <span className="brand-mark">
            <Command size={21} />
          </span>
          <span>
            task<span className="brand-light">matrix</span>
          </span>
        </Link>
        <div className="auth-content">
          <span className="eyebrow">
            <span className="eyebrow-dot" /> YOUR WORKSPACE, REFOCUSED
          </span>
          <h1>
            Make room for
            <br />
            <span>meaningful work.</span>
          </h1>
          <p className="auth-description">
            A calmer way to organize the work that moves you forward. Pick up
            where your best ideas begin.
          </p>
          <div className="feature-list">
            <div>
              <CheckCircle2 />
              <span>
                <b>Clarity over clutter</b>
                <small>Keep your next steps in focus.</small>
              </span>
            </div>
            <div>
              <Layers3 />
              <span>
                <b>Everything in its place</b>
                <small>One home for your priorities.</small>
              </span>
            </div>
            <div>
              <ShieldCheck />
              <span>
                <b>Your space stays yours</b>
                <small>Secure sign-in for your workspace.</small>
              </span>
            </div>
          </div>
        </div>
        <div className="panel-bottom">
          <span>BUILT FOR YOUR NEXT BIG THING</span>
          <span>© 2026 TASKMATRIX</span>
        </div>
      </section>
      <section className="form-panel">
        <div className="form-top">
          <span>Don&apos;t have an account?</span>
          <Link href="/register" className="text-link">
            Get started <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="form-card">
          <div className="form-icon">
            <Command size={22} />
          </div>
          <p className="form-kicker">WELCOME BACK</p>
          <h2>Sign in to TaskMatrix</h2>
          <p className="form-subtitle">
            Enter your details to access your workspace.
          </p>
          <LoginForm next={target} />
          <p className="secure-note">
            <ShieldCheck size={14} /> Secure authentication keeps your account
            protected.
          </p>
        </div>
        <div className="form-bottom">
          <span>Privacy</span>
          <span>·</span>
          <span>Terms</span>
          <span className="form-bottom-right">
            A little more focus. A lot more done.
          </span>
        </div>
      </section>
    </main>
  );
}
