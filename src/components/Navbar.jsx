export default function Navbar({ title, onLogout }) {
  return (
    <header className="h-14 bg-bg-sidebar border-b border-border-dark flex items-center justify-between px-6 sticky top-0 z-10">
      <h1 className="text-white font-semibold text-base">{title}</h1>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-bg-elevated rounded-lg px-3 py-2 w-48">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-text-soft outline-none w-full placeholder:text-text-muted"
          />
        </div>

        {/* Notification */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-bg-elevated hover:bg-border-dark transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 01-3.46 0"/>
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary pulse-green"/>
        </button>

        {/* User + Logout dropdown */}
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
              C
            </div>
            <span className="text-sm font-medium text-white hidden sm:block">Chandan Singh</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          {/* Dropdown */}
          <div className="absolute right-0 top-10 w-44 bg-bg-card border border-border-dark rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-border-dark">
              <p className="text-white text-xs font-semibold">Chandan Singh</p>
              <p className="text-text-muted text-[10px]">admin@frizpay.com</p>
            </div>
            {[
              { label: 'My Profile',  icon: '👤' },
              { label: 'Settings',    icon: '⚙️' },
            ].map(item => (
              <button key={item.label} className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-text-soft hover:bg-bg-elevated hover:text-white transition-colors text-left">
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
            <div className="border-t border-border-dark">
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-red-400 hover:bg-red-400/10 transition-colors text-left"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}