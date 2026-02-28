import { useState } from "react";

const allTransactions = [
  {
    id: "TXN001",
    date: "Apr 24, 2024",
    description: "Netflix Subscription",
    category: "Entertainment",
    type: "Debit",
    status: "Completed",
    amount: -12.99,
  },
  {
    id: "TXN002",
    date: "Apr 24, 2024",
    description: "Salary Deposit",
    category: "Income",
    type: "Credit",
    status: "Completed",
    amount: 3000.0,
  },
  {
    id: "TXN003",
    date: "Apr 23, 2024",
    description: "Amazon Purchase",
    category: "Shopping",
    type: "Debit",
    status: "Pending",
    amount: -89.5,
  },
  {
    id: "TXN004",
    date: "Apr 22, 2024",
    description: "Electricity Bill",
    category: "Utilities",
    type: "Debit",
    status: "Completed",
    amount: -150.0,
  },
  {
    id: "TXN005",
    date: "Apr 22, 2024",
    description: "Freelance Payment",
    category: "Income",
    type: "Credit",
    status: "Completed",
    amount: 500.0,
  },
  {
    id: "TXN006",
    date: "Apr 21, 2024",
    description: "Spotify Premium",
    category: "Entertainment",
    type: "Debit",
    status: "Completed",
    amount: -9.99,
  },
  {
    id: "TXN007",
    date: "Apr 20, 2024",
    description: "Grocery Store",
    category: "Food",
    type: "Debit",
    status: "Completed",
    amount: -67.3,
  },
  {
    id: "TXN008",
    date: "Apr 20, 2024",
    description: "Transfer from Morris",
    category: "Income",
    type: "Credit",
    status: "Completed",
    amount: 204.64,
  },
  {
    id: "TXN009",
    date: "Apr 19, 2024",
    description: "Gym Membership",
    category: "Health",
    type: "Debit",
    status: "Failed",
    amount: -45.0,
  },
  {
    id: "TXN010",
    date: "Apr 18, 2024",
    description: "Hotel Booking",
    category: "Travel",
    type: "Debit",
    status: "Pending",
    amount: -320.0,
  },
];

