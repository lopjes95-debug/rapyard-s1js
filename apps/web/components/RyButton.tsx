"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}

export function RyButton({ children, onClick, variant = "primary" }: ButtonProps) {
  const base: React.CSSProperties = {
    padding: "10px 22px",
    borderRadius: 999,
    border: "1px solid #00e5ff",
    cursor: "pointer",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontSize: 12,
    transition: "all 0.2s ease"
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      ...base,
      background: "linear-gradient(90deg, #ff6a00, #ff0080)",
      color: "#000",
      boxShadow: "0 0 18px #ff6a00aa"
    },
    ghost: {
      ...base,
      background: "transparent",
      color: "#00e5ff",
      borderColor: "#00e5ff55"
    }
  };

  return (
    <button
      onClick={onClick}
      style={styles[variant]}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
      }}
    >
      {children}
    </button>
  );
}
