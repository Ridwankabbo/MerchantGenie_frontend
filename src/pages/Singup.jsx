// src/pages/Signup.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { TextField, SocialButtons, Divider } from "../components/Field";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const BD_PHONE_RE = /^(?:\+?880|0)1[3-9]\d{8}$/;

const STRENGTH_META = [
  { label: "Too weak", bar: "bg-error", text: "text-error" },
  { label: "Weak", bar: "bg-error", text: "text-error" },
  { label: "Fair", bar: "bg-primary-container", text: "text-primary" },
  { label: "Good", bar: "bg-tertiary-container", text: "text-tertiary" },
  { label: "Strong", bar: "bg-tertiary", text: "text-tertiary" },
];

function scorePassword(pw) {
  if (!pw) return 0;
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return Math.min(4, score);
}

function PasswordStrength({ password }) {
  if (!password) return null;

  const score = scorePassword(password);
  const meta = STRENGTH_META[score];

  return (
    <div className="mt-space-xs">
      <div className="flex gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors ${
              i < Math.max(score, 1) ? meta.bar : "bg-surface-container-high"
            }`}
          />
        ))}
      </div>
      <p className={`font-label-sm text-label-sm mt-1 ${meta.text}`}>
        Password strength: {meta.label}
      </p>
    </div>
  );
}

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    password: "",
  });
  const [agree, setAgree] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const normalizedPhone = useMemo(
    () => form.phone.replace(/[\s-]/g, ""),
    [form.phone]
  );

  const submit = (e) => {
    e.preventDefault();
    const next = {};

    if (!form.name.trim()) next.name = "Full name is required";
    if (!form.business.trim()) next.business = "Business name is required";

    if (!form.email.trim()) next.email = "Email is required";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "Enter a valid email address";

    if (!normalizedPhone) next.phone = "Phone number is required";
    else if (!BD_PHONE_RE.test(normalizedPhone))
      next.phone = "Use a valid BD number, e.g. 01712345678";

    if (!form.password) next.password = "Password is required";
    else if (form.password.length < 8) next.password = "Use at least 8 characters";

    if (!agree) next.agree = "Please accept the terms to continue";

    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");
    // TODO: replace with your real registration call
    // await signup({ ...form, phone: normalizedPhone });
    setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <AuthLayout>
      <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
        Start free • No credit card
      </span>
      <h1 className="font-headline-lg text-headline-lg font-serif text-on-surface mt-space-xs">
        Create your MerchantGenie account
      </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs mb-space-lg">
        Launch autonomous selling across Facebook, Shopify, Daraz and WhatsApp in under 5 minutes.
      </p>

      {status === "success" && (
        <div className="flex items-start gap-space-sm bg-tertiary/10 border border-tertiary/30 rounded-lg p-space-sm mb-space-md">
          <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
          <div>
            <p className="font-label-md text-label-md font-semibold text-on-surface">
              Account created
            </p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Check your inbox to verify your email, then sign in.
            </p>
          </div>
        </div>
      )}

      <SocialButtons action="Sign up" />
      <Divider label="or sign up with email" />

      <form onSubmit={submit} className="space-y-space-md" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
          <TextField
            id="name"
            label="Full name"
            value={form.name}
            onChange={set("name")}
            placeholder="Tahsin Ahmed"
            autoComplete="name"
            icon="person"
            error={errors.name}
          />
          <TextField
            id="business"
            label="Business name"
            value={form.business}
            onChange={set("business")}
            placeholder="Artisan Heritage"
            autoComplete="organization"
            icon="storefront"
            error={errors.business}
          />
        </div>

        <TextField
          id="email"
          label="Business email"
          type="email"
          value={form.email}
          onChange={set("email")}
          placeholder="you@company.com"
          autoComplete="email"
          inputMode="email"
          icon="mail"
          error={errors.email}
        />

        <TextField
          id="phone"
          label="Phone number"
          type="tel"
          value={form.phone}
          onChange={set("phone")}
          placeholder="01712345678"
          autoComplete="tel"
          inputMode="tel"
          icon="call"
          error={errors.phone}
          hint="Used for courier alerts and bKash settlement verification."
        />

        <div>
          <TextField
            id="password"
            label="Password"
            type={showPw ? "text" : "password"}
            value={form.password}
            onChange={set("password")}
            placeholder="At least 8 characters"
            autoComplete="new-password"
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
          <PasswordStrength password={form.password} />
        </div>

        <label className="flex items-start gap-2 font-body-md text-body-md text-on-surface-variant cursor-pointer select-none">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="w-4 h-4 mt-0.5 rounded border-outline-variant accent-[#795902]"
          />
          <span>
            I agree to the{" "}
            <a href="#terms" className="text-primary font-semibold hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#privacy" className="text-primary font-semibold hover:underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.agree && (
          <p className="font-label-sm text-label-sm text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px]">error</span>
            {errors.agree}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-space-md rounded-lg shadow-[0_4px_18px_rgba(201,162,75,0.32)] hover:shadow-[0_6px_22px_rgba(201,162,75,0.45)] transition-all flex items-center justify-center gap-space-xs font-bold disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <span className="material-symbols-outlined text-[18px] animate-spin">sync</span>
              Creating account…
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              Start 14-Day Free Trial
            </>
          )}
        </button>
      </form>

      <p className="text-center font-body-md text-body-md text-on-surface-variant mt-space-lg">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}