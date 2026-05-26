"use client";

import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children?: ReactNode;
}

export function RyCard({ title, children }: CardProps) {
  return (
    <section
      style={{
        borderRadius: 16,
        border: "1px solid #222",
        background:
          "radial-gradient(circle at top left, #1a1a1a, #050509 55%, #000 100%)",
        padding: 16,
        boxShadow: "0 0 40px #000"
      }}
    >
      {title && (
        <h3
          style={{
            color: "#00e5ff",
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: 8
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: "#aaa", fontSize: 13 }}>{children}</div>
    </section>
  );
}
