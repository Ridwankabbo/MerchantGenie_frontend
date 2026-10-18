// src/layouts/DashboardLayout.jsx
import { Link, Outlet, useLocation } from "react-router-dom";

const MENU_GROUPS = [
  {
    title: "CORE",
    items: [
      { name: "Dashboard", icon: "dashboard", path: "/dashboard" },
      { name: "Inbox", icon: "inbox", badge: "14", path: "/dashboard/inbox" },
      { name: "Orders", icon: "receipt_long", badge: "42", path: "/dashboard/orders" },
      { name: "Channels", icon: "hub", path: "/dashboard/channels" },
    ],
  },
  {
    title: "PREMIUM",
    items: [
      { name: "Genie AI Agent", icon: "auto_awesome", badge: "AUTO", badgeColor: "text-primary", path: "/dashboard/genie" },
      { name: "Inventory & Depots", icon: "inventory_2", path: "/dashboard/inventory" },
      { name: "Customers (CRM)", icon: "group", path: "/dashboard/customers" },
      { name: "Invoices & Mushak", icon: "description", badge: "NBR 6.3", path: "/dashboard/invoices" },
      { name: "Team & Access", icon: "admin_panel_settings", path: "/dashboard/team" },
    ],
  },
];

export default function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-surface overflow-hidden font-body-md">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col justify-between shrink-0">
        <div>
          {/* Logo */}
          <div className="h-16 flex items-center px-4 border-b border-white/10">
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[24px]">payments</span>
              <div>
                <span className="font-headline-sm font-semibold text-white block leading-tight">
                  MerchantGenie
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block leading-tight">
                  Private Enterprise
                </span>
              </div>
            </Link>
          </div>

          {/* Store Selector */}
          <div className="p-4 border-b border-white/10">
            <button className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 transition p-2 rounded-lg text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-primary/20 text-primary flex items-center justify-center font-bold">
                  D
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dhaka Artisan Guild</p>
                  <p className="text-[10px] text-gray-400">ID: DAG-71084</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[16px] text-gray-400">unfold_more</span>
            </button>
          </div>

          {/* Navigation */}
          <div className="px-3 py-4 overflow-y-auto custom-scrollbar h-[calc(100vh-250px)]">
            {MENU_GROUPS.map((group) => (
              <div key={group.title} className="mb-6">
                <p className="px-3 text-[10px] font-bold text-gray-500 tracking-wider mb-2">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className={`flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-primary text-on-primary font-semibold shadow-sm"
                              : "text-gray-300 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">
                              {item.icon}
                            </span>
                            <span className="text-sm">{item.name}</span>
                          </div>
                          {item.badge && (
                            <span
                              className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                                isActive
                                  ? "bg-black/20 text-white"
                                  : item.badgeColor
                                  ? item.badgeColor
                                  : "bg-gray-700 text-gray-300"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Status */}
        <div className="p-4 border-t border-white/10 bg-black/20">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase">Plan Status</span>
            <a href="#" className="text-[10px] text-primary hover:underline">Upgrade</a>
          </div>
          <div className="flex items-center gap-2 text-sm text-white font-medium">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Free Tier — Dhaka Hub
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4 w-1/2">
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder="Search orders, customers, SKUs, or..."
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary transition"
              />
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <button className="px-3 py-1.5 bg-surface-container rounded text-sm font-medium border border-outline-variant">
                BDT ৳ <span className="text-secondary ml-1">USD $</span>
              </button>
              <span className="flex items-center gap-1 text-xs font-medium text-tertiary bg-tertiary/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[14px]">verified_user</span>
                BD (NBR Compliant)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-secondary hover:text-on-surface transition">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-on-surface leading-tight">Samira Khan</p>
                <p className="text-[11px] text-secondary">Managing Director</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                SK
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-surface p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}