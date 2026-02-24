const WalletIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5ECC5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
    <circle cx="17" cy="13" r="1" fill="#5ECC5E"/>
  </svg>
)

const IncomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
)

const QuotaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

const iconMap = {
  wallet: { Icon: WalletIcon, bg: 'bg-primary/10', border: 'border-primary/20' },
  income: { Icon: IncomeIcon, bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  quota: { Icon: QuotaIcon, bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
}

export default function StatCard({ type, label, value, change, changeType }) {
  const { Icon, bg, border } = iconMap[type] || iconMap.wallet

  return (
    <div className={`stat-card bg-bg-card rounded-2xl p-5 border border-border-dark flex items-center gap-4`}>
      <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
        <Icon />
      </div>
      <div>
        <p className="text-text-muted text-xs mb-0.5">{label}</p>
        <p className="text-white font-bold text-lg leading-tight">{value}</p>
        {change && (
          <p className={`text-[10px] font-medium mt-0.5 ${changeType === 'up' ? 'text-primary' : 'text-red-400'}`}>
            {changeType === 'up' ? '↑' : '↓'} {change}
          </p>
        )}
      </div>
    </div>
  )
}