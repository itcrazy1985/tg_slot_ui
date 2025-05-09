import React from "react";

const popularGames = [
  { name: "Pragmatic Play", image: "/assets/images/lobby/Pragmatic_Play.png" },
  { name: "Hacksaw", image: "/assets/images/lobby/playstar.png" },
  { name: "MegaH5", image: "/assets/images/lobby/JILI.png" },
  { name: "Live22", image: "/assets/images/lobby/KIRON.png" },
  { name: "EpicWin", image: "/assets/images/lobby/live22.png" },
];

export function Popular() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
      {popularGames.map((game) => (
        <div
          key={game.name}
          className="relative rounded-2xl shadow-xl border border-purple-400 cursor-pointer hover:scale-105 hover:shadow-purple-400/40 transition-transform flex flex-col items-center justify-end py-6 min-h-[240px] bg-[#7C3AED] overflow-hidden"
          style={{
            backgroundImage: `url(${game.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/30 z-0" />

          {/* Divider */}
          <div className="relative z-10 w-10 h-1 bg-white/30 rounded-full mb-3"></div>

          {/* Text with fire button */}
          <span className="relative z-10 flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full text-white text-lg md:text-xl font-extrabold tracking-wide shadow-lg border-2 border-yellow-300 animate-pulse mb-2">
            <span className="text-2xl">🔥</span>
            {game.name}
          </span>
        </div>
      ))}
    </div>
  );
}
