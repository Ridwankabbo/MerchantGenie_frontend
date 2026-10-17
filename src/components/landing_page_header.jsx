// src/components/Header.jsx
import { Link } from "react-router-dom";
export default function Header() {
  const navLink =
    "text-on-surface-variant font-body-md text-body-md hover:text-on-surface transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-lg">
          <a className="flex items-center gap-space-xs" data-path="landing" href="#">
            <span className="material-symbols-outlined text-primary text-[28px]">payments</span>
            <span className="font-headline-md text-headline-md font-semibold tracking-tight text-on-surface">
              MerchantGenie
            </span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-space-lg" data-active-classes="text-primary font-bold">
          <a className={navLink} data-path="features" href="#features">Features</a>
          <a className={navLink} data-path="integrations" href="#">Integrations</a>
          <a className={navLink} data-path="pricing" href="#pricing">Pricing</a>
          <a className={navLink} data-path="developers" href="#">Developers</a>
        </nav>

        <div className="flex items-center gap-space-md">
          <Link to="/login" className="hidden sm:inline-block font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" >
          Login
          </Link>
          <a
            className="bg-primary-container text-on-primary-container font-label-md text-label-md px-space-md py-space-sm rounded-lg hover:shadow-[0_4px_14px_rgba(201,162,75,0.25)] transition-all flex items-center gap-space-xs"
            data-path="signup"
            href="#"
          >
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            Start Free
          </a>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}