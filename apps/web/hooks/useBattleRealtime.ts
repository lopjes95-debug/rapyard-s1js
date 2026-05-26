"use client";

import { useEffect, useState } from "react";
import { subscribeToBattles } from "@core/realtime";

export function useBattleRealtime() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const channel = subscribeToBattles((payload) => {
      setEvents((prev) => [payload, ...prev]);
    });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return events;
}
