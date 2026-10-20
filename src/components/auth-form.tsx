"use client";

import { useState, useActionState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { signIn, register, type AuthState } from "@/lib/actions/auth";

const initial: AuthState = {};

function PasswordField({
  name,
  label,
  autoComplete,
  placeholder,
  minLength,
}: {
  name: string;
  label: string;
  autoComplete: string;
  placeholder: string;
  minLength?: number;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <span className="password-control">
        <input
          id={name}
          name={name}
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          minLength={minLength}
          required
        />
        <button
          className="password-toggle"
          type="button"
          aria-label={
            visible
              ? `Hide ${label.toLowerCase()}`
              : `Show ${label.toLowerCase()}`
          }
          aria-pressed={visible}
          title={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? (
            <EyeOff size={17} aria-hidden="true" />
          ) : (
            <Eye size={17} aria-hidden="true" />
          )}
        </button>
      </span>
    </div>
  );
}

export function LoginForm({ next = "/dashboard" }: { next?: string }) {
  const [state, action, pending] = useActionState(signIn, initial);

  return (
    <form action={action} className="form-stack">
      <input type="hidden" name="next" value={next} />
      <label className="field">
        <span>Email address</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <PasswordField
        name="password"
        label="Password"
        autoComplete="current-password"
        placeholder="Enter your password"
      />
      {state.error && (
        <p className="notice error" role="alert">
          {state.error}
        </p>
      )}
      <button className="button primary full" disabled={pending}>
        {pending ? (
          <>
            <LoaderCircle className="spin" size={18} /> Signing in…
          </>
        ) : (
          <>
            Sign in <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="form-foot">
        New to TaskMatrix? <Link href="/register">Create an account</Link>
      </p>
    </form>
  );
}

export function RegisterForm() {
  const [state, action, pending] = useActionState(register, initial);

  return (
    <form action={action} className="form-stack">
      <label className="field">
        <span>Full name</span>
        <input
          name="name"
          autoComplete="name"
          placeholder="Your name"
          minLength={2}
          required
        />
      </label>
      <label className="field">
        <span>Email address</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <PasswordField
        name="password"
        label="Password"
        autoComplete="new-password"
        placeholder="At least 8 characters"
        minLength={8}
      />
      <PasswordField
        name="confirmPassword"
        label="Confirm password"
        autoComplete="new-password"
        placeholder="Repeat your password"
        minLength={8}
      />
      <p className="password-hint">
        Use at least 8 characters. You can reveal the password to check it
        before submitting.
      </p>
      {state.error && (
        <p className="notice error" role="alert">
          {state.error}
        </p>
      )}
      {state.success && (
        <p className="notice success" role="status">
          {state.success}
        </p>
      )}
      <button className="button primary full" disabled={pending}>
        {pending ? (
          <>
            <LoaderCircle className="spin" size={18} /> Creating account…
          </>
        ) : (
          <>
            Create account <ArrowRight size={18} />
          </>
        )}
      </button>
      <p className="form-foot">
        Already have an account? <Link href="/login">Sign in</Link>
      </p>
    </form>
  );
}
