import { create } from "zustand";

export enum EntryState {
  GateClosed = "GateClosed",
  LaneSelect = "LaneSelect",
  StyleSelect = "StyleSelect",
  MicCheck = "MicCheck",
  GateOpen = "GateOpen",
  EnterYard = "EnterYard"
}

export interface UserProfile {
  lane: "rapper" | "producer" | "listener" | null;
  tags: string[];
  micReady: boolean;
}

interface RapYardStore {
  entryState: EntryState;
  profile: UserProfile;
  setEntryState: (s: EntryState) => void;
  setLane: (lane: UserProfile["lane"]) => void;
  setTags: (tags: string[]) => void;
  setMicReady: (ready: boolean) => void;
}

export const useRapYard = create<RapYardStore>((set) => ({
  entryState: EntryState.GateClosed,
  profile: { lane: null, tags: [], micReady: false },

  setEntryState: (s) => set({ entryState: s }),

  setLane: (lane) =>
    set((state) => ({
      profile: { ...state.profile, lane },
      entryState: EntryState.StyleSelect
    })),

  setTags: (tags) =>
    set((state) => ({
      profile: { ...state.profile, tags },
      entryState:
        state.profile.lane === "rapper"
          ? EntryState.MicCheck
          : EntryState.GateOpen
    })),

  setMicReady: (micReady) =>
    set((state) => ({
      profile: { ...state.profile, micReady },
      entryState: EntryState.GateOpen
    }))
}));
