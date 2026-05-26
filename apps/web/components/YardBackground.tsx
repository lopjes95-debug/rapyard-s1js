"use client";

import { motion } from "framer-motion";
import { colors } from "@rapyard/theme";

export function YardBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: `radial-gradient(circle at top, #1a1a1a 0, #050509 45%, #000 100%)`,
        overflow: "hidden",
        zIndex: -1
      }}
    >
      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.6, scale: 1.1 }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60%",
          height: "60%",
          background: `radial-gradient(circle, ${colors.accentWarm}33, transparent 70%)`,
          filter: "blur(40px)"
        }}
      />
      <motion.div
        initial={{ opacity: 0.1, scale: 1.1 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "60%",
          height: "60%",
          background: `radial-gradient(circle, ${colors.accentHot}33, transparent 70%)`,
          filter: "blur(40px)"
        }}
      />
    </div>
  );
}
