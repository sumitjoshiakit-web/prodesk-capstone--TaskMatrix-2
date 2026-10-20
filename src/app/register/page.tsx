import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Command } from "lucide-react";
import { RegisterForm } from "@/components/auth-form";
export const metadata: Metadata = { title: "Create account" };
export default function RegisterPage() {
  return (
    <main className="simple-auth">
      <header className="simple-header">
        <Link href="/login" className="brand">
          <span className="brand-mark">
            <Command size={21} />
          </span>
          <span>
            task<span className="brand-light">matrix</span>
          </span>
        </Link>
        <Link href="/login" className="back-link">
          <ArrowLeft size={15} /> Back to sign in
        </Link>
      </header>
      <section className="register-card">
        <div className="form-icon">
          <Command size={22} />
        </div>
        <p className="form-kicker">START WITH A CLEAR SPACE</p>
        <h1>Create your account</h1>
        <p className="form-subtitle">
          Set up your workspace. Your next chapter starts here.
        </p>
        <RegisterForm />
        <p className="secure-note centered">
          Your account is protected with secure authentication.
        </p>
      </section>
      <footer className="simple-footer">
        TASKMATRIX · YOUR WORK, IN GOOD ORDER
      </footer>
    </main>
  );
}
