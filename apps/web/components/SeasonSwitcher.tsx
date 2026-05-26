"use client";

import { useSeason } from "@rapyard/theme/season-engine";
import { RyButton } from "@rapyard/ui";

export function SeasonSwitcher() {
  const { season, setSeason } = useSeason();

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {["S1JS", "S2", "S3"].map((s) => (
        <RyButton
          key={s}
          variant={season === s ? "primary" : "ghost"}
          onClick={() => setSeason(s as any)}
        >
          {s}
        </RyButton>
      ))}
    </div>
  );
}
