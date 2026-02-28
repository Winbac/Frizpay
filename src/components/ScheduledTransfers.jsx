const transfers = [
  {
    name: "Eleanor Pena",
    role: "Designer",
    amount: "$479.89",
    avatar: "E",
    color: "bg-purple-500",
  },
  {
    name: "Morris McKinney",
    role: "Developer",
    amount: "$204.64",
    avatar: "M",
    color: "bg-blue-500",
  },
  {
    name: "Cody Rider",
    role: "Manager",
    amount: "$739.48",
    avatar: "C",
    color: "bg-orange-500",
  },
  {
    name: "Theresa Webb",
    role: "Designer",
    amount: "$202.07",
    avatar: "T",
    color: "bg-pink-500",
  },
  {
    name: "Kristin Watson",
    role: "Developer",
    amount: "$854.08",
    avatar: "K",
    color: "bg-cyan-500",
  },
  {
    name: "Albert Flores",
    role: "Manager",
    amount: "$307.90",
    avatar: "A",
    color: "bg-yellow-500",
  },
  {
    name: "Darren Russell",
    role: "Developer",
    amount: "$381.02",
    avatar: "D",
    color: "bg-red-500",
  },
];

export default function ScheduledTransfers() {
  return (
    <div className="bg-base-200 rounded-2xl p-5 border border-base-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base-content/60 font-semibold text-sm">
          Scheduled Transfers
        </h3>
        <button className="text-primary text-xs font-medium hover:underline">
          View
        </button>
      </div>

      <div className="space-y-3">
        {transfers.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between group hover:bg-base-300 rounded-lg px-2 py-1.5 -mx-2 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-base-content/60 flex-shrink-0`}
              >
                {t.avatar}
              </div>
              <div>
                <p className="text-base-content/60 text-xs font-semibold leading-tight">
                  {t.name}
                </p>
                <p className="text-base-content/50 text-[10px]">{t.role}</p>
              </div>
            </div>
            <span className="text-base-content/60 text-xs font-bold">
              {t.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
