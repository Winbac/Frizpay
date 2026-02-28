import { useState } from "react";

const tabs = ["Profile", "Security", "Notifications", "Appearance", "Billing"];

function Toggle({ on, onChange }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className={`w-10 h-5 rounded-full relative transition-colors duration-200 ${on ? "bg-primary" : "bg-base-300 border border-base-300"}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${on ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  );
}

function Field({ label, defaultValue, type = "text" }) {
  return (
    <div>
      <label className="text-base-content/50 text-xs mb-1 block">{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        className="w-full bg-base-300 border border-base-300 rounded-xl px-3 py-2.5 text-sm text-base-content/60 outline-none focus:border-primary transition-colors placeholder:text-base-content/50"
      />
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [saved, setSaved] = useState(false);

  // Notification toggles
  const [notifs, setNotifs] = useState({
    emailTransactions: true,
    emailMarketing: false,
    pushTransactions: true,
    pushSecurity: true,
    pushMarketing: false,
    smsAlerts: true,
  });

  // Appearance
  const [theme, setTheme] = useState("Dark");
  const [accent, setAccent] = useState("#5ECC5E");
  const [compact, setCompact] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="p-6 animate-fade-up space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-base-content/60 font-bold text-xl">Settings</h2>
        <p className="text-base-content/50 text-sm mt-0.5">
          Manage your account preferences
        </p>
      </div>

      <div className="flex gap-5">
        {/* Sidebar Tabs */}
        <div className="w-44 flex-shrink-0 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "text-base-content/50 hover:bg-base-300 hover:text-base-content/60"
                }`}
            >
              {tab}
            </button>
          ))}
          <div className="pt-4 border-t border-base-300 mt-4">
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 transition-all">
              Sign Out
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 bg-base-200 rounded-2xl p-6 border border-base-300">
          {/* ── PROFILE ─────────────────────────────── */}
          {activeTab === "Profile" && (
            <div className="space-y-5">
              <h3 className="text-base-content/60 font-semibold">
                Profile Information
              </h3>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-2xl font-bold text-base-content/60 relative">
                  C
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-base-300 border border-base-300 rounded-full flex items-center justify-center hover:bg-border-dark transition-colors">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9CA3AF"
                      strokeWidth="2.5"
                    >
                      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="text-base-content/60 font-semibold">
                    Chandan Singh
                  </p>
                  <p className="text-base-content/50 text-xs">
                    Admin • Member since Jan 2024
                  </p>
                  <button className="text-primary text-xs mt-1 hover:underline">
                    Change Photo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Field label="First Name" defaultValue="Chandan" />
                <Field label="Last Name" defaultValue="Singh" />
                <Field
                  label="Email Address"
                  defaultValue="chandan@frizpay.com"
                  type="email"
                />
                <Field
                  label="Phone Number"
                  defaultValue="+1 (555) 000-0192"
                  type="tel"
                />
                <Field
                  label="Date of Birth"
                  defaultValue="1995-06-15"
                  type="date"
                />
                <div>
                  <label className="text-base-content/50 text-xs mb-1 block">
                    Country
                  </label>
                  <select className="w-full bg-base-300 border border-base-300 rounded-xl px-3 py-2.5 text-sm text-base-content/60 outline-none focus:border-primary">
                    <option>United States</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                </div>
              </div>
              <Field
                label="Bio"
                defaultValue="Finance enthusiast and early Frizpay adopter."
              />
            </div>
          )}

          {/* ── SECURITY ─────────────────────────────── */}
          {activeTab === "Security" && (
            <div className="space-y-5">
              <h3 className="text-base-content/60 font-semibold">
                Security Settings
              </h3>
              <div className="space-y-4">
                {/* Change Password */}
                <div className="p-4 rounded-xl bg-base-300 border border-base-300 space-y-3">
                  <p className="text-base-content/60 text-sm font-semibold">
                    Change Password
                  </p>
                  <Field
                    label="Current Password"
                    defaultValue=""
                    type="password"
                  />
                  <Field label="New Password" defaultValue="" type="password" />
                  <Field
                    label="Confirm Password"
                    defaultValue=""
                    type="password"
                  />
                  <div className="h-1.5 rounded-full bg-base-200">
                    <div
                      className="h-1.5 rounded-full bg-primary"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <p className="text-base-content/50 text-[10px]">
                    Password strength: Good
                  </p>
                  <button className="px-4 py-2 bg-primary text-base-content/60 rounded-xl text-xs font-semibold hover:bg-primary-dark transition-colors">
                    Update Password
                  </button>
                </div>

                {/* 2FA + Session */}
                {[
                  {
                    label: "2-Factor Authentication",
                    sub: "Add an extra layer of security via SMS or authenticator app",
                    btn: "Enable 2FA",
                    color: "text-primary",
                  },
                  {
                    label: "Active Sessions",
                    sub: "2 active sessions — last login: Chrome on Windows, Apr 24",
                    btn: "View Sessions",
                    color: "text-base-content/60",
                  },
                  {
                    label: "Trusted Devices",
                    sub: "1 trusted device — MacBook Pro",
                    btn: "Manage Devices",
                    color: "text-base-content/60",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 rounded-xl bg-base-300 border border-base-300"
                  >
                    <div>
                      <p className="text-base-content/60 text-sm font-semibold">
                        {item.label}
                      </p>
                      <p className="text-base-content/50 text-[10px] mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                    <button
                      className={`text-xs font-semibold ${item.color} hover:underline whitespace-nowrap ml-4`}
                    >
                      {item.btn}
                    </button>
                  </div>
                ))}

                {/* Danger Zone */}
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                  <p className="text-red-400 font-semibold text-sm mb-1">
                    Danger Zone
                  </p>
                  <p className="text-base-content/50 text-xs mb-3">
                    Permanently delete your account and all associated data.
                  </p>
                  <button className="px-4 py-2 border border-red-500/40 text-red-400 rounded-xl text-xs font-semibold hover:bg-red-500/10 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── NOTIFICATIONS ─────────────────────────── */}
          {activeTab === "Notifications" && (
            <div className="space-y-5">
              <h3 className="text-base-content/60 font-semibold">
                Notification Preferences
              </h3>
              {[
                {
                  section: "Email Notifications",
                  items: [
                    {
                      key: "emailTransactions",
                      label: "Transaction Alerts",
                      sub: "Get notified for every debit/credit",
                    },
                    {
                      key: "emailMarketing",
                      label: "Marketing & Promotions",
                      sub: "Tips, offers and product updates",
                    },
                  ],
                },
                {
                  section: "Push Notifications",
                  items: [
                    {
                      key: "pushTransactions",
                      label: "Transaction Alerts",
                      sub: "Real-time push for every transaction",
                    },
                    {
                      key: "pushSecurity",
                      label: "Security Alerts",
                      sub: "Login attempts and password changes",
                    },
                    {
                      key: "pushMarketing",
                      label: "Promotions",
                      sub: "Special offers and news",
                    },
                  ],
                },
                {
                  section: "SMS Notifications",
                  items: [
                    {
                      key: "smsAlerts",
                      label: "SMS Alerts",
                      sub: "Critical alerts via text message",
                    },
                  ],
                },
              ].map((group) => (
                <div
                  key={group.section}
                  className="bg-base-300 rounded-xl p-4 border border-base-300 space-y-4"
                >
                  <p className="text-base-content/60 text-xs font-semibold uppercase tracking-wider">
                    {group.section}
                  </p>
                  {group.items.map((item) => (
                    <div
                      key={item.key}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-base-content/60 text-sm font-medium">
                          {item.label}
                        </p>
                        <p className="text-base-content/50 text-[10px]">
                          {item.sub}
                        </p>
                      </div>
                      <Toggle
                        on={notifs[item.key]}
                        onChange={(v) =>
                          setNotifs((prev) => ({ ...prev, [item.key]: v }))
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* ── APPEARANCE ─────────────────────────────── */}
          {activeTab === "Appearance" && (
            <div className="space-y-5">
              <h3 className="text-base-content/60 font-semibold">Appearance</h3>

              {/* Theme */}
              <div>
                <p className="text-base-content/50 text-xs mb-2">Theme</p>
                <div className="flex gap-3">
                  {["Dark", "Light", "System"].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all
                        ${theme === t ? "border-primary bg-primary/10 text-primary" : "border-base-300 text-base-content/50 hover:text-base-content/60 hover:border-text-muted"}`}
                    >
                      {t === "Dark" ? "🌙" : t === "Light" ? "☀️" : "💻"} {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accent Color */}
              <div>
                <p className="text-base-content/50 text-xs mb-2">
                  Accent Color
                </p>
                <div className="flex gap-3">
                  {[
                    "#5ECC5E",
                    "#3B82F6",
                    "#8B5CF6",
                    "#F59E0B",
                    "#EC4899",
                    "#06B6D4",
                  ].map((c) => (
                    <button
                      key={c}
                      onClick={() => setAccent(c)}
                      className={`w-9 h-9 rounded-full transition-all ${accent === c ? "ring-2 ring-offset-2 ring-offset-bg-card scale-110" : "hover:scale-105"}`}
                      style={{ backgroundColor: c, ringColor: c }}
                    />
                  ))}
                </div>
              </div>

              {/* Language + Compact */}
              <div>
                <label className="text-base-content/50 text-xs mb-1 block">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full bg-base-300 border border-base-300 rounded-xl px-3 py-2.5 text-sm text-base-content/60 outline-none focus:border-primary"
                >
                  {[
                    "English",
                    "Spanish",
                    "French",
                    "German",
                    "Hindi",
                    "Japanese",
                  ].map((l) => (
                    <option key={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl bg-base-300 border border-base-300">
                <div>
                  <p className="text-base-content/60 text-sm font-medium">
                    Compact Mode
                  </p>
                  <p className="text-base-content/50 text-[10px]">
                    Reduce spacing for a denser layout
                  </p>
                </div>
                <Toggle on={compact} onChange={setCompact} />
              </div>
            </div>
          )}

          {/* ── BILLING ─────────────────────────────── */}
          {activeTab === "Billing" && (
            <div className="space-y-5 space-x--5">
              <h3 className="text-base-content/60 font-semibold">
                Billing & Subscription
              </h3>

              {/* Plan */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    plan: "Standard",
                    price: "Free",
                    features: [
                      "5 Virtual Cards",
                      "$10K Daily Limit",
                      "Email Support",
                    ],
                    current: true,
                  },
                  {
                    plan: "Pro",
                    price: "$9/mo",
                    features: [
                      "Unlimited Cards",
                      "$50K Daily Limit",
                      "24/7 Priority Support",
                    ],
                    current: false,
                  },
                ].map((p) => (
                  <div
                    key={p.plan}
                    className={`p-5 rounded-2xl border transition-all ${p.current ? "border-primary bg-primary/5" : "border-base-300 hover:border-primary/30"}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-base-content/60 font-bold">
                          {p.plan}
                        </p>
                        <p className="text-primary font-bold text-xl mt-0.5">
                          {p.price}
                        </p>
                      </div>
                      {p.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/20 text-primary">
                          Current
                        </span>
                      )}
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-xs text-base-content/60"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#5ECC5E"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {!p.current && (
                      <button className="w-full py-2 bg-primary text-base-content/60 rounded-xl text-xs font-semibold hover:bg-primary-dark transition-colors">
                        Upgrade to Pro
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Payment Method */}
              <div className="p-4 rounded-xl bg-base-300 border border-base-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base-content/60 text-sm font-semibold">
                      Payment Method
                    </p>
                    <p className="text-base-content/50 text-xs mt-0.5">
                      Mastercard ending in 0124
                    </p>
                  </div>
                  <button className="text-primary text-xs font-medium hover:underline">
                    Update
                  </button>
                </div>
              </div>

              {/* Billing History */}
              <div>
                <p className="text-base-content/60 text-xs font-semibold uppercase tracking-wider mb-3">
                  Billing History
                </p>
                <div className="space-y-2">
                  {[
                    {
                      date: "Mar 1, 2024",
                      desc: "Standard Plan",
                      amount: "Free",
                    },
                    {
                      date: "Feb 1, 2024",
                      desc: "Standard Plan",
                      amount: "Free",
                    },
                  ].map((b, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center py-2.5 px-3 rounded-xl hover:bg-base-300 transition-colors"
                    >
                      <div>
                        <p className="text-base-content/60 text-xs font-medium">
                          {b.desc}
                        </p>
                        <p className="text-base-content/50 text-[10px]">
                          {b.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-base-content/60 text-xs font-bold">
                          {b.amount}
                        </span>
                        <button className="text-base-content/50 hover:text-primary transition-colors">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Save Button (shown for Profile, Notifications, Appearance) */}
          {["Profile", "Notifications", "Appearance"].includes(activeTab) && (
            <div className="mt-6 flex justify-end gap-3 pt-5 border-t border-base-300">
              <button className="px-5 py-2.5 rounded-xl border border-base-300 text-base-content/60 text-sm hover:bg-base-300 transition-colors">
                Cancel
              </button>
              <button
                onClick={handleSave}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${saved ? "bg-primary/20 text-primary border border-primary/30" : "bg-primary text-base-content/60 hover:bg-primary-dark"}`}
              >
                {saved ? "✓ Saved!" : "Save Changes"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
