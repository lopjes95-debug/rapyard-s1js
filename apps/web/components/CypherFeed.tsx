"use client";

import { RyCard } from "@rapyard/ui";
import { useCypherRealtime } from "../hooks/useCypherRealtime";
import { motion } from "framer-motion";
import { colors } from "@rapyard/theme";

export function CypherFeed() {
  const events = useCypherRealtime();

  return (
    <RyCard title="Live Cyphers">
      {events.length === 0 && <div>No live cyphers yet.</div>}
      {events.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            padding: "6px 0",
            borderBottom: "1px solid #222",
            fontSize: 12
          }}
        >
          <span style={{ color: colors.accentWarm }}>Round {e.new?.round}</span>{" "}
          <span style={{ color: colors.textMuted }}>by {e.new?.user_id}</span>
        </motion.div>
      ))}
    </RyCard>
  );
}
