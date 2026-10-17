// src/pages/Login.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { TextField, SocialButtons, Divider } from "../components/Field";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const submit = (e) => {
    e.preventDefault();
    const next = {};

    if (!email.trim()) next.email = "Email is required";
    else if (!EMAIL_RE.test(email.trim())) next.email = "Enter a valid email address";

    if (!password) next.password = "Password is required";
    else if (password.length < 8) next.password = "Password must be at least 8 characters";

    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    // TODO: replace with your real auth call
    // await login({ email, password, remember });
    setTimeout(() => setStatus("success"), 900);
  };

  return (
    <AuthLayout>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
        Welcome back
      </span>
      <h1 className="font-headline-lg text-headline-lg font-serif text-on-surface mt-space-xs">
        Sign in to your command center
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-lg">
        Access your unified inbox, order ledger and settlement vault.
      </p>

      {status === "success" && (
        <div className="flex items-start gap-space-sm bg-tertiary/10 border border-tertiary/30 rounded-lg p-space-sm mb-space-md">
          <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
          <div>
            <p className="font-label-md text-label-md font-semibold text-on-surface">
              Signed in successfully
            </p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Redirecting to your dashboard…
            </p>
          </div>
        </div>
      )}

      <SocialButtons />
      <Divider label="or continue with email" />

      <form onSubmit={submit} className="space-y-space-md" noValidate>
        <TextField
          id="email"
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          inputMode="email"
          icon="mail"
          error={errors.email}
        />

        <TextField
          id="password"
          label="Password"
          type={showPw ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
          icon="lock"
          error={errors.password}
          trailing={
            <button
              type="button"
              onClick={() => setShowPw((v) => !v)}
              aria-label={showPw ? "Hide password" : "Show password"}
              className="w-8 h-8 flex items-center justify-center rounded-md text-secondary hover:text-on-surface hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                {showPw ? "visibility_off" : "visibility"}
              </span>
            </button>
          }
        />

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface-variant cursor-pointer select-none">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-outline-variant accent-[#795902]"
            />
            Remember me
          </label>
          <a
            href="#forgot"
            className="font-label-md text-label-md text-primary hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-space-md rounded-lg shadow-[0_4px_18px_rgba(201,162,75,0.32)] hover:shadow-[0_6px_22px_rgba(201,162,75,0.45)] transition-all flex items-center justify-center gap-space-xs font-bold disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              Signing in…
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">login</span>
              Sign in
            </>
          )}
        </button>
      </form>

      <p className="text-center font-body-md text-body-md text-on-surface-variant mt-space-lg">
        New to MerchantGenie?{" "}
        <Link to="/signup" className="text-primary font-semibold hover:underline">
          Create a free account
        </Link>
      </p>
    </AuthLayout>
  );
}