const MastercardIcon = () => (
  <div className="flex -space-x-2">
    <div className="w-7 h-7 rounded-full bg-red-500 opacity-90"></div>
    <div className="w-7 h-7 rounded-full bg-yellow-400 opacity-80"></div>
  </div>
);

const ChipIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
    <rect
      x="1"
      y="1"
      width="26"
      height="20"
      rx="3"
      stroke="#5ECC5E"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="9"
      y="1"
      width="10"
      height="20"
      stroke="#5ECC5E"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
    <rect
      x="1"
      y="7"
      width="26"
      height="8"
      stroke="#5ECC5E"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
    />
    <rect x="9" y="7" width="10" height="8" fill="#5ECC5E" opacity="0.2" />
  </svg>
);

export default function VirtualCard({
  balance = "$400.00",
  cardNumber = "6744 5698 472 0124",
  expiry = "09/24",
}) {
  return (
    <div className="card-gradient rounded-2xl p-5 w-full relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-primary opacity-10"></div>
      <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-primary opacity-5"></div>

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="1.5" fill="#5ECC5E" />
              <rect
                x="11"
                y="1"
                width="8"
                height="8"
                rx="1.5"
                fill="#5ECC5E"
                opacity="0.7"
              />
              <rect
                x="1"
                y="11"
                width="8"
                height="8"
                rx="1.5"
                fill="#5ECC5E"
                opacity="0.7"
              />
              <rect
                x="11"
                y="11"
                width="8"
                height="8"
                rx="1.5"
                fill="#5ECC5E"
                opacity="0.4"
              />
            </svg>
            <span className="text-base-content/60 text-xs font-semibold">
              Frizpay
            </span>
          </div>
          <MastercardIcon />
        </div>

        {/* Chip */}
        <div className="mb-4">
          <ChipIcon />
        </div>

        {/* Balance */}
        <div className="mb-4">
          <p className="text-base-content/50 text-[10px] uppercase tracking-wider mb-0.5">
            Available Balance
          </p>
          <p className="text-base-content/60 text-xl font-bold">{balance}</p>
        </div>

        {/* Card Number & Expiry */}
        <div className="flex items-center justify-between">
          <p className="text-base-content/60 text-xs tracking-widest font-mono">
            {cardNumber}
          </p>
          <p className="text-base-content/60 text-xs font-mono">{expiry}</p>
        </div>
      </div>
    </div>
  );
}
