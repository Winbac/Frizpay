import StatCard from './StatCard'
import VirtualCard from './VirtualCard'
import IncomeChart from './IncomeChart'
import RecentTransactions from './RecentTransactions'
import ScheduledTransfers from './ScheduledTransfers'
import QuickActions from './QuickActions'

export default function Dashboard() {
  return (
    <div className="p-6 space-y-5 animate-fade-up">
      {/* Welcome Row */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white font-bold text-xl">Welcome Back, Chandan 👋</h2>
          <p className="text-text-muted text-sm mt-0.5">Here's what's happening with your finances.</p>
        </div>
        <QuickActions />
      </div>

      {/* Stat Cards Row */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          type="wallet"
          label="Wallet Balance"
          value="$4,950.51"
          change="8.2% from last month"
          changeType="up"
        />
        <StatCard
          type="income"
          label="Income"
          value="$3,000.00"
          change="5.1% from last month"
          changeType="up"
        />
        <StatCard
          type="quota"
          label="Quota"
          value="$351.00"
          change="2.3% from last month"
          changeType="down"
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left: Chart + Transactions */}
        <div className="col-span-2 space-y-4">
          <IncomeChart />
          <RecentTransactions />
        </div>

        {/* Right: Card + Transfers */}
        <div className="space-y-4">
          {/* Virtual Cards */}
          <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-sm">Virtual Cards</h3>
              <button className="text-text-muted hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                </svg>
              </button>
            </div>
            <VirtualCard balance="$400.00" cardNumber="6744 5698 472 0124" expiry="09/24" />

            {/* Card actions */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
                { label: 'Send', icon: '↑' },
                { label: 'Add Funds', icon: '+' },
                { label: 'Freeze', icon: '❄' },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  className="flex flex-col items-center gap-1 py-2 rounded-xl bg-bg-elevated hover:bg-border-dark transition-colors"
                >
                  <span className="text-primary text-sm">{icon}</span>
                  <span className="text-text-muted text-[10px]">{label}</span>
                </button>
              ))}
            </div>

            <button className="w-full mt-3 py-2.5 rounded-xl border border-border-dark text-text-soft text-xs font-medium hover:bg-bg-elevated transition-colors">
              View Card History
            </button>
          </div>

          <ScheduledTransfers />
        </div>
      </div>
    </div>
  )
}