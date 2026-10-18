// src/pages/dashboard/Channels.jsx
import { useState } from "react";

const AVAILABLE_CHANNELS = [
  { id: "fb", name: "Facebook Page", icon: "chat", color: "text-[#1877F2]", bg: "bg-[#1877F2]/10", desc: "Connect your Facebook Shop and Messenger for automated order capture." },
  { id: "ig", name: "Instagram", icon: "photo_camera", color: "text-[#E1306C]", bg: "bg-[#E1306C]/10", desc: "Sync Instagram DMs, story replies, and shopping tags." },
  { id: "web", name: "Website / Shopify", icon: "language", color: "text-tertiary", bg: "bg-tertiary/10", desc: "Embed our checkout or connect your existing Shopify/WooCommerce store." },
  { id: "daraz", name: "Daraz Mall", icon: "storefront", color: "text-error", bg: "bg-error/10", desc: "Sync inventory and orders directly with your Daraz seller account." },
  { id: "wa", name: "WhatsApp Business", icon: "forum", color: "text-[#25D366]", bg: "bg-[#25D366]/10", desc: "Manage customer queries and send bKash payment links via WhatsApp." },
];

export default function Channels() {
  const [connected, setConnected] = useState([]);

  const handleConnect = (id) => {
    // Simulate an OAuth flow / API connection
    setConnected((prev) => [...prev, id]);
  };

  return (
    <div className="max-w-[1200px] mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-secondary font-medium mb-1">
            <span>STOREFRONT ECOSYSTEM</span>
            <span>•</span>
            <span>MULTI-CHANNEL SYNC HUB</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg font-serif text-on-surface">
            Channels & Storefront Operations
          </h1>
          <p className="text-secondary text-sm mt-1">
            Manage synchronized social commerce pages, custom digital storefronts, and live infrastructure telemetry.
          </p>
        </div>
        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:shadow-md transition font-semibold">
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add Custom Channel
        </button>
      </div>

      {/* Connection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AVAILABLE_CHANNELS.map((channel) => {
          const isConnected = connected.includes(channel.id);
          return (
            <div
              key={channel.id}
              className={`bg-surface-container-lowest p-5 rounded-xl border transition-all ${
                isConnected ? "border-tertiary shadow-[0_4px_20px_rgba(0,108,73,0.1)]" : "border-outline-variant hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${channel.bg} ${channel.color} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[24px]">{channel.icon}</span>
                </div>
                {isConnected ? (
                  <span className="flex items-center gap-1 text-xs font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Connected
                  </span>
                ) : (
                  <span className="text-xs font-medium text-secondary bg-surface-container px-2 py-1 rounded-full">
                    Not Connected
                  </span>
                )}
              </div>
              
              <h3 className="font-title-md text-title-md font-bold text-on-surface mb-1">
                {channel.name}
              </h3>
              <p className="text-sm text-secondary mb-6 line-clamp-2">
                {channel.desc}
              </p>

              {isConnected ? (
                <div className="flex gap-2">
                  <button className="flex-1 bg-surface-container-low text-on-surface font-label-md py-2 rounded-lg border border-outline-variant hover:bg-surface-container transition">
                    Manage Settings
                  </button>
                  <button className="px-3 py-2 text-error bg-error/10 rounded-lg hover:bg-error/20 transition">
                    <span className="material-symbols-outlined text-[18px]">link_off</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleConnect(channel.id)}
                  className="w-full bg-on-surface text-surface font-label-md py-2 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">link</span>
                  Connect {channel.name.split(' ')[0]}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Connected Channels Status (Only shows if at least one is connected) */}
      {connected.length > 0 && (
        <div className="mt-8 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm">
          <h2 className="font-headline-sm text-headline-sm font-serif text-on-surface mb-4">Active Storefront Health & Edge Telemetry</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
              <p className="text-[11px] font-bold text-secondary uppercase mb-1">Service Uptime</p>
              <p className="text-2xl font-bold text-tertiary">99.98%</p>
              <p className="text-xs text-secondary mt-1">Zero unscheduled outages</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
              <p className="text-[11px] font-bold text-secondary uppercase mb-1">Avg Latency</p>
              <p className="text-2xl font-bold text-on-surface">240 ms</p>
              <p className="text-xs text-tertiary mt-1">-18ms faster than baseline</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
              <p className="text-[11px] font-bold text-secondary uppercase mb-1">Historical Anomaly</p>
              <p className="text-2xl font-bold text-on-surface">12 days ago</p>
              <p className="text-xs text-secondary mt-1">Scheduled CDN edge refresh</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant relative overflow-hidden">
              <p className="text-[11px] font-bold text-secondary uppercase mb-1">Escalation Node</p>
              <p className="text-sm font-bold text-on-surface mt-2">+880 1711 •••• 92</p>
              <p className="text-xs text-tertiary mt-1">SMS & Webhook alerts operational</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}