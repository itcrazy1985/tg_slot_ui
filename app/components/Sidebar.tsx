import React from "react";

interface SidebarProps {
  onClose?: () => void;
}

const navItems = [
  {
    label: "Home",
    icon: "🏠",
    href: "/home",
    gradient: "bg-[#5B6AFF]",
    text: "text-white",
  },
  {
    label: "Activity Reward",
    icon: "🎉",
    href: "/activity",
    gradient: "bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400",
    text: "text-[#6B3FA0] font-semibold",
  },
  {
    label: "Refer & Earn",
    icon: "🎁",
    href: "/refer",
    gradient: "bg-gradient-to-r from-pink-200 via-purple-200 to-blue-300",
    text: "text-[#A23E7A] font-semibold",
  },
  {
    label: "CashBack Up to 1.5%",
    icon: "💎",
    href: "/cashback",
    gradient: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400",
    text: "text-white font-semibold",
    highlight: "text-yellow-300 font-bold",
  },
];

export function Sidebar({ onClose }: SidebarProps) {
  return (
    <aside className="bg-gradient-to-b from-[#181B2A] via-[#23263A] to-[#7C3AED] text-white w-64 md:w-72 lg:w-56 min-h-screen flex flex-col py-4 md:py-6 px-3 md:px-4 gap-4 border-r border-[#23263A]">
      {/* Logo */}
      <div className="flex items-center justify-between px-2">
        <div className="text-xl font-bold tracking-wide text-purple-400">TG LOTTERY</div>
        <button
          className="lg:hidden text-white p-2 hover:bg-[#23263A] rounded-lg"
          onClick={onClose}
        >
          {/* ...close icon... */}
        </button>
      </div>
      {/* Navigation */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-md ${item.gradient} ${item.text} transition-transform hover:scale-105`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>
                  {item.label.includes("1.5%") ? (
                    <>
                      CashBack Up to{" "}
                      <span className={item.highlight}>1.5%</span>
                    </>
                  ) : (
                    item.label
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

