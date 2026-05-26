"use client";

import { YardBackground } from "../../components/YardBackground";
import { YardHUD } from "../../components/YardHUD";
import { UploadPanel } from "../../components/UploadPanel";
import { CypherFeed } from "../../components/CypherFeed";
import { BattleFeed } from "../../components/BattleFeed";
import { motion } from "framer-motion";

export default function YardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        color: "#fff",
        paddingTop: 64,
        paddingBottom: 32,
        position: "relative"
      }}
    >
      <YardBackground />
      <YardHUD />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "2fr 1.2fr",
          gap: 20
        }}
      >
        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h1
            style={{
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#00e5ff"
            }}
          >
            The Yard
          </h1>
          <p style={{ color: "#888", fontSize: 13 }}>
            Live cyphers, battles, and drops. Industrial signal glow, concrete noise.
          </p>
          <CypherFeed />
          <BattleFeed />
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <AuthPanel />
          <UploadPanel />
        </section>
      </motion.div>
    </main>
  );
}
