import type { ReactNode, CSSProperties } from "react";
import { colors, radii, shadows, spacing, typography } from "@rapyard/theme";

export function RyButton({
  children,
  onClick,
  variant = "primary"
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
}) {
  const base: CSSProperties = {
    padding: "10px 22px",
    borderRadius: radii.pill,
    cursor: "pointer",
    letterSpacing: 1.5,
    textTransform: "uppercase",
    fontSize: 12,
    transition: "all 0.2s ease",
    fontFamily: typography.mono
  };

  const variants: Record<string, CSSProperties> = {
    primary: {
      ...base,
      background: `linear-gradient(90deg, ${colors.accentWarm}, ${colors.accentHot})`,
      color: "#000",
      border: "none",
      boxShadow: shadows.glowWarm
    },
    ghost: {
      ...base,
      background: "transparent",
      color: colors.accent,
      border: `1px solid ${colors.accent}55`
    },
    danger: {
      ...base,
      background: "transparent",
      color: colors.danger,
      border: `1px solid ${colors.danger}aa`
    }
  };

  return (
    <button
      onClick={onClick}
      style={variants[variant]}
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

export function RyCard({
  title,
  children
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <section
      style={{
        borderRadius: radii.card,
        border: `1px solid ${colors.border}`,
        background:
          "radial-gradient(circle at top left, #151515, #050509 55%, #000 100%)",
        padding: spacing.md,
        boxShadow: "0 0 40px #000"
      }}
    >
      {title && (
        <h3
          style={{
            color: colors.accent,
            fontSize: 14,
            textTransform: "uppercase",
            letterSpacing: 2,
            marginBottom: spacing.sm,
            fontFamily: typography.mono
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ color: colors.textMuted, fontSize: 13 }}>{children}</div>
    </section>
  );
}
