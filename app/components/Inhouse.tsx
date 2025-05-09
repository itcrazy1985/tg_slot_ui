import React from "react";

const inhouseGames = [
  { name: "EvoPlay", image: "/assets/images/lobby/evoplay.png" },
  { name: "YellowBat", image: "/assets/images/lobby/FELIX.png" },
  { name: "JDB Gaming", image: "/assets/images/lobby/Dream_Gaming.png" },
  { name: "PGSoft", image: "/assets/images/lobby/PG_soft.png" },
  { name: "FaChai", image: "/assets/images/lobby/JILI.png" },
  { name: "EvoPlay", image: "/assets/images/lobby/evoplay.png" },
  { name: "YellowBat", image: "/assets/images/lobby/JDB.png" },
  { name: "JDB Gaming", image: "/assets/images/lobby/Dream_Gaming.png" },
  { name: "PGSoft", image: "/assets/images/lobby/PG_soft.png" },
  { name: "FaChai", image: "/assets/images/lobby/CQ9.png" },
];


export function Inhouse() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5">
      {inhouseGames.map((game, idx) => (
        <div
          key={game.name + idx}
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
  );
} 
// export function Inhouse() {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
//       {inhouseGames.map((game, idx) => (
//         <div
//           key={game.name + idx}
//           className="relative rounded-2xl shadow-xl border border-purple-400 cursor-pointer hover:scale-105 hover:shadow-purple-400/40 transition-transform flex flex-col items-end justify-end min-h-[240px] bg-[#7C3AED] overflow-hidden"
//           style={{
//             backgroundImage: `url(${game.image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           {/* Overlay for readability */}
//           <div className="absolute inset-0 bg-black/30 z-0" />

//           {/* Divider */}
//           <div className="relative z-10 w-10 h-1 bg-white/30 rounded-full mb-3 mx-auto"></div>

//           {/* Text with fire button */}
//           <span className="relative z-10 flex items-center gap-2 px-5 py-2 mb-4 mx-auto bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full text-white text-lg md:text-xl font-extrabold tracking-wide shadow-lg border-2 border-yellow-300 animate-pulse">
//             <span className="text-2xl">🔥</span>
//             {game.name}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }
