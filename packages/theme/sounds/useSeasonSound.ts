"use client";

import { useSeason } from "@rapyard/theme/season-engine";
import { SeasonSounds } from "@rapyard/theme/sounds";
import { useEffect, useRef } from "react";

export function useSeasonAmbient() {
  const { season } = useSeason();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(SeasonSounds[season].ambient);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.src = SeasonSounds[season].ambient;
      audioRef.current.play().catch(() => {});
    }
  }, [season]);

  return null;
}

export function useUISound(type: "click" | "hover") {
  const { season } = useSeason();

  return () => {
    const sound = new Audio(SeasonSounds[season].ui[type]);
    sound.volume = 0.5;
    sound.play().catch(() => {});
  };
}
