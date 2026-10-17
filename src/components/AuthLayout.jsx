// src/components/AuthLayout.jsx
import { Link } from "react-router-dom";

const BENEFITS = [
  {
    icon: "smart_toy",
    text: "Genie AI answers Messenger, WhatsApp & Daraz chats 24/7",
  },
  {
    icon: "account_balance_wallet",
    text: "Auto-reconcile bKash, Nagad & COD into a single audited ledger",
  },
  {
    icon: "local_shipping",
    text: "1-click Pathao, Steadfast & DHL dispatch with auto-waybills",
  },
];

const BADGES = ["4,200+ merchants", "ISO 27001", "PCI-DSS Level 1"];

export default function AuthLayout({ children }) {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-5rem)]">
      <div className="mx-auto w-full max-w-6xl px-margin py-space-lg lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg lg:gap-space-xl items-stretch">
          {/* Brand panel */}
          <aside className="hidden lg:flex flex-col justify-between relative overflow-hidden rounded-2xl bg-on-secondary-fixed text-surface p-space-xl shadow-2xl">
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-28 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <Link to="/" className="flex items-center gap-space-xs mb-space-xl">
                <span className="material-symbols-outlined text-primary-fixed text-[28px]">
                  payments
                </span>
                <span className="font-headline-md text-headline-md font-semibold tracking-tight">
                  MerchantGenie
                </span>
              </Link>

              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                Autonomous Commerce OS
              </span>
              <h2 className="font-headline-lg text-headline-lg font-serif mt-space-xs mb-space-md">
                One command center for every channel, courier and taka.
              </h2>
              <p className="font-body-md text-body-md text-secondary-fixed mb-space-lg">
                Sign in to orchestrate storefronts, settlements and AI agents from a single
                dashboard — built for Bangladesh agility and global scale.
              </p>

              <ul className="space-y-space-sm">
                {BENEFITS.map((b) => (
                  <li key={b.text} className="flex items-start gap-space-sm">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-surface/10 flex items-center justify-center text-tertiary-fixed">
                      <span className="material-symbols-outlined text-[18px]">{b.icon}</span>
                    </span>
                    <span className="font-body-md text-body-md text-secondary-fixed pt-1.5">
                      {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 mt-space-xl flex flex-wrap items-center gap-space-xs">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1 px-space-sm py-space-xs rounded-full bg-surface/10 font-label-sm text-label-sm text-secondary-fixed-dim"
                >
                  <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">
                    verified
                  </span>
                  {badge}
                </span>
              ))}
            </div>
          </aside>

          {/* Form panel */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
}