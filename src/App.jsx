import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import LoginPage from './pages/LoginPage'
import InvoicePage from './pages/InvoicePage'
import WalletPage from './pages/WalletPage'
import TransactionsPage from './pages/TransactionsPage'
import SupportPage from './pages/SupportPage'
import SettingsPage from './pages/SettingsPage'

const pageTitles = {
  home:         'Dashboard',
  invoice:      'Invoice',
  wallet:       'My Wallet',
  transactions: 'Transactions',
  support:      'Support',
  settings:     'Settings',
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activePage, setActivePage] = useState('home')

  // ── Not logged in → show Login screen ────────
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  // ── Logged in → show Dashboard ───────────────
  const pages = {
    home:         <Dashboard />,
    invoice:      <InvoicePage />,
    wallet:       <WalletPage />,
    transactions: <TransactionsPage />,
    support:      <SupportPage />,
    settings:     <SettingsPage />,
  }

  return (
    <div className="flex min-h-screen bg-bg-base font-jakarta">
      <Sidebar activeItem={activePage} onNavChange={setActivePage} />
      <div className="ml-56 flex-1 flex flex-col min-h-screen">
        <Navbar title={pageTitles[activePage]} onLogout={() => setIsLoggedIn(false)} />
        <main className="flex-1 overflow-y-auto">
          {pages[activePage]}
        </main>
      </div>
    </div>
  )
}