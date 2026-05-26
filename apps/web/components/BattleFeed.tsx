"use client";

import { RyCard } from "@rapyard/ui";
import { useBattleRealtime } from "../hooks/useBattleRealtime";
import { motion } from "framer-motion";
import { colors } from "@rapyard/theme";

export function BattleFeed() {
  const events = useBattleRealtime();

  return (
    <RyCard title="Battles">
      {events.length === 0 && <div>No battles yet.</div>}
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            padding: "6px 0",
            borderBottom: "1px solid #222",
            fontSize: 12
          }}
        >
          <span style={{ color: colors.accentHot }}>
            {e.new?.user1} vs {e.new?.user2}
          </span>
          {e.new?.winner && (
            <span style={{ color: "#0f0" }}> — winner: {e.new.winner}</span>
          )}
        </motion.div>
      ))}
    </RyCard>
  );
}
