import React from "react";

const popularGames = [
  { name: "Win Go", image: "/assets/images/slot/Win_Go.png" },
  { name: "TRX Hash", image: "/assets/images/slot/TRX.png" },
  { name: "Slot", image: "/assets/images/slot/Slot.png" },
  { name: "Live Casino", image: "/assets/images/slot/Live_Casino.png" },
  { name: "Fish", image: "/assets/images/slot/Fish.png" },
];

export function Popular() {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
        {popularGames.map((game) => (
          <div
            key={game.name}
            className="flex flex-col bg-[#23263A] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="w-full aspect-[3/4] bg-black/10 flex items-center justify-center">
              <img
                src={game.image}
                alt={game.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full bg-gradient-to-t from-[#7C3AED] to-[#a78bfa] text-white text-center text-sm md:text-base font-bold py-2">
              {game.name}
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-3 px-6 py-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#a78bfa] text-white font-bold shadow-md hover:opacity-90 transition text-sm mx-auto block"
      >
        See More
      </button>
    </div>
  );
}
