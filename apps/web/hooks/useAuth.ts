"use client";

import { useState } from "react";
import { supabaseBrowser, signInEmail, signInOAuth, signOut as coreSignOut } from "@core/auth";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signInEmailHook(email: string) {
    setLoading(true);
    setError(null);
    const { error } = await signInEmail(email);
    if (error) setError(error.message);
    setLoading(false);
  }

  async function signInOAuthHook(provider: "google" | "github") {
    await signInOAuth(provider);
  }

  async function signOut() {
    await coreSignOut();
  }

  return {
    signInEmail: signInEmailHook,
    signInOAuth: signInOAuthHook,
    signOut,
    loading,
    error
  };
}
