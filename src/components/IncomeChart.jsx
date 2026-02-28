import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 3000, expense: 1398 },
  { month: "Mar", income: 5000, expense: 3200 },
  { month: "Apr", income: 4500, expense: 2800 },
  { month: "May", income: 6000, expense: 3900 },
  { month: "Jun", income: 5500, expense: 2500 },
  { month: "Jul", income: 7000, expense: 4200 },
  { month: "Aug", income: 6500, expense: 3800 },
  { month: "Sep", income: 8000, expense: 4800 },
  { month: "Oct", income: 7500, expense: 4100 },
  { month: "Nov", income: 9000, expense: 5200 },
  { month: "Dec", income: 8500, expense: 4700 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-base-300 border border-base-300 rounded-xl p-3 text-xs shadow-xl">
        <p className="text-base-content/50 mb-1 font-medium">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }} className="font-semibold">
            {entry.name}: ${entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function IncomeChart() {
  const [activeFilter, setActiveFilter] = useState("Income Fund");
  const filters = ["Income Fund", "Top Report"];

  return (
    <div className="bg-base-200 rounded-2xl p-5 border border-base-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base-content/60 font-semibold text-sm">
            Income Analysis
          </h3>
        </div>
        <div className="flex items-center gap-1 bg-base-300 rounded-lg p-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeFilter === f
                  ? "bg-primary text-base-content/60"
                  : "text-base-content/50 hover:text-base-content/60"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={data}
          margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5ECC5E" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#5ECC5E" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#1E2A3A"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "#6B7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="#5ECC5E"
            strokeWidth={2}
            fill="url(#incomeGradient)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#5ECC5E",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
          <Area
            type="monotone"
            dataKey="expense"
            name="Expense"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#expenseGradient)"
            dot={false}
            activeDot={{
              r: 5,
              fill: "#3B82F6",
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
