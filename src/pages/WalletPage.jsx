import { useState } from 'react'

const cards = [
  { balance: '$4,550.51', number: '4512 3698 741 2580', expiry: '12/26', type: 'Visa',       color: 'from-green-900 via-green-950 to-emerald-900' },
  { balance: '$400.00',   number: '6744 5698 472 0124', expiry: '09/24', type: 'Mastercard',  color: 'from-slate-800 via-slate-900 to-zinc-900'     },
]

const history = [
  { icon: '↑', label: 'Sent to Eleanor',   date: 'Today, 2:30 PM',    amount: '-$479.89',  color: 'text-red-400'  },
  { icon: '↓', label: 'Received from Alex',date: 'Today, 11:00 AM',   amount: '+$1,200.00',color: 'text-primary'  },
  { icon: '↑', label: 'Bill Payment',      date: 'Yesterday, 6:15 PM',amount: '-$150.00',  color: 'text-red-400'  },
  { icon: '↓', label: 'Salary Credit',     date: 'Apr 20, 9:00 AM',   amount: '+$3,000.00',color: 'text-primary'  },
  { icon: '↑', label: 'Amazon Purchase',   date: 'Apr 19, 3:45 PM',   amount: '-$89.50',   color: 'text-red-400'  },
]

const SpendingBar = ({ label, pct, color }) => (
  <div>
    <div className="flex justify-between text-xs mb-1">
      <span className="text-text-soft">{label}</span>
      <span className="text-white font-medium">{pct}%</span>
    </div>
    <div className="h-1.5 bg-bg-elevated rounded-full">
      <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: color }}/>
    </div>
  </div>
)

