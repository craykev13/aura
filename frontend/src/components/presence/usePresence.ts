import { createContext, useContext } from "react";
import type { PresenceState } from "./PresenceEngine";

export type PresenceContextValue = {
  state: PresenceState;
  message: string;
  stepIndex: number;
};

export const PresenceContext =
  createContext<PresenceContextValue | null>(null);

export function usePresence() {
  const context = useContext(PresenceContext);

  if (!context) {
    throw new Error("usePresence must be used inside PresenceProvider");
  }

  return context;
}