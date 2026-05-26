"use client";

import { useEffect, useState } from "react";
import { subscribeToCyphers } from "@core/realtime";

export function useCypherRealtime() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const channel = subscribeToCyphers((payload) => {
      setEvents((prev) => [payload, ...prev]);
    });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return events;
}
