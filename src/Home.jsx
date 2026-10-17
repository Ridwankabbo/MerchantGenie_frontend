
function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-margin py-space-xl lg:py-24">
      {/* Ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-primary-fixed/30 via-primary-container/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container shadow-sm mb-space-lg">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface">
            The Autonomous Operating System for Global Merchants • New 2.4 Release
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline-lg text-display-lg max-w-4xl tracking-tight text-on-surface mb-space-md">
          Run your whole business from one place.{" "}
          <span className="italic text-primary font-serif">Let AI do the rest.</span>
        </h1>

        {/* Subhead */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
          Unify Facebook, Shopify, Daraz, and WhatsApp into an autonomous command center. Reconcile
          bKash &amp; COD automatically, dispatch courier fleets in 1-click, and let Genie AI handle
          customer orders 24/7.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-space-md mb-space-lg w-full sm:w-auto">
          <a
            className="w-full sm:w-auto bg-primary-container text-on-primary-container font-label-md text-label-md px-space-xl py-space-md rounded-lg shadow-[0_4px_18px_rgba(201,162,75,0.32)] hover:shadow-[0_6px_22px_rgba(201,162,75,0.45)] transition-all flex items-center justify-center gap-space-xs"
            href="#pricing"
          >
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span>Start Free Trial</span>
          </a>
          <a
            className="w-full sm:w-auto bg-surface-container-low text-on-surface font-label-md text-label-md px-space-lg py-space-md rounded-lg shadow-sm hover:bg-surface-container transition-all flex items-center justify-center gap-space-xs"
            href="#demo"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">play_circle</span>
            <span>Watch 2-Min Live Demo</span>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mb-space-xl">
          <div className="flex -space-x-2 overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-[11px] font-bold shadow-sm">DH</div>
            <div className="w-7 h-7 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed text-[11px] font-bold shadow-sm">LX</div>
            <div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed text-[11px] font-bold shadow-sm">SR</div>
          </div>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
            Trusted by <strong>4,200+</strong> fast-growing merchants in BD &amp; worldwide
          </span>
        </div>

        {/* Dashboard Mockup */}
        <div className="w-full relative mt-space-sm">
          <div className="w-full bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(11,18,32,0.08)] p-space-md lg:p-space-lg text-left overflow-hidden">
            {/* Window header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-space-md mb-space-md bg-surface-container-low -mx-space-md -mt-space-md p-space-md lg:-mx-space-lg lg:-mt-space-lg">
              <div className="flex items-center gap-space-md">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-error/70 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-primary-fixed-dim inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-tertiary inline-block"></span>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Dhaka Artisans (Flagship)
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary">
                    • Live sync across 4 channels
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-space-sm mt-space-sm sm:mt-0">
                <div className="bg-surface-container px-space-sm py-1 rounded-md text-on-surface font-label-sm flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[14px] text-primary">payments</span>
                  <span className="font-bold">BDT ৳184,500</span>
                  <span className="text-secondary">/ $1,540 USD</span>
                </div>
                <span className="bg-tertiary/10 text-tertiary font-label-sm px-space-sm py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">cloud_done</span>
                  99.98% Latency 14ms
                </span>
              </div>
            </div>

            {/* Core grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              {/* Financial column */}
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="bg-surface-container-low p-space-md rounded-lg">
                  <div className="flex items-center justify-between mb-space-xs">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        Gross GMV • Today
                      </span>
                      <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">
                        ৳ 348,290.00
                      </h3>
                    </div>
                    <span className="bg-tertiary/15 text-tertiary font-label-sm px-space-sm py-1 rounded-full flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">trending_up</span>
                      +34.2% vs yesterday
                    </span>
                  </div>

                  {/* Sparkline */}
                  <div className="h-28 w-full mt-space-sm relative">
                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 500 100">
                      <defs>
                        <linearGradient id="grad-spark" x1="0%" x2="0%" y1="0%" y2="100%">
                          <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#C9A24B" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 Q 50,40 100,65 T 200,30 T 300,50 T 400,15 T 500,5 L 500,100 L 0,100 Z"
                        fill="url(#grad-spark)"
                      />
                      <path
                        d="M0,80 Q 50,40 100,65 T 200,30 T 300,50 T 400,15 T 500,5"
                        fill="none"
                        stroke="#795902"
                        strokeLinecap="round"
                        strokeWidth="3"
                      />
                      <circle cx="400" cy="15" fill="#795902" r="4" />
                      <circle cx="500" cy="5" fill="#1dbe85" r="4" />
                    </svg>
                    <div className="absolute top-2 right-4 bg-surface-container-lowest px-2 py-0.5 rounded shadow-sm text-[10px] font-bold text-tertiary">
                      Peak Surge: +182 Orders/hr
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-space-sm pt-space-sm mt-space-sm">
                    <div>
                      <span className="font-label-sm text-secondary text-[11px]">Orders Processed</span>
                      <p className="font-headline-sm text-headline-sm font-semibold text-on-surface">812</p>
                    </div>
                    <div>
                      <span className="font-label-sm text-secondary text-[11px]">bKash Verified</span>
                      <p className="font-headline-sm text-headline-sm font-semibold text-tertiary">৳ 214,300</p>
                    </div>
                    <div>
                      <span className="font-label-sm text-secondary text-[11px]">COD Escrow In-Transit</span>
                      <p className="font-headline-sm text-headline-sm font-semibold text-primary">৳ 133,990</p>
                    </div>
                  </div>
                </div>

                {/* Courier manifest */}
                <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col sm:flex-row items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">local_shipping</span>
                    </div>
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface font-bold">
                        Courier Fleet Dispatch Live
                      </h4>
                      <p className="font-label-sm text-secondary">
                        Pathao (412) • Steadfast (260) • RedX (94) • DHL (46)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <span className="bg-surface-container-lowest px-space-sm py-1 rounded text-on-surface font-label-sm shadow-sm flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span> Auto-Waybill OK
                    </span>
                    <button className="bg-on-surface text-surface font-label-sm px-space-sm py-1 rounded hover:opacity-90 transition-opacity">
                      Batch Manifest
                    </button>
                  </div>
                </div>
              </div>

              {/* Genie AI column */}
              <div className="lg:col-span-5 bg-surface-container p-space-md rounded-lg flex flex-col justify-between relative shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                        <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                      </div>
                      <div>
                        <span className="font-label-md text-label-md font-bold text-on-surface">
                          Genie AI Copilot
                        </span>
                        <span className="font-label-sm text-[10px] text-tertiary block">
                          Autonomous Checkout Active
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm bg-surface-container-lowest px-2 py-0.5 rounded-full text-secondary">
                      Chat #9824
                    </span>
                  </div>

                  <div className="space-y-space-xs text-[12px]">
                    <div className="bg-surface-container-lowest p-space-sm rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-on-surface">
                      <p className="font-medium">Customer (Messenger):</p>
                      <p className="text-on-surface-variant">
                        "Apnader Banani showroom e Jamdani saree ta ki available ache? Tomorrow
                        afternoon delivery hobe?"
                      </p>
                    </div>

                    <div className="bg-surface-container-high p-space-sm rounded-lg rounded-tr-none ml-auto max-w-[90%] text-on-surface">
                      <div className="flex items-center gap-1 text-primary font-bold text-[11px] mb-0.5">
                        <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                        Genie Verified Response
                      </div>
                      <p className="text-on-surface">
                        "Ji! Banani depot e 3 pieces stock ache (SKU: JMD-042). Banani &amp; Gulshan
                        area te tomorrow 2 PM er moddhe Pathao Express delivery kora jabe."
                      </p>
                      <div className="mt-space-xs p-1.5 bg-surface-container-lowest rounded shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-primary text-[14px]">qr_code_2</span>
                          <span className="font-bold text-[11px]">৳ 6,450 (bKash Link Sent)</span>
                        </div>
                        <span className="bg-tertiary/10 text-tertiary text-[9px] font-bold px-1.5 py-0.5 rounded">
                          Address Confirmed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-md pt-space-sm bg-surface-container-lowest p-space-sm rounded shadow-sm flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-secondary">
                    Avg. Resolution: <strong className="text-on-surface">18 secs</strong>
                  </span>
                  <span className="font-label-sm text-[11px] text-tertiary flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">check_circle</span> 99.4% CSAT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/sections/LogoStrip.jsx
const ecosystems = [
  { icon: "chat", color: "text-primary", label: "FB Messenger" },
  { icon: "photo_camera", color: "text-primary", label: "Instagram DM" },
  { icon: "forum", color: "text-tertiary", label: "WhatsApp Biz" },
  { icon: "shopping_bag", color: "text-tertiary-container", label: "Shopify" },
  { icon: "storefront", color: "text-error", label: "Daraz Mall" },
  { icon: "language", color: "text-secondary", label: "WooCommerce" },
  { icon: "webhook", color: "text-primary", label: "REST Webhook" },
  { icon: "phone_iphone", color: "text-on-surface", label: "iOS & Android" },
];

function LogoStrip() {
  return (
    <section className="w-full bg-surface-container py-space-xl px-margin">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest text-secondary text-center mb-space-lg">
          Seamless multi-channel orchestration across leading social, web &amp; mobile ecosystems
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-md w-full">
          {ecosystems.map((item) => (
            <div
              key={item.label}
              className="bg-surface-container-lowest rounded-lg p-space-sm flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className={`material-symbols-outlined ${item.color} text-[24px] mb-1`}>
                {item.icon}
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// src/sections/Steps.jsx
const steps = [
  {
    num: "01",
    numClass: "bg-surface-container text-primary",
    title: "Link Storefronts in 60s",
    body: "Connect Facebook pages, Instagram feeds, Daraz seller accounts, and Shopify/WooCommerce stores with one-click secure OAuth authorization.",
    icon: "verified_user",
    iconClass: "text-tertiary",
    note: "Official Meta & Daraz Open Platform Partner",
  },
  {
    num: "02",
    numClass: "bg-primary-container text-on-primary-container",
    title: "Train Genie on Catalog & FAQs",
    body: "Our AI absorbs your product dimensions, pricing, multi-warehouse stock (Banani, Dhanmondi, Chittagong), return windows, and COD policies.",
    icon: "psychology",
    iconClass: "text-primary",
    note: "Learns Bengali, Banglish & English seamlessly",
  },
  {
    num: "03",
    numClass: "bg-surface-container text-primary",
    title: "Automate Orders & Payouts",
    body: "Sit back as orders self-fulfill with auto-generated Pathao/Steadfast consignment slips and instant bKash/Nagad audit ledger matching.",
    icon: "account_balance_wallet",
    iconClass: "text-tertiary",
    note: "Zero-touch automated COD reconciliation",
  },
];

function Steps() {
  return (
    <section className="w-full px-margin py-space-xl lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Effortless Architecture
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mt-space-xs">
            Connect your entire business in 3 simple steps
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            No coding or extensive technical overhead. Launch intelligent multi-channel orchestration
            in under five minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg relative">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-lg ${s.numClass} flex items-center justify-center font-bold text-headline-sm mb-space-md`}
                >
                  {s.num}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                  {s.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {s.body}
                </p>
              </div>
              <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-space-sm text-[12px]">
                <span className={`material-symbols-outlined ${s.iconClass} text-[18px]`}>
                  {s.icon}
                </span>
                <span className="text-secondary">{s.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// src/sections/Features.jsx
const features = [
  {
    icon: "forum",
    iconClass: "bg-primary-container/20 text-primary",
    title: "Omnichannel Unified Inbox",
    body: "Combines Messenger, Instagram DM, WhatsApp Business, and Daraz buyer questions into a single prioritized inbox enriched with lifetime spend and risk ratings.",
    cta: "Explore Inbox features",
    ctaClass: "text-primary",
  },
  {
    icon: "inventory_2",
    iconClass: "bg-primary-container/20 text-primary",
    title: "Orders & Multi-Depot Fulfillment",
    body: "Centralized fulfillment ledger with bulk thermal waybill printing, barcode pickup verification, and real-time stock allocation across Dhanmondi and Banani warehouses.",
    cta: "View warehouse sync",
    ctaClass: "text-primary",
  },
  {
    icon: "local_shipping",
    iconClass: "bg-tertiary/15 text-tertiary",
    title: "Live Courier Fleet API",
    body: "Synchronized 2-way dispatch with Pathao, Steadfast, RedX, and DHL. Automated SMS triggers send branded tracking links directly to customer phones upon dispatch.",
    cta: "Supported courier APIs",
    ctaClass: "text-tertiary",
  },
  {
    icon: "corporate_fare",
    iconClass: "bg-secondary/15 text-secondary",
    title: "Multi-Brand Executive Switch",
    body: "Control 10+ Facebook pages, independent brand storefronts, and cross-border subsidiaries from a single unified login with granular team access control.",
    cta: "Enterprise governance",
    ctaClass: "text-secondary",
  },
  {
    icon: "shopping_cart_checkout",
    iconClass: "bg-primary-container/20 text-primary",
    title: "Checkout & Cart Recovery",
    body: "24/7 web checkout health monitoring with autonomous WhatsApp re-engagement that revives abandoned carts within 15 minutes of customer drop-off.",
    cta: "Recovery sequences",
    ctaClass: "text-primary",
  },
  {
    icon: "query_stats",
    iconClass: "bg-tertiary/15 text-tertiary",
    title: "Net Margin & Profit Engine",
    body: "Calculates real net cash profit by automatically subtracting Meta ad spend, courier return penalty deductions, bKash merchant fees, and unit COGS.",
    cta: "Explore margin metrics",
    ctaClass: "text-tertiary",
  },
];
// =====================
//      Features
// =====================
function Features() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24 px-margin" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
              Complete Operational Mastery
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mt-space-xs">
              Six architectural pillars engineered for relentless merchant velocity
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Everything required to scale an elite omnichannel brand without drowning in disjointed
            apps and spreadsheet chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-lg ${f.iconClass} flex items-center justify-center mb-space-md`}>
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-space-xs">
                  {f.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {f.body}
                </p>
              </div>
              <div className={`flex items-center gap-space-xs ${f.ctaClass} font-label-md text-label-md`}>
                <span>{f.cta}</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/sections/GenieSpotlight.jsx
const bullets = [
  {
    icon: "verified",
    title: "Autonomous Order Closure",
    body: "Converts conversational intent into locked orders with complete phone, postal code, and delivery notes without human intervention.",
  },
  {
    icon: "security",
    title: "Fraud & Fake-Order Detection",
    body: "Cross-checks historical delivery bounce rates across national courier databases to flag suspicious COD orders before dispatch.",
  },
  {
    icon: "qr_code",
    title: "Instant 1-Click Payment Invoicing",
    body: "Generates bKash, Nagad, or credit card payment links within the conversation and verifies the transaction ID instantly.",
  },
];

// =========================
//      GenieSpotlight
// =========================

function GenieSpotlight() {
  return (
    <section className="w-full px-margin py-space-xl lg:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed-variant font-label-sm mb-space-sm">
              <span className="material-symbols-outlined text-[14px]">smart_toy</span>
              Genie Autonomous Operations AI
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mb-space-md">
              Meet Genie: Your 24/7 autonomous operations executive
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-space-lg">
              Genie doesn't just reply with static robotic templates. It reads real-time stock
              levels, executes fraud security assessments, computes exact parcel delivery fees, and
              sends clickable bKash invoice links directly inside the chat.
            </p>

            <div className="space-y-space-md">
              {bullets.map((b) => (
                <div key={b.title} className="flex items-start gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary mt-1">
                    <span className="material-symbols-outlined text-[18px]">{b.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-bold">{b.title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: chat card */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest rounded-xl shadow-[0_16px_40px_rgba(11,18,32,0.06)] p-space-md lg:p-space-lg">
              {/* Header */}
              <div className="flex items-center justify-between pb-space-sm mb-space-md bg-surface-container-low -mx-space-md -mt-space-md p-space-md lg:-mx-space-lg lg:-mt-space-lg">
                <div className="flex items-center gap-space-sm">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[20px]">smart_toy</span>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-tertiary absolute -bottom-0.5 -right-0.5 shadow-sm"></span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface font-bold">
                      Genie Agent #04
                    </h4>
                    <p className="font-label-sm text-secondary">
                      Channel: Meta Messenger • Customer: Sabrina K.
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-tertiary bg-tertiary/10 px-2.5 py-1 rounded-full font-bold">
                  Live AI Execution
                </span>
              </div>

              {/* Dialogue */}
              <div className="space-y-space-md text-[13px]">
                <div className="flex gap-space-xs">
                  <div className="w-7 h-7 rounded-full bg-surface-container text-secondary flex items-center justify-center text-[10px] font-bold">
                    SK
                  </div>
                  <div className="bg-surface-container-low p-space-sm rounded-xl rounded-tl-none max-w-[80%] text-on-surface">
                    <p>
                      Is the Handloom Jamdani saree in Emerald Green available in your Banani store?
                      Can I get delivery by tomorrow evening?
                    </p>
                    <span className="text-[10px] text-secondary mt-1 block">11:04 PM • Messenger</span>
                  </div>
                </div>

                <div className="flex items-center gap-space-xs px-space-sm py-1 bg-primary-fixed/20 rounded-lg text-primary text-[11px] font-medium">
                  <span className="material-symbols-outlined text-[14px] animate-spin">sync</span>
                  <span>
                    Checking Banani Depot Inventory (SKU: JMD-EMR-02)... Stock: 2 units verified.
                  </span>
                </div>

                <div className="flex gap-space-xs justify-end">
                  <div className="bg-surface-container-high p-space-sm rounded-xl rounded-tr-none max-w-[85%] text-on-surface">
                    <p>
                      Hello Sabrina! Yes, we have 2 pieces of the{" "}
                      <strong>Emerald Handloom Jamdani</strong> in stock at our Banani depot right
                      now.
                    </p>
                    <p className="mt-1">
                      For tomorrow evening delivery, our courier partner{" "}
                      <strong>Pathao Express</strong> will deliver before 5:00 PM. Delivery charge is
                      ৳120.
                    </p>

                    {/* Embedded checkout capsule */}
                    <div className="mt-space-sm bg-surface-container-lowest p-space-sm rounded-lg shadow-sm">
                      <div className="flex items-center justify-between pb-space-xs mb-space-xs">
                        <span className="font-bold text-[12px] text-on-surface">Order #MG-8942</span>
                        <span className="text-tertiary font-bold text-[11px] bg-tertiary/10 px-1.5 py-0.5 rounded">
                          Ready to dispatch
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-secondary mb-1">
                        <span>1x Emerald Handloom Jamdani</span>
                        <span className="font-bold text-on-surface">৳ 8,500</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-secondary mb-2">
                        <span>Express Pathao Delivery</span>
                        <span className="font-bold text-on-surface">৳ 120</span>
                      </div>
                      <div className="flex items-center justify-between pt-space-xs font-bold text-[12px] text-on-surface">
                        <span>Total Payable</span>
                        <span className="text-primary text-[14px]">৳ 8,620</span>
                      </div>
                      <div className="mt-space-sm flex gap-space-xs">
                        <button className="w-full bg-primary-container text-on-primary-container font-label-sm py-1 rounded text-[11px] font-bold flex items-center justify-center gap-1 shadow-sm">
                          <span className="material-symbols-outlined text-[13px]">qr_code</span>
                          Pay via bKash
                        </button>
                        <button className="w-full bg-surface-container text-on-surface font-label-sm py-1 rounded text-[11px] font-bold">
                          Confirm COD
                        </button>
                      </div>
                    </div>
                    <span className="text-[10px] text-secondary mt-1 text-right block">
                      11:04 PM • Answered in 4.2 seconds
                    </span>
                  </div>
                </div>

                <div className="text-center pt-space-xs">
                  <span className="font-label-sm text-[11px] text-tertiary bg-tertiary/10 px-space-md py-1 rounded-full">
                    Customer completed bKash payment • Pathao Consignment #PT-98124 Created
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/sections/LocalGlobal.jsx
const pillars = [
  {
    icon: "payments",
    iconClass: "bg-primary-container/20 text-primary",
    title: "Local Payment Rail",
    body: "Native integrations with Bangladesh's premier transaction networks. Deep automated audit prevents fraudulent claims.",
    rows: [
      { label: "bKash Merchant Direct", tag: "Instant Webhook", tagClass: "text-tertiary" },
      { label: "Nagad Escrow Gateway", tag: "Automated Matching", tagClass: "text-tertiary" },
      { label: "COD Ledger Reconciliation", tag: "100% Audit Proof", tagClass: "text-primary" },
    ],
  },
  {
    icon: "public",
    iconClass: "bg-tertiary/15 text-tertiary",
    title: "Global Treasury Rails",
    body: "Sell worldwide to non-resident diaspora and international buyers with dual BDT/USD multi-currency pricing and payouts.",
    rows: [
      { label: "Stripe Foreign FX", tag: "USD, EUR, GBP", tagClass: "text-tertiary" },
      { label: "Visa / Mastercard Global", tag: "3D Secure 2.0", tagClass: "text-tertiary" },
      { label: "Export Invoice & VAT Challan", tag: "NBR Form Compliant", tagClass: "text-secondary" },
    ],
  },
  {
    icon: "commute",
    iconClass: "bg-secondary/15 text-secondary",
    title: "Courier Fleet Ecosystem",
    body: "Native API connectivity with national parcel carriers and international air couriers for seamless single-click fulfillment.",
    rows: [
      { label: "Pathao Courier API", tag: "Instant Booking", tagClass: "text-tertiary" },
      { label: "Steadfast Logistics", tag: "Auto Barcode Sync", tagClass: "text-tertiary" },
      { label: "DHL Express Worldwide", tag: "Cross-Border Air", tagClass: "text-primary" },
    ],
  },
];
// =====================
//      LocalGlobal
// =====================

function LocalGlobal() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl lg:py-24 px-margin">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Dual-Engine Settlement
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mt-space-xs">
            Built for Bangladesh agility. Ready for international scale.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Switch effortlessly between domestic MFS protocols and cross-border multi-currency
            banking rails with zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {pillars.map((p) => (
            <div key={p.title} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className={`w-10 h-10 rounded-lg ${p.iconClass} flex items-center justify-center mb-space-md`}>
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                {p.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">{p.body}</p>
              <div className="space-y-space-xs">
                {p.rows.map((r) => (
                  <div
                    key={r.label}
                    className="p-space-xs bg-surface-container-low rounded flex items-center justify-between text-[12px]"
                  >
                    <span className="font-semibold text-on-surface">{r.label}</span>
                    <span className={`${r.tagClass} font-bold text-[10px]`}>{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/sections/Pricing.jsx
import { useState } from "react";

const PRICES = {
  bdt: {
    monthly: { core: "৳ 0", pro: "৳ 2,499", prem: "৳ 6,999" },
    yearly: { core: "৳ 0", pro: "৳ 1,999", prem: "৳ 5,599" },
  },
  usd: {
    monthly: { core: "$ 0", pro: "$ 29", prem: "$ 79" },
    yearly: { core: "$ 0", pro: "$ 22", prem: "$ 63" },
  },
};

const PERIOD_ACTIVE =
  "px-space-md py-1 rounded-md font-label-sm font-semibold bg-surface-container-lowest shadow-sm text-on-surface transition-all flex items-center gap-1";
const PERIOD_INACTIVE =
  "px-space-md py-1 rounded-md font-label-sm text-secondary hover:text-on-surface transition-all flex items-center gap-1";
const CURR_ACTIVE =
  "px-space-md py-1 rounded-md font-label-sm font-semibold bg-surface-container-lowest shadow-sm text-on-surface transition-all";
const CURR_INACTIVE =
  "px-space-md py-1 rounded-md font-label-sm text-secondary hover:text-on-surface transition-all";

function Check({ children, highlight }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`material-symbols-outlined ${highlight ? "text-primary" : "text-tertiary"} text-[18px]`}>
        {highlight ? "verified" : "check"}
      </span>
      <span className={highlight ? "font-semibold" : ""}>{children}</span>
    </div>
  );
}

//  ======================
//      Pricing
// =======================
function Pricing() {
  const [period, setPeriod] = useState("monthly");
  const [currency, setCurrency] = useState("bdt");

  const data = PRICES[currency][period];

  return (
    <section className="w-full px-margin py-space-xl lg:py-24" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Transparent Investment
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mt-space-xs">
            Predictable plans for ambitious retail institutions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Scale effortlessly from initial proof-of-concept to hundreds of daily multi-channel
            parcels.
          </p>

          <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md">
            {/* Billing cycle toggle */}
            <div className="bg-surface-container p-1 rounded-lg inline-flex items-center">
              <button
                onClick={() => setPeriod("monthly")}
                className={period === "monthly" ? PERIOD_ACTIVE : PERIOD_INACTIVE}
              >
                Monthly
              </button>
              <button
                onClick={() => setPeriod("yearly")}
                className={period === "yearly" ? PERIOD_ACTIVE : PERIOD_INACTIVE}
              >
                Yearly{" "}
                <span className="bg-tertiary/15 text-tertiary text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Currency toggle */}
            <div className="bg-surface-container p-1 rounded-lg inline-flex items-center">
              <button
                onClick={() => setCurrency("bdt")}
                className={currency === "bdt" ? CURR_ACTIVE : CURR_INACTIVE}
              >
                ৳ BDT
              </button>
              <button
                onClick={() => setCurrency("usd")}
                className={currency === "usd" ? CURR_ACTIVE : CURR_INACTIVE}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
          {/* Free */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                  Free (Core)
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Ideal for newly launched boutique stores testing live social selling.
              </p>
              <div className="mb-space-lg">
                <span className="font-display-lg text-display-lg font-bold text-on-surface font-serif">
                  {data.core}
                </span>
                <span className="text-secondary text-body-md">/month</span>
              </div>
              <div className="space-y-space-sm font-body-md text-body-md text-on-surface">
                <Check>Up to 100 orders per month</Check>
                <Check>1 Facebook Page Connection</Check>
                <Check>Basic Unified Inbox (FB Messenger)</Check>
                <Check>Manual waybill creation</Check>
                <div className="flex items-center gap-2 text-secondary opacity-60">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                  <span>No Genie AI Autonomous agent</span>
                </div>
              </div>
            </div>
            <div className="mt-space-xl">
              <button className="w-full bg-surface-container-high text-on-surface font-label-md text-label-md py-space-sm rounded-lg hover:bg-surface-container transition-colors">
                Get Started Free
              </button>
            </div>
          </div>

          {/* Pro */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wider">
                  Pro Velocity
                </span>
                <span className="bg-surface-container text-secondary font-label-sm px-2 py-0.5 rounded">
                  Growing Brands
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                For expanding digital merchants with active daily order volume.
              </p>
              <div className="mb-space-lg">
                <span className="font-display-lg text-display-lg font-bold text-on-surface font-serif">
                  {data.pro}
                </span>
                <span className="text-secondary text-body-md">/month</span>
              </div>
              <div className="space-y-space-sm font-body-md text-body-md text-on-surface">
                <Check>Up to 1,500 orders per month</Check>
                <Check>3 Connected Storefronts (Shopify / FB / Daraz)</Check>
                <Check>Automated Pathao &amp; Steadfast booking</Check>
                <Check>Automated SMS customer tracking</Check>
                <Check>Standard Genie AI Chat Assistant (1,000 runs)</Check>
              </div>
            </div>
            <div className="mt-space-xl">
              <button className="w-full bg-surface-container-high text-on-surface font-label-md text-label-md py-space-sm rounded-lg hover:bg-surface-container transition-colors">
                Upgrade to Pro
              </button>
            </div>
          </div>

          {/* Premium */}
          <div
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-xl relative flex flex-col justify-between"
            style={{ boxShadow: "0 10px 30px rgba(201,162,75,0.18)" }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container font-label-sm text-[11px] font-bold px-space-md py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">auto_awesome</span>
              Most Popular Enterprise Tier
            </div>
            <div>
              <div className="flex items-center justify-between mb-space-sm mt-1">
                <span className="font-label-md text-label-md font-bold text-primary uppercase tracking-wider">
                  Premium Autonomous
                </span>
                <span className="bg-primary-fixed/40 text-on-primary-fixed font-label-sm px-2 py-0.5 rounded font-semibold">
                  Flagship
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                Unlimited autonomous scale for multi-store retail leaders.
              </p>
              <div className="mb-space-lg">
                <span className="font-display-lg text-display-lg font-bold text-on-surface font-serif">
                  {data.prem}
                </span>
                <span className="text-secondary text-body-md">/month</span>
              </div>
              <div className="space-y-space-sm font-body-md text-body-md text-on-surface">
                <Check highlight>Unlimited orders &amp; storefront connections</Check>
                <Check highlight>Full Genie AI Agent (24/7 Autocheckout)</Check>
                <Check highlight>Multi-Warehouse Banani/Chittagong sync</Check>
                <Check highlight>bKash &amp; COD automatic ledger reconciliation</Check>
                <Check highlight>Automated VAT Challan (Mushak 6.3) generator</Check>
                <Check highlight>Dedicated Enterprise Account Director</Check>
              </div>
            </div>
            <div className="mt-space-xl">
              <button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-space-sm rounded-lg shadow-[0_4px_14px_rgba(201,162,75,0.3)] hover:shadow-[0_6px_20px_rgba(201,162,75,0.45)] transition-all font-bold">
                Start 14-Day Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/sections/Testimonials.jsx
const testimonials = [
  {
    quote:
      "Genie AI automated 65% of our late-night Messenger orders. Our returns dropped by 22% with automated address validation and customer confirmation.",
    initials: "TA",
    avatarClass: "bg-primary-fixed text-on-primary-fixed",
    name: "Tahsin Ahmed",
    role: "Founder, Artisan Heritage Dhaka",
  },
  {
    quote:
      "Handling Daraz and Shopify used to take 4 staff members full-time. Now MerchantGenie synchronizes our inventory and Pathao bookings in minutes.",
    initials: "NJ",
    avatarClass: "bg-secondary-fixed text-on-secondary-fixed",
    name: "Nusrat Jahan",
    role: "COO, Luxe Botanicals",
  },
  {
    quote:
      "The real-time BDT and USD dual reconciliation made managing Bangladesh artisan exports flawless. Payouts arrive directly into our foreign treasury.",
    initials: "MV",
    avatarClass: "bg-tertiary-fixed text-on-tertiary-fixed",
    name: "Marcus Vance",
    role: "Managing Partner, SilkRoad Gems (London)",
  },
];

function Stars() {
  return (
    <div className="flex text-primary mb-space-sm">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[18px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="w-full bg-surface-container py-space-xl lg:py-24 px-margin">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Merchant Voices
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mt-space-xs">
            Trusted by pioneering founders across Dhaka and global fashion hubs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between"
            >
              <div>
                <Stars />
                <p className="font-body-md text-body-md text-on-surface italic mb-space-lg">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-space-sm pt-space-md">
                <div className={`w-10 h-10 rounded-full ${t.avatarClass} flex items-center justify-center font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-title-md text-label-md text-on-surface font-bold">{t.name}</h4>
                  <p className="font-label-sm text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// src/sections/FAQ.jsx
// import { useState } from "react";

const faqs = [
  {
    q: "How does the bKash and COD reconciliation work?",
    a: "MerchantGenie syncs directly with bKash Merchant APIs and your courier accounts (Pathao, Steadfast, etc.). When a customer pays or when the courier collects Cash on Delivery (COD), our automated reconciliation engine matches transaction IDs, order numbers, and settlement amounts against your master ledger—instantly flagging any discrepancies.",
  },
  {
    q: "Can Genie AI answer in Banglish and Bengali accurately?",
    a: 'Yes! Genie AI is specifically trained on colloquial Bengali, English, and romanized Banglish ("bhai eta ki Banani te pabo?"). It parses nuances, typos, and informal phrasing effortlessly while replying professionally in the customer\'s preferred dialect.',
  },
  {
    q: "Which courier fleets are supported out of the box?",
    a: "Out-of-the-box integrations include Pathao Courier, Steadfast Logistics, RedX, eCourier, and Paperfly for domestic deliveries, as well as DHL Express and FedEx for international cross-border dispatches. You can connect your existing merchant credentials in under two minutes.",
  },
  {
    q: "Is there any setup fee or long-term contract?",
    a: "Zero setup fees. All MerchantGenie subscriptions are month-to-month or discounted yearly. You can upgrade, downgrade, or cancel your subscription at any time directly inside the billing portal without penalty.",
  },
  {
    q: "How safe is our customer data and store inventory?",
    a: "MerchantGenie complies with PCI-DSS Level 1 specifications and ISO 27001 data governance standards. We utilize AES-256 bank-grade encryption at rest and TLS 1.3 in transit. Your customer databases are isolated in dedicated multi-tenant clusters.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="w-full px-margin py-space-xl lg:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
            Inquiries &amp; Assurance
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-serif mt-space-xs">
            Frequently Answered Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            Everything you need to know about setting up MerchantGenie and automating your
            operations.
          </p>
        </div>

        <div className="space-y-space-md">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                onClick={() => toggle(i)}
                className="bg-surface-container-low rounded-xl p-space-md cursor-pointer transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                    {faq.q}
                  </h3>
                  <span
                    className="material-symbols-outlined text-primary transition-transform"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    expand_more
                  </span>
                </div>
                {isOpen && (
                  <div className="pt-space-sm text-on-surface-variant font-body-md">{faq.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// src/sections/FinalCTA.jsx
function FinalCTA() {
  return (
    <section className="w-full px-margin pb-space-xl lg:pb-24">
      <div className="max-w-6xl mx-auto bg-on-secondary-fixed text-surface rounded-2xl p-space-lg lg:p-space-xl relative overflow-hidden shadow-2xl">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl relative z-10">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed mb-space-sm inline-block">
            Institutional Agility
          </span>
          <h2 className="font-headline-lg text-display-lg-mobile lg:text-display-lg font-serif mb-space-md text-surface">
            Ready to put your online business on autopilot?
          </h2>
          <p className="font-body-lg text-body-lg text-secondary-fixed mb-space-xl">
            Join thousands of merchants scaling effortlessly across local and global markets today.
            Setup takes less than 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-md mb-space-lg">
            <a
              className="w-full sm:w-auto bg-primary-container text-on-primary-container font-label-md text-label-md px-space-xl py-space-md rounded-lg shadow-[0_4px_18px_rgba(201,162,75,0.4)] hover:shadow-[0_6px_22px_rgba(201,162,75,0.6)] transition-all flex items-center justify-center gap-space-xs font-bold"
              href="#pricing"
            >
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span>Get Started Free (No Credit Card)</span>
            </a>
            <a
              className="w-full sm:w-auto bg-surface/10 text-surface font-label-md text-label-md px-space-lg py-space-md rounded-lg hover:bg-surface/20 transition-all flex items-center justify-center gap-space-xs"
              href="#demo"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Book an Executive Demo</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-secondary-fixed-dim">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">verified</span>
              14-day free trial
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">lock_reset</span>
              Cancel anytime
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">headset_mic</span>
              24/7 Priority support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
      <div className="flex flex-col w-full">
        <Hero />
        <LogoStrip />
        <Steps />
        <Features />
        <GenieSpotlight />
        <LocalGlobal />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </div>
    </main>
  );
}
// src/sections/Hero.jsx