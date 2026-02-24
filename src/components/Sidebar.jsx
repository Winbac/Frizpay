import { useState } from 'react'

const FrizpayLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="1" y="1" width="8" height="8" rx="2" fill="#5ECC5E"/>
    <rect x="11" y="1" width="8" height="8" rx="2" fill="#5ECC5E" opacity="0.7"/>
    <rect x="1" y="11" width="8" height="8" rx="2" fill="#5ECC5E" opacity="0.7"/>
    <rect x="11" y="11" width="8" height="8" rx="2" fill="#5ECC5E" opacity="0.4"/>
  </svg>
)

const HomeIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#5ECC5E" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const InvoiceIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#5ECC5E" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

const WalletIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#5ECC5E" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
    <path d="M16 3H8L4 7h16l-4-4z"/>
    <circle cx="17" cy="13" r="1" fill={active ? "#5ECC5E" : "#6B7280"}/>
  </svg>
)

const TransactionIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#5ECC5E" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/>
    <path d="M3 11V9a4 4 0 014-4h14"/>
    <polyline points="7 23 3 19 7 15"/>
    <path d="M21 13v2a4 4 0 01-4 4H3"/>
  </svg>
)

const SupportIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#5ECC5E" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
)

const SettingsIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#5ECC5E" : "#6B7280"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
)

const navItems = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'invoice', label: 'Invoice', Icon: InvoiceIcon },
  { id: 'wallet', label: 'My Wallet', Icon: WalletIcon },
  { id: 'transactions', label: 'Transactions', Icon: TransactionIcon },
  { id: 'support', label: 'Support', Icon: SupportIcon },
  { id: 'settings', label: 'Settings', Icon: SettingsIcon },
]

export default function Sidebar({ activeItem, onNavChange }) {
  return (
    <aside className="w-56 min-h-screen bg-bg-sidebar border-r border-border-dark flex flex-col py-6 px-4 fixed left-0 top-0 z-20">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <FrizpayLogo />
        <span className="text-white font-bold text-lg tracking-wide">Frizpay</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = activeItem === id
          return (
            <button
              key={id}
              onClick={() => onNavChange(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${isActive
                  ? 'nav-item-active text-primary'
                  : 'text-text-muted hover:text-white hover:bg-bg-elevated'
                }`}
            >
              <Icon active={isActive} />
              {label}
            </button>
          )
        })}
      </nav>

      {/* Bottom user avatar */}
      <div className="mt-6 px-2 py-3 rounded-xl bg-bg-elevated flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
          C
        </div>
        <div>
          <p className="text-xs font-semibold text-white">Chandan Singh</p>
          <p className="text-[10px] text-text-muted">Admin</p>
        </div>
      </div>
    </aside>
  )
}