"use client";

import { useEffect, useState } from "react";

export function useProfile() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("/api/profile")
      .then((r) => r.json())
      .then(setProfile);
  }, []);

  return profile;
}
