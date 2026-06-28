export type PresenceState =
  | "awakening"
  | "greeting"
  | "loading"
  | "thinking"
  | "ready"
  | "success"
  | "error";

export type PresenceStep = {
  state: PresenceState;
  message: string;
  duration: number;
};

export const startupTimeline: PresenceStep[] = [
  {
    state: "awakening",
    message: "",
    duration: 900,
  },
  {
    state: "greeting",
    message: "Good Evening, Kevin.",
    duration: 2600,
  },
  {
    state: "loading",
    message: "Initializing Workspace",
    duration: 1500,
  },
  {
    state: "loading",
    message: "Loading Memory",
    duration: 1500,
  },
  {
    state: "thinking",
    message: "Preparing Intelligence",
    duration: 1600,
  },
  {
    state: "loading",
    message: "Connecting Tools",
    duration: 1500,
  },
  {
    state: "ready",
    message: "Ready.",
    duration: 2200,
  },
];