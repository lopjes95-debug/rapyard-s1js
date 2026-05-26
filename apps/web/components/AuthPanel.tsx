"use client";

import { useState } from "react";
import { RyButton } from "@rapyard/ui";
import { useAuth } from "../hooks/useAuth";
import { colors } from "@rapyard/theme";

export function AuthPanel() {
  const [email, setEmail] = useState("");
  const { signInEmail, signInOAuth, signOut, loading, error } = useAuth();

  return (
    <div
      style={{
        borderRadius: 16,
        border: "1px solid #222",
        padding: 16,
        background: "linear-gradient(135deg, #050509, #000)"
      }}
    >
      <div style={{ color: "#fff", fontSize: 13, marginBottom: 8 }}>
        Sign in to lock your lane.
      </div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email for magic link"
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 999,
          border: "1px solid #333",
          background: "#050509",
          color: "#fff",
          fontSize: 12,
          marginBottom: 8
        }}
      />
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <RyButton variant="ghost" onClick={() => signInEmail(email)}>
          {loading ? "Sending..." : "Magic Link"}
        </RyButton>
        <RyButton variant="ghost" onClick={() => signInOAuth("google")}>
          Google
        </RyButton>
        <RyButton variant="ghost" onClick={() => signInOAuth("github")}>
          GitHub
        </RyButton>
      </div>
      <RyButton variant="ghost" onClick={() => signOut()}>
        Sign Out
      </RyButton>
      {error && (
        <div style={{ color: colors.danger, fontSize: 11, marginTop: 6 }}>
          {error}
        </div>
      )}
    </div>
  );
}
