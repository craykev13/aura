import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { startupTimeline } from "./PresenceEngine";
import { PresenceContext } from "./usePresence";

export function PresenceProvider({ children }: { children: ReactNode }) {
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = startupTimeline[stepIndex];

  useEffect(() => {
    if (stepIndex >= startupTimeline.length - 1) return;

    const timer = window.setTimeout(() => {
      setStepIndex((current) => current + 1);
    }, currentStep.duration);

    return () => window.clearTimeout(timer);
  }, [stepIndex, currentStep.duration]);

  return (
    <PresenceContext.Provider
      value={{
        state: currentStep.state,
        message: currentStep.message,
        stepIndex,
      }}
    >
      {children}
    </PresenceContext.Provider>
  );
}