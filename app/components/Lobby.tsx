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
    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-5">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="flex flex-col bg-[#7C3AED] rounded-xl overflow-hidden shadow-lg"
        >
          <div className="w-full aspect-square bg-black/10 flex items-center justify-center">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full bg-[#7C3AED] text-white text-center text-base md:text-lg font-bold py-2">
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
}
