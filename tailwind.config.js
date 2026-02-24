/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5ECC5E",
        "primary-dark": "#4AB84A",
        "bg-base": "#0C0F14",
        "bg-card": "#141920",
        "bg-sidebar": "#0D1117",
        "bg-elevated": "#1A2232",
        "text-muted": "#6B7280",
        "text-soft": "#9CA3AF",
        "border-dark": "#1E2A3A",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        frizpay: {
          primary: "#5ECC5E",
          secondary: "#1A2232",
          accent: "#5ECC5E",
          neutral: "#141920",
          "base-100": "#0C0F14",
          "base-200": "#141920",
          "base-300": "#1A2232",
          info: "#3B82F6",
          success: "#5ECC5E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },
    ],
  },
}