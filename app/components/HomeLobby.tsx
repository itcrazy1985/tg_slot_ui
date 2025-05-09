import React from "react";
import { Lobby } from "./Lobby";
import { Popular } from "./Popular";
import { Inhouse } from "./Inhouse";

export function HomeLobby() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <section className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/assets/images/banner/top_banner.jpg"
          alt="Jackpot Banner"
          className="w-full h-[280px] object-cover"
        />
      </section>

      {/* Lobby (Category Grid) */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Lobby</h2>
        <Lobby />
      </section>

      {/* Popular Games */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Popular</h2>
        <Popular />
      </section>

      {/* In-house Games */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">In-house</h2>
        <Inhouse />
      </section>
    </div>
  );
} 