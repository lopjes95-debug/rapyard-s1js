"use client";

import { useState } from "react";
import { RyButton } from "@rapyard/ui";
import { useAudioUpload } from "../hooks/useAudioUpload";
import { useProfile } from "../hooks/useProfile";
import { colors } from "@rapyard/theme";

export function UploadPanel() {
  const [file, setFile] = useState<File | null>(null);
  const { upload, uploading, url, error } = useAudioUpload();
  const profile = useProfile();

  async function handleUpload() {
    if (!file || !profile?.id) return;
    await upload(file, profile.id);
  }

  return (
    <div
      style={{
        borderRadius: 16,
        border: `1px solid #222`,
        padding: 16,
        background: "linear-gradient(135deg, #050509, #000)"
      }}
    >
      <div style={{ color: "#fff", fontSize: 13, marginBottom: 8 }}>
        Drop a verse into the Yard.
      </div>
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        style={{ color: colors.textMuted, fontSize: 12, marginBottom: 8 }}
      />
      <RyButton onClick={handleUpload} variant="ghost">
        {uploading ? "Uploading..." : "Upload to Yard"}
      </RyButton>
      {url && (
        <div style={{ color: "#0f0", fontSize: 11, marginTop: 6 }}>
          Uploaded: {url}
        </div>
      )}
      {error && (
        <div style={{ color: "#f33", fontSize: 11, marginTop: 6 }}>
          Error: {error}
        </div>
      )}
    </div>
  );
}
