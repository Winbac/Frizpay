import { useState } from 'react'

const faqs = [
  { q: 'How do I add a new card?',           a: 'Go to My Wallet → Virtual Cards → click the "+" button to add a new card. You can add up to 3 virtual cards per account.' },
  { q: 'How long do transfers take?',         a: 'Instant transfers between Frizpay users are immediate. Bank transfers typically take 1-3 business days depending on your bank.' },
  { q: 'What are the transaction limits?',    a: 'Daily limit is $10,000 for standard accounts. Pro accounts have a $50,000 daily limit. Contact support to increase your limits.' },
  { q: 'How do I dispute a transaction?',     a: 'Navigate to Transactions, find the transaction, click the three dots menu and select "Dispute". Our team will respond within 24 hours.' },
  { q: 'Is my money insured?',               a: 'Yes! All funds up to $250,000 are FDIC insured through our banking partner. Your money is always safe with Frizpay.' },
]

const tickets = [
  { id: '#4821', subject: 'Card not working',      status: 'Open',     date: 'Apr 24', priority: 'High'   },
  { id: '#4817', subject: 'Transfer delay issue',  status: 'Resolved', date: 'Apr 20', priority: 'Medium' },
  { id: '#4809', subject: 'Login 2FA problem',     status: 'Resolved', date: 'Apr 15', priority: 'Low'    },
]

const ticketStatus = {
  Open:     { text: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
  Resolved: { text: '#5ECC5E', bg: 'rgba(94,204,94,0.1)'  },
}

const priorityColor = {
  High:   'text-red-400',
  Medium: 'text-yellow-400',
  Low:    'text-text-muted',
}

export default function SupportPage() {
  const [openFaq, setOpenFaq]     = useState(null)
  const [message, setMessage]     = useState('')
  const [sent, setSent]           = useState(false)
  const [chatOpen, setChatOpen]   = useState(false)
  const [chatMsg, setChatMsg]     = useState('')
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', text: 'Hi Chandan! 👋 How can I help you today?' }
  ])

  const sendChat = () => {
    if (!chatMsg.trim()) return
    setChatHistory(prev => [
      ...prev,
      { from: 'user', text: chatMsg },
      { from: 'bot',  text: 'Thanks for your message! A support agent will respond shortly.' }
    ])
    setChatMsg('')
  }

  return (
    <div className="p-6 animate-fade-up space-y-5">
      {/* Header */}
      <div>
        <h2 className="text-white font-bold text-xl">Support</h2>
        <p className="text-text-muted text-sm mt-0.5">We're here to help — 24/7</p>
      </div>

      {/* Quick Help Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { icon: '💬', title: 'Live Chat',    sub: 'Avg. response: 2 min',  action: () => setChatOpen(true), cta: 'Start Chat',  highlight: true  },
          { icon: '📧', title: 'Email Us',     sub: 'support@frizpay.com',   action: () => {},                cta: 'Send Email',  highlight: false },
          { icon: '📞', title: 'Call Us',      sub: '+1 (800) 555-0192',     action: () => {},                cta: 'Call Now',    highlight: false },
          { icon: '📖', title: 'Help Center',  sub: 'Browse 200+ articles',  action: () => {},                cta: 'Browse Docs', highlight: false },
        ].map(card => (
          <button
            key={card.title}
            onClick={card.action}
            className={`text-left p-5 rounded-2xl border transition-all stat-card
              ${card.highlight
                ? 'bg-primary/10 border-primary/30 hover:bg-primary/20'
                : 'bg-bg-card border-border-dark hover:border-primary/30'
              }`}
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <p className="text-white font-semibold text-sm">{card.title}</p>
            <p className="text-text-muted text-[10px] mt-0.5 mb-3">{card.sub}</p>
            <span className={`text-xs font-semibold ${card.highlight ? 'text-primary' : 'text-text-soft'}`}>{card.cta} →</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* FAQ */}
        <div className="col-span-2 bg-bg-card rounded-2xl p-5 border border-border-dark">
          <h3 className="text-white font-semibold text-sm mb-4">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border-dark rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-bg-elevated transition-colors"
                >
                  <span className="text-white text-sm font-medium">{faq.q}</span>
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="#6B7280" strokeWidth="2"
                    className={`transition-transform flex-shrink-0 ml-3 ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 pt-1 border-t border-border-dark">
                    <p className="text-text-soft text-xs leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Submit Ticket + Open Tickets */}
        <div className="space-y-4">
          {/* Submit Ticket */}
          <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
            <h3 className="text-white font-semibold text-sm mb-4">Submit a Ticket</h3>
            {sent ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5ECC5E" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-white font-semibold text-sm">Ticket Submitted!</p>
                <p className="text-text-muted text-xs mt-1">We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-3 text-primary text-xs hover:underline">Submit another</button>
              </div>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="text-text-muted text-xs mb-1 block">Subject</label>
                  <input type="text" placeholder="Brief description of your issue" className="w-full bg-bg-elevated border border-border-dark rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-primary placeholder:text-text-muted"/>
                </div>
                <div>
                  <label className="text-text-muted text-xs mb-1 block">Priority</label>
                  <select className="w-full bg-bg-elevated border border-border-dark rounded-xl px-3 py-2 text-xs text-text-soft outline-none focus:border-primary">
                    <option>Low</option><option>Medium</option><option>High</option>
                  </select>
                </div>
                <div>
                  <label className="text-text-muted text-xs mb-1 block">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your issue in detail..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full bg-bg-elevated border border-border-dark rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-primary resize-none placeholder:text-text-muted"
                  />
                </div>
                <button
                  onClick={() => setSent(true)}
                  className="w-full py-2.5 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary-dark transition-colors"
                >
                  Submit Ticket
                </button>
              </div>
            )}
          </div>

          {/* Open Tickets */}
          <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
            <h3 className="text-white font-semibold text-sm mb-3">My Tickets</h3>
            <div className="space-y-2">
              {tickets.map(t => {
                const st = ticketStatus[t.status]
                return (
                  <div key={t.id} className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-bg-elevated transition-colors cursor-pointer">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-text-muted text-[10px] font-mono">{t.id}</span>
                        <span className={`text-[10px] font-medium ${priorityColor[t.priority]}`}>{t.priority}</span>
                      </div>
                      <p className="text-white text-xs font-medium mt-0.5">{t.subject}</p>
                      <p className="text-text-muted text-[10px]">{t.date}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold flex-shrink-0" style={{ color: st.text, backgroundColor: st.bg }}>
                      {t.status}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-bg-card border border-border-dark rounded-2xl shadow-2xl z-50 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-bg-elevated border-b border-border-dark">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary pulse-green"/>
              <span className="text-white text-sm font-semibold">Live Support</span>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-text-muted hover:text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div className="h-52 overflow-y-auto p-4 space-y-3">
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-xs
                  ${msg.from === 'user' ? 'bg-primary text-white' : 'bg-bg-elevated text-text-soft'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 p-3 border-t border-border-dark">
            <input
              type="text"
              placeholder="Type a message..."
              value={chatMsg}
              onChange={e => setChatMsg(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendChat()}
              className="flex-1 bg-bg-elevated border border-border-dark rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-primary placeholder:text-text-muted"
            />
            <button onClick={sendChat} className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center hover:bg-primary-dark transition-colors flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}