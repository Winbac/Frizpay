const transactions = [
  { id: 1, date: 'Apr 24', description: 'Netflix Subscription', category: 'Entertainment', status: 'Completed', amount: -12.99 },
  { id: 2, date: 'Apr 24', description: 'Salary Deposit', category: 'Income', status: 'Completed', amount: 3000.00 },
  { id: 3, date: 'Apr 24', description: 'Amazon Purchase', category: 'Shopping', status: 'Pending', amount: -89.50 },
  { id: 4, date: 'Apr 24', description: 'Electricity Bill', category: 'Utilities', status: 'Completed', amount: -150.00 },
  { id: 5, date: 'Apr 24', description: 'Freelance Payment', category: 'Income', status: 'Completed', amount: 500.00 },
]

const statusColors = {
  Completed: 'text-primary bg-primary/10',
  Pending: 'text-yellow-400 bg-yellow-400/10',
  Failed: 'text-red-400 bg-red-400/10',
}

const categoryColors = {
  Entertainment: 'text-purple-400',
  Income: 'text-primary',
  Shopping: 'text-blue-400',
  Utilities: 'text-orange-400',
}

export default function RecentTransactions() {
  return (
    <div className="bg-bg-card rounded-2xl p-5 border border-border-dark">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm">Recent Transaction</h3>
        <button className="text-primary text-xs font-medium hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="text-text-muted">
              <th className="text-left pb-3 font-medium">Date</th>
              <th className="text-left pb-3 font-medium">Description</th>
              <th className="text-left pb-3 font-medium">Category</th>
              <th className="text-left pb-3 font-medium">Status</th>
              <th className="text-right pb-3 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {transactions.map((tx, i) => (
              <tr
                key={tx.id}
                className="border-t border-border-dark hover:bg-bg-elevated transition-colors"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <td className="py-3 text-text-soft">{tx.date}</td>
                <td className="py-3 text-white font-medium">{tx.description}</td>
                <td className={`py-3 font-medium ${categoryColors[tx.category] || 'text-text-soft'}`}>
                  {tx.category}
                </td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${statusColors[tx.status]}`}>
                    {tx.status}
                  </span>
                </td>
                <td className={`py-3 text-right font-bold ${tx.amount > 0 ? 'text-primary' : 'text-white'}`}>
                  {tx.amount > 0 ? '+' : ''}${Math.abs(tx.amount).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}