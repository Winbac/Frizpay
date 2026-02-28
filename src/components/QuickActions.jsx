const actions = [
  {
    label: "Receive",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
      </svg>
    ),
    variant: "outline",
  },
  {
    label: "Send",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" /> .
      </svg>
    ),
    variant: "filled",
  },
];

export default function QuickActions() {
  return (
    <div className="flex items-center gap-2">
      {actions.map(({ label, icon, variant }) => (
        <button
          key={label}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
            ${
              variant === "filled"
                ? "bg-primary text-base-content/60 hover:bg-primary-dark shadow-lg shadow-primary/20"
                : "border border-base-300 text-base-content/60 hover:bg-base-300"
            }`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
}
