"use client";

import { useState } from "react";

export function useAudioUpload() {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File, userId: string) {
    setUploading(true);
    setError(null);

    const form = new FormData();
    form.append("file", file);
    form.append("userId", userId);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: form
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setUploading(false);
      return null;
    }

    setUrl(json.publicUrl);
    setUploading(false);
    return json.publicUrl;
  }

  return { upload, uploading, url, error };
}