const statusStyle = {
  Completed: { text: "#5ECC5E", bg: "rgba(94,204,94,0.1)" },
  Pending: { text: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  Failed: { text: "#EF4444", bg: "rgba(239,68,68,0.1)" },
};

const categoryColor = {
  Income: "#5ECC5E",
  Entertainment: "#A78BFA",
  Shopping: "#3B82F6",
  Utilities: "#F59E0B",
  Food: "#F97316",
  Health: "#EC4899",
  Travel: "#06B6D4",
};

const typeFilters = ["All", "Credit", "Debit"];
const statusFilters = ["All Statuses", "Completed", "Pending", "Failed"];

export default function TransactionsPage() {
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [search, setSearch] = useState("");

  const filtered = allTransactions.filter((tx) => {
    const matchType = typeFilter === "All" || tx.type === typeFilter;
    const matchStatus =
      statusFilter === "All Statuses" || tx.status === statusFilter;
    const matchSearch =
      tx.description.toLowerCase().includes(search.toLowerCase()) ||
      tx.category.toLowerCase().includes(search.toLowerCase());
    return matchType && matchStatus && matchSearch;
  });

  const totalIn = filtered
    .filter((t) => t.amount > 0)
    .reduce((s, t) => s + t.amount, 0);
  const totalOut = filtered
    .filter((t) => t.amount < 0)
    .reduce((s, t) => s + Math.abs(t.amount), 0);

  return (
    <div className="p-6 animate-fade-up space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base-content/60 font-bold text-xl">
            Transactions
          </h2>
          <p className="text-base-content/50 text-sm mt-0.5">
            Full history of all your financial activity
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-base-300 text-base-content/60 rounded-xl text-sm font-semibold hover:bg-base-300 transition-colors">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export CSV
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">
        {[
          {
            label: "Total Transactions",
            value: allTransactions.length,
            suffix: "transactions",
            color: "text-base-content/60",
          },
          {
            label: "Money In",
            value: `$${totalIn.toFixed(2)}`,
            suffix: "credits",
            color: "text-primary",
          },
          {
            label: "Money Out",
            value: `$${totalOut.toFixed(2)}`,
            suffix: "debits",
            color: "text-red-400",
          },
          {
            label: "Net Balance",
            value: `$${(totalIn - totalOut).toFixed(2)}`,
            suffix: "net",
            color: totalIn > totalOut ? "text-primary" : "text-red-400",
          },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-base-200 rounded-2xl p-4 border border-base-300 stat-card"
          >
            <p className="text-base-content/50 text-xs mb-1">{card.label}</p>
            <p className={`font-bold text-xl ${card.color}`}>{card.value}</p>
            <p className="text-base-content/50 text-[10px] mt-0.5 capitalize">
              {card.suffix}
            </p>
          </div>
        ))}
      </div>

      {/* Filters + Table */}
      <div className="bg-base-200 rounded-2xl border border-base-300 p-5">
        {/* Filter row */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          {/* Search */}
          <div className="flex items-center gap-2 bg-base-300 rounded-xl px-3 py-2.5 flex-1 min-w-48">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search transactions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-base-content/60 outline-none w-full placeholder:text-base-content/50"
            />
          </div>
          {/* Type */}
          <div className="flex items-center gap-1 bg-base-300 rounded-xl p-1">
            {typeFilters.map((f) => (
              <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${typeFilter === f ? "bg-primary text-base-content/60" : "text-base-content/50 hover:text-base-content/60"}`}
              >
                {f}
              </button>
            ))}
          </div>
          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-base-300 border border-base-300 rounded-xl px-3 py-2 text-xs text-base-content/60 outline-none focus:border-primary"
          >
            {statusFilters.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="text-base-content/50 border-b border-base-300">
              <th className="text-left pb-3 font-medium">Txn ID</th>
              <th className="text-left pb-3 font-medium">Description</th>
              <th className="text-left pb-3 font-medium">Category</th>
              <th className="text-left pb-3 font-medium">Date</th>
              <th className="text-center pb-3 font-medium">Type</th>
              <th className="text-center pb-3 font-medium">Status</th>
              <th className="text-right pb-3 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-10 text-base-content/50"
                >
                  No transactions match your filters
                </td>
              </tr>
            ) : (
              filtered.map((tx) => {
                const st = statusStyle[tx.status];
                const cat = categoryColor[tx.category];
                return (
                  <tr
                    key={tx.id}
                    className="border-t border-base-300 hover:bg-base-300 transition-colors"
                  >
                    <td className="py-3 text-base-content/50 font-mono">
                      {tx.id}
                    </td>
                    <td className="py-3 text-base-content/60 font-medium">
                      {tx.description}
                    </td>
                    <td className="py-3 font-medium" style={{ color: cat }}>
                      {tx.category}
                    </td>
                    <td className="py-3 text-base-content/60">{tx.date}</td>
                    <td className="py-3 text-center">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${tx.type === "Credit" ? "text-primary bg-primary/10" : "text-red-400 bg-red-400/10"}`}
                      >
                        {tx.type}
                      </span>
                    </td>
                    <td className="py-3 text-center">
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{ color: st.text, backgroundColor: st.bg }}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td
                      className={`py-3 text-right font-bold ${tx.amount > 0 ? "text-primary" : "text-base-content/60"}`}
                    >
                      {tx.amount > 0 ? "+" : ""}$
                      {Math.abs(tx.amount).toFixed(2)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-base-300">
          <p className="text-base-content/50 text-xs">
            Showing {filtered.length} of {allTransactions.length} transactions
          </p>
          <div className="flex items-center gap-1">
            {["←", "1", "2", "3", "→"].map((p, i) => (
              <button
                key={i}
                className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition-colors
                ${p === "1" ? "bg-primary text-base-content/60" : "text-base-content/50 hover:bg-base-300 hover:text-base-content/60"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
