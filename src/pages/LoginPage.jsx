import { useState } from "react";

const FrizpayLogo = () => (
  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="1" width="8" height="8" rx="2" fill="#5ECC5E" />
    <rect
      x="11"
      y="1"
      width="8"
      height="8"
      rx="2"
      fill="#5ECC5E"
      opacity="0.7"
    />
    <rect
      x="1"
      y="11"
      width="8"
      height="8"
      rx="2"
      fill="#5ECC5E"
      opacity="0.7"
    />
    <rect
      x="11"
      y="11"
      width="8"
      height="8"
      rx="2"
      fill="#5ECC5E"
      opacity="0.4"
    />
  </svg>
);

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate API call — replace with your real auth logic
    setTimeout(() => {
      if (email === "admin@frizpay.com" && password === "password123") {
        onLogin(); // ✅ success → App shows dashboard
      } else {
        setError(
          "Invalid email or password. Try admin@frizpay.com / password123",
        );
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-base-100 flex">
      {/* ── Left Panel ───────────────────────────── */}
      <div className="hidden lg:flex w-1/2 bg-base-200 border-r border-base-300 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-primary opacity-5" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-primary opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary opacity-[0.03]" />

        {/* Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <FrizpayLogo />
          <span className="text-base-content/60 font-bold text-2xl tracking-wide">
            Frizpay
          </span>
        </div>

        {/* Center content */}
        <div className="relative z-10">
          <h2 className="text-base-content/60 font-bold text-4xl leading-snug mb-4">
            Your finances,
            <br />
            <span className="text-primary">simplified.</span>
          </h2>
          <p className="text-base-content/50 text-base leading-relaxed max-w-sm">
            Manage payments, track invoices, and grow your savings — all in one
            powerful dashboard.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "💳 Virtual Cards",
              "📊 Analytics",
              "⚡ Instant Transfers",
              "🔒 Bank-Grade Security",
            ].map((f) => (
              <span
                key={f}
                className="px-3 py-1.5 bg-base-300 border border-base-300 rounded-full text-xs text-base-content/60"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Stat strip */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "$2M+", label: "Processed Daily" },
              { value: "99.9%", label: "Uptime" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-base-300 border border-base-300 rounded-2xl p-4 text-center"
              >
                <p className="text-primary font-bold text-xl">{s.value}</p>
                <p className="text-base-content/50 text-[11px] mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <p className="text-base-content/50 text-xs relative z-10">
          © 2025 Frizpay. Secure & trusted.
        </p>
      </div>

      {/* ── Right Panel: Login Form ───────────────── */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm animate-fade-up">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <FrizpayLogo />
            <span className="text-base-content/60 font-bold text-xl">
              Frizpay
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-base-content/60 font-bold text-2xl mb-1">
              Welcome back 👋
            </h1>
            <p className="text-base-content/50 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-base-content/50 text-xs font-medium mb-1.5 block">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="admin@frizpay.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-base-200 border border-base-300 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 outline-none focus:border-primary transition-colors placeholder:text-base-content/50"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-base-content/50 text-xs font-medium mb-1.5 block">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                </div>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-base-200 border border-base-300 rounded-xl pl-10 pr-10 py-3 text-sm text-gray-900 outline-none focus:border-primary transition-colors placeholder:text-base-content/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-base-content/60 transition-colors"
                >
                  {showPass ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-base-300 bg-base-300 accent-primary"
                />
                <span className="text-base-content/50 text-xs">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-primary text-xs hover:underline font-medium"
              >
                Forgot password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <p className="text-red-400 text-xs">{error}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-base-content/60 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border-dark" />
            <span className="text-base-content/50 text-xs">
              or continue with
            </span>
            <div className="flex-1 h-px bg-border-dark" />
          </div>

          {/* Social logins */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Google",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#9CA3AF"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <button
                key={s.label}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-base-300 text-base-content/60 text-sm hover:bg-base-300 hover:text-base-content/60 transition-all"
              >
                {s.icon}
                {s.label}
              </button>
            ))}
          </div>

          <p className="text-center text-base-content/50 text-xs mt-6">
            Don't have an account?{" "}
            <button className="text-primary font-semibold hover:underline">
              Sign up for free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
