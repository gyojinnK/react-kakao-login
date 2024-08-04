import { create } from "zustand";

type State = {
  user: UserProfile | null;
};

type Action = {
  setUser: (newUser: UserProfile) => void;
  logoutUser: () => void;
};

export const useKakaoUserStore = create<State & Action>((set) => ({
  user: null,
  setUser: (newUser) => set({ user: newUser }),
  logoutUser: () => set({ user: null }),
}));
