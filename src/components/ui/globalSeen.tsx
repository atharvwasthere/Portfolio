import { create } from "zustand";

type UIState = { splashSeen: boolean; markSplashSeen: () => void };

export const useUI = create<UIState>((set) => ({
  splashSeen: false,
  markSplashSeen: () => set({ splashSeen: true }),
}));