export default function WalletPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [showAddMoney, setShowAddMoney] = useState(false)

  return (
    <div className="p-6 animate-fade-up space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-white font-bold text-xl">My Wallet</h2>
          <p className="text-text-muted text-sm mt-0.5">Manage your cards and balances</p>
        </div>
        <button
          onClick={() => setShowAddMoney(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Money
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* Left column: Cards + Actions */}
        <div className="space-y-4">
          {/* Card Switcher */}
          <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
            <div className="flex gap-2 mb-4">
              {cards.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCard(i)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-all ${activeCard === i ? 'bg-primary text-white' : 'bg-bg-elevated text-text-muted hover:text-white'}`}
                >
                  {c.type}
                </button>
              ))}
            </div>

            {/* Active Card */}
            <div className={`bg-gradient-to-br ${cards[activeCard].color} rounded-2xl p-5 relative overflow-hidden border border-white/5`}>
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary opacity-10"/>
              <div className="absolute -bottom-6 -left-4 w-20 h-20 rounded-full bg-primary opacity-5"/>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-1.5">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <rect x="1" y="1" width="8" height="8" rx="1.5" fill="#5ECC5E"/>
                      <rect x="11" y="1" width="8" height="8" rx="1.5" fill="#5ECC5E" opacity="0.7"/>
                      <rect x="1" y="11" width="8" height="8" rx="1.5" fill="#5ECC5E" opacity="0.7"/>
                      <rect x="11" y="11" width="8" height="8" rx="1.5" fill="#5ECC5E" opacity="0.4"/>
                    </svg>
                    <span className="text-white text-xs font-semibold">Frizpay</span>
                  </div>
                  {cards[activeCard].type === 'Mastercard' ? (
                    <div className="flex -space-x-2"><div className="w-6 h-6 rounded-full bg-red-500 opacity-90"/><div className="w-6 h-6 rounded-full bg-yellow-400 opacity-80"/></div>
                  ) : (
                    <span className="text-white/60 text-xs font-bold italic">VISA</span>
                  )}
                </div>
                <p className="text-text-muted text-[10px] uppercase tracking-wider">Available Balance</p>
                <p className="text-white text-2xl font-bold mb-4">{cards[activeCard].balance}</p>
                <div className="flex justify-between">
                  <p className="text-white/60 text-[11px] font-mono tracking-widest">{cards[activeCard].number}</p>
                  <p className="text-white/60 text-[11px] font-mono">{cards[activeCard].expiry}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {[
                { label: 'Send',    icon: '↑' },
                { label: 'Receive', icon: '↓' },
                { label: 'Add',     icon: '+' },
                { label: 'Freeze',  icon: '❄' },
              ].map(({ label, icon }) => (
                <button key={label} className="flex flex-col items-center gap-1 py-2.5 rounded-xl bg-bg-elevated hover:bg-border-dark transition-colors">
                  <span className="text-primary text-sm font-bold">{icon}</span>
                  <span className="text-text-muted text-[10px]">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Spending Breakdown */}
          <div className="bg-bg-card rounded-2xl p-5 border border-border-dark space-y-3">
            <h3 className="text-white font-semibold text-sm mb-3">Spending Breakdown</h3>
            <SpendingBar label="Shopping"       pct={45} color="#3B82F6" />
            <SpendingBar label="Entertainment"  pct={28} color="#8B5CF6" />
            <SpendingBar label="Utilities"      pct={18} color="#F59E0B" />
            <SpendingBar label="Food"           pct={9}  color="#5ECC5E" />
          </div>
        </div>

        {/* Middle: Stats */}
        <div className="space-y-4">
          <div className="grid grid-rows-2 gap-4 h-full">
            {/* Balance Overview */}
            <div className="bg-bg-card rounded-2xl p-5 border border-border-dark space-y-4">
              <h3 className="text-white font-semibold text-sm">Balance Overview</h3>
              {[
                { label: 'Total Balance',  value: '$4,950.51', change: '+8.2%',  up: true  },
                { label: 'Total Income',   value: '$3,000.00', change: '+5.1%',  up: true  },
                { label: 'Total Spent',    value: '$1,248.22', change: '+3.1%',  up: false },
                { label: 'Savings',        value: '$1,751.78', change: '+12.4%', up: true  },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between py-2 border-b border-border-dark last:border-0">
                  <p className="text-text-soft text-xs">{item.label}</p>
                  <div className="text-right">
                    <p className="text-white text-sm font-bold">{item.value}</p>
                    <p className={`text-[10px] font-medium ${item.up ? 'text-primary' : 'text-red-400'}`}>{item.up ? '↑' : '↓'} {item.change}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Savings Goal */}
            <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-white font-semibold text-sm">Savings Goal</h3>
                <span className="text-primary text-xs font-bold">49.5%</span>
              </div>
              <p className="text-text-muted text-xs mb-1">Target: $10,000</p>
              <div className="h-2 bg-bg-elevated rounded-full mb-2">
                <div className="h-2 bg-primary rounded-full transition-all duration-700" style={{ width: '49.5%' }}/>
              </div>
              <div className="flex justify-between text-[10px] text-text-muted">
                <span>Saved: $4,950.51</span>
                <span>Remaining: $5,049.49</span>
              </div>
              <button className="w-full mt-3 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors">
                Update Goal
              </button>
            </div>
          </div>
        </div>

        {/* Right: Transaction History */}
        <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-sm">Recent Activity</h3>
            <button className="text-primary text-xs hover:underline">View All</button>
          </div>
          <div className="space-y-1">
            {history.map((h, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 px-2 rounded-xl hover:bg-bg-elevated transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                    ${h.amount.startsWith('+') ? 'bg-primary/10 text-primary' : 'bg-red-400/10 text-red-400'}`}>
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{h.label}</p>
                    <p className="text-text-muted text-[10px]">{h.date}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold ${h.color}`}>{h.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Money Modal */}
      {showAddMoney && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowAddMoney(false)}>
          <div className="bg-bg-card border border-border-dark rounded-2xl p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold">Add Money</h3>
              <button onClick={() => setShowAddMoney(false)} className="text-text-muted hover:text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-text-muted text-xs mb-1 block">Select Card</label>
                <select className="w-full bg-bg-elevated border border-border-dark rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-primary">
                  {cards.map((c, i) => <option key={i}>{c.type} — {c.number.slice(-4)}</option>)}
                </select>
              </div>
              <div>
                <label className="text-text-muted text-xs mb-1 block">Amount ($)</label>
                <input type="number" placeholder="0.00" className="w-full bg-bg-elevated border border-border-dark rounded-xl px-3 py-2.5 text-sm text-white outline-none focus:border-primary placeholder:text-text-muted"/>
              </div>
              <div className="flex gap-2">
                {['100', '250', '500', '1000'].map(amt => (
                  <button key={amt} className="flex-1 py-2 rounded-xl bg-bg-elevated text-text-soft text-xs font-medium hover:bg-primary hover:text-white transition-all">${amt}</button>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAddMoney(false)} className="flex-1 py-2.5 rounded-xl border border-border-dark text-text-soft text-sm font-medium hover:bg-bg-elevated transition-colors">Cancel</button>
              <button className="flex-1 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">Add Funds</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}