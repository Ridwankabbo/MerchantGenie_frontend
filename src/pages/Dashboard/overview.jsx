// src/pages/dashboard/Overview.jsx
export default function DashboardOverview() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-secondary font-medium mb-1">
            <span>EXECUTIVE PORTFOLIO OVERVIEW</span>
            <span>•</span>
            <span>Wednesday, 24 October 2025</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg font-serif text-on-surface flex items-center gap-3">
            Good morning, Samira
            <span className="material-symbols-outlined text-[24px] text-primary">waving_hand</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="bg-surface-container-lowest border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container transition">
            <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            Bulk Dispatch
          </button>
          <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:shadow-md transition font-semibold">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            Ask Genie AI
          </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Today's Revenue", value: "৳ 184,500", sub: "($1,540)", trend: "+18.4%", trendUp: true },
          { label: "New Orders", value: "42", sub: "12 waiting for fulfillment", trend: "Realtime", trendUp: true, badge: "42" },
          { label: "Pending Deliveries", value: "19", sub: "Pathao Express • 12\nSteadfast • 7", trend: "3:30 PM", trendUp: false, icon: "schedule" },
          { label: "Unread Messages", value: "14", sub: "9 Messenger • 4 Insta", trend: "3 Urgent", trendUp: false, badge: "14", isAlert: true },
        ].map((kpi, i) => (
          <div key={i} className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm relative overflow-hidden">
            <p className="text-[11px] font-bold text-secondary uppercase tracking-wider mb-2">{kpi.label}</p>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface">{kpi.value}</h3>
                <p className="text-xs text-secondary mt-1 whitespace-pre-line">{kpi.sub}</p>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded ${kpi.trendUp ? "bg-tertiary/10 text-tertiary" : "bg-surface-container text-secondary"}`}>
                  {kpi.icon && <span className="material-symbols-outlined text-[14px]">{kpi.icon}</span>}
                  {kpi.trend}
                </span>
                {kpi.isAlert && (
                  <div className="mt-2 text-[10px] font-bold bg-error/10 text-error px-2 py-0.5 rounded text-center">
                    3 Urgent Triage
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">Performance Ledger</p>
              <h2 className="font-headline-sm text-headline-sm font-serif text-on-surface">Revenue & Cash Flow Analytics</h2>
            </div>
            <div className="flex gap-1 bg-surface-container-low p-1 rounded-lg">
              {["7D", "30D", "90D"].map((t, i) => (
                <button key={t} className={`px-3 py-1 text-xs font-medium rounded ${i === 1 ? "bg-surface-container-lowest shadow-sm text-on-surface" : "text-secondary hover:text-on-surface"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          {/* Mock Chart Area */}
          <div className="h-64 w-full bg-surface-container-low rounded-lg relative overflow-hidden flex items-end">
             {/* Decorative mock graph line */}
             <svg className="w-full h-full absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
               <path d="M0,80 Q 20,70 30,50 T 60,30 T 80,40 T 100,10 L 100,100 L 0,100 Z" fill="url(#gradient)" opacity="0.2"/>
               <path d="M0,80 Q 20,70 30,50 T 60,30 T 80,40 T 100,10" fill="none" stroke="#c9a24b" strokeWidth="2"/>
               <defs>
                 <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                   <stop offset="0%" stopColor="#c9a24b"/>
                   <stop offset="100%" stopColor="transparent"/>
                 </linearGradient>
               </defs>
             </svg>
             <div className="absolute top-4 right-10 bg-on-surface text-surface text-xs px-3 py-1 rounded shadow-lg font-bold flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-primary-fixed"></span>
               FESTIVE PEAK SURGE • ৳348,290
             </div>
          </div>
          <div className="flex justify-between mt-4 text-xs text-secondary font-medium">
            <span>Oct 01</span>
            <span>Oct 07</span>
            <span>Oct 14 (Festival)</span>
            <span>Oct 21</span>
            <span>Oct 24 (Today)</span>
          </div>
        </div>

        {/* Distribution Chart */}
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">Distribution</p>
            <span className="material-symbols-outlined text-secondary">more_horiz</span>
          </div>
          <h2 className="font-headline-sm text-headline-sm font-serif text-on-surface mb-4">Sales by Channel</h2>
          
          <div className="flex-1 flex flex-col items-center justify-center py-4">
            {/* Mock Donut Chart */}
            <div className="w-40 h-40 rounded-full border-[12px] border-primary-container border-t-tertiary border-r-secondary relative flex flex-col items-center justify-center shadow-inner">
              <span className="text-[10px] text-secondary uppercase font-bold tracking-wider">Total Today</span>
              <span className="font-headline-md font-bold text-on-surface">৳184.5K</span>
              <span className="text-[10px] text-tertiary">4 Channels</span>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            {[
              { label: "FB Messenger & Shop", val: "38%", amount: "৳69,800", color: "bg-tertiary" },
              { label: "Daraz Mall", val: "28%", amount: "৳51,600", color: "bg-primary-container" },
              { label: "Shopify Global", val: "22%", amount: "৳40,500", color: "bg-surface-container-highest" },
              { label: "Instagram", val: "12%", amount: "৳22,600", color: "bg-secondary" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                  <span className="text-on-surface">{item.label}</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <span className="font-bold text-on-surface">{item.amount}</span>
                  <span className="text-xs w-8 text-right">{item.val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}