import React from "react";

const categories = [
  { name: "Win Go", image: "/assets/images/slot/Win_Go.png" },
  { name: "TRX Hash", image: "/assets/images/slot/TRX.png" },
  { name: "Slot", image: "/assets/images/slot/Slot.png" },
  { name: "Live Casino", image: "/assets/images/slot/Live_Casino.png" },
  { name: "Fish", image: "/assets/images/slot/Fish.png" },
  { name: "Arcade", image: "/assets/images/slot/Arcade.png" },
  { name: "Table", image: "/assets/images/slot/Table.png" },
  { name: "Crash", image: "/assets/images/slot/Crash.png" },
];

export function Lobby() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="relative rounded-2xl shadow-xl border border-purple-400 cursor-pointer hover:scale-105 hover:shadow-purple-400/40 transition-transform flex flex-col items-end justify-end min-h-[240px] bg-[#7C3AED] overflow-hidden"
          style={{
            backgroundImage: `url(${cat.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-0" />

          {/* Divider */}
          <div className="relative z-10 w-10 h-1 bg-white/30 rounded-full mb-3 mx-auto"></div>

          {/* Text with fire button */}
          <span className="relative z-10 flex items-center gap-2 px-5 py-2 mb-4 mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full text-white text-lg md:text-xl font-extrabold tracking-wide shadow-lg border-2 border-yellow-300 animate-pulse">
            <span className="text-2xl">🔥</span>
            {cat.name}
          </span>
        </div>
      ))}
    </div>
  );
}
