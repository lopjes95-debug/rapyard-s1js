"use client";

import { create } from "zustand";
import { Seasons, SeasonName } from "./seasons";

interface SeasonStore {
  season: SeasonName;
  theme: (typeof Seasons)[SeasonName];
  setSeason: (s: SeasonName) => void;
}

export const useSeason = create<SeasonStore>((set) => ({
  season: "S1JS",
  theme: Seasons["S1JS"],
  setSeason: (s) =>
    set({
      season: s,
      theme: Seasons[s]
    })
}));
