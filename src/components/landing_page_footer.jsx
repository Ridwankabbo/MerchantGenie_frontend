// src/components/Footer.jsx
export default function Footer() {
  const link =
    "font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors";

  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)]">
      <div className="w-full px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-space-xl">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-space-xs mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
              <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
                MerchantGenie
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
              Autonomous merchant commerce engine offering private-wealth financial orchestration
              and cross-border settlement for ambitious global enterprises.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs">
              <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px] text-tertiary">verified</span>
                ISO 27001 Certified
              </div>
              <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[14px] text-tertiary">shield</span>
                PCI-DSS Level 1
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-space-md">
              Platform &amp; Architecture
            </div>
            <div className="flex flex-col gap-space-sm">
              <a className={link} data-path="features" href="#">Omnichannel Checkout</a>
              <a className={link} data-path="features" href="#">Settlement Engine</a>
              <a className={link} data-path="integrations" href="#">POS Terminals &amp; Hardware</a>
              <a className={link} data-path="features" href="#">Intelligent Fraud Shield</a>
              <a className={link} data-path="developers" href="#">Webhooks &amp; Events</a>
            </div>
          </div>

          {/* Ecosystem */}
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-space-md">
              Ecosystem
            </div>
            <div className="flex flex-col gap-space-sm">
              <a className={link} data-path="integrations" href="#">ERP &amp; Accounting Integrations</a>
              <a className={link} data-path="developers" href="#">Merchant SDKs</a>
              <a className={link} data-path="integrations" href="#">Global Banking Rails</a>
              <a className={link} data-path="pricing" href="#">Enterprise Custom Tier</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-space-md">
              Company &amp; Trust
            </div>
            <div className="flex flex-col gap-space-sm">
              <a className={link} data-path="company" href="#">About MerchantGenie</a>
              <a className={link} data-path="company" href="#">Leadership &amp; Governance</a>
              <a className={link} data-path="company" href="#">Security &amp; Compliance</a>
              <a className={link} data-path="company" href="#">Press &amp; Institutional Insights</a>
              <a className={link} data-path="contact" href="#">Contact Advisory</a>
            </div>
          </div>

          {/* Jurisdictions */}
          <div>
            <div className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface mb-space-md">
              Jurisdictions &amp; Presence
            </div>
            <div className="space-y-space-sm mb-space-md">
              <div className="p-space-sm rounded-lg bg-surface-container">
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-primary">public</span>
                  Bangladesh Node
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
                  Licensed settlement gateway supporting MFS, NPSB, and local acquiring.
                </p>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container">
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">globe</span>
                  Global Operations
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant mt-space-xs">
                  Cross-border treasury supporting multi-currency corridors across 40+ countries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-md font-body-md text-body-md text-on-surface-variant">
            <span>© 2025 MerchantGenie Inc. All institutional rights reserved.</span>
            <a className="hover:text-on-surface transition-colors" data-path="privacy-policy" href="#">Privacy Policy</a>
            <a className="hover:text-on-surface transition-colors" data-path="terms-of-service" href="#">Terms of Service</a>
            <a className="hover:text-on-surface transition-colors" data-path="security-whitepaper" href="#">Security Disclosures</a>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant">
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm bg-surface-container-high px-space-sm py-space-xs rounded-full">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              Operational • All Nodes Active
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}