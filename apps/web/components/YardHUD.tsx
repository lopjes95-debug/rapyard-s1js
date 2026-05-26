"use client";

import { useProfile } from "../hooks/useProfile";
import { motion } from "framer-motion";
import { colors, typography } from "@rapyard/theme";

export function YardHUD() {
  const profile = useProfile();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        background:
          "linear-gradient(90deg, #000000dd, #050509ee, #000000dd)",
        borderBottom: "1px solid #111",
        zIndex: 50
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <motion.div
          animate={{ boxShadow: ["0 0 8px #ff6a00aa", "0 0 18px #ff6a00ff"] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse" }}
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            border: "2px solid #ff6a00"
          }}
        />
        <span
          style={{
            color: "#fff",
            fontWeight: 600,
            letterSpacing: 2,
            fontSize: 12,
            fontFamily: typography.mono
          }}
        >
          RAPYARD
        </span>
      </div>
      <div style={{ color: colors.textMuted, fontSize: 11 }}>
        lane: {profile?.lane ?? "unknown"} | tags:{" "}
        {profile?.tags?.join(", ") || "none"}
      </div>
    </motion.header>
  );
}
