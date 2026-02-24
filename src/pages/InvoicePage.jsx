export function InvoicePage() {
  return (
    <div className="p-6 animate-fade-up">
      <h2 className="text-white font-bold text-xl mb-2">Invoice</h2>
      <p className="text-text-muted text-sm">Manage and track your invoices here.</p>
      <div className="mt-8 flex flex-col items-center justify-center py-20 bg-bg-card rounded-2xl border border-border-dark">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5ECC5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </div>
        <p className="text-white font-semibold">No invoices yet</p>
        <p className="text-text-muted text-sm mt-1">Create your first invoice to get started</p>
        <button className="mt-4 px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors">
          + New Invoice
        </button>
      </div>
    </div>
  )
}

export function WalletPage() {
  return (
    <div className="p-6 animate-fade-up">
      <h2 className="text-white font-bold text-xl mb-2">My Wallet</h2>
      <p className="text-text-muted text-sm">View and manage your wallet.</p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
          <p className="text-text-muted text-xs mb-1">Total Balance</p>
          <p className="text-white text-2xl font-bold">$4,950.51</p>
          <p className="text-primary text-xs mt-1">↑ +8.2% this month</p>
        </div>
        <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
          <p className="text-text-muted text-xs mb-1">Savings Goal</p>
          <p className="text-white text-2xl font-bold">$10,000</p>
          <div className="mt-2 h-2 bg-bg-elevated rounded-full">
            <div className="h-2 bg-primary rounded-full" style={{ width: '49.5%' }}></div>
          </div>
          <p className="text-text-muted text-[10px] mt-1">49.5% achieved</p>
        </div>
      </div>
    </div>
  )
}

export function TransactionsPage() {
  return (
    <div className="p-6 animate-fade-up">
      <h2 className="text-white font-bold text-xl mb-2">Transactions</h2>
      <p className="text-text-muted text-sm">Full history of all your transactions.</p>
    </div>
  )
}

export function SupportPage() {
  return (
    <div className="p-6 animate-fade-up">
      <h2 className="text-white font-bold text-xl mb-2">Support</h2>
      <p className="text-text-muted text-sm">Get help from our team.</p>
    </div>
  )
}

export function SettingsPage() {
  return (
    <div className="p-6 animate-fade-up">
      <h2 className="text-white font-bold text-xl mb-2">Settings</h2>
      <p className="text-text-muted text-sm">Manage your account preferences.</p>
    </div>
  )
}

export default InvoicePage