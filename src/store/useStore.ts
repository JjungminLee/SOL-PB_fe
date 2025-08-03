import { create } from "zustand";

interface UserState {
  isHomeless: boolean | null;
  isMarried: boolean | null;
  marriageYears: string;
  childrenCount: string;
  isHouseholder: boolean | null;
  hasAccount: boolean | null;
  hasHouseHistory: boolean | null;
  preferredRegion: string;
  setValue: (key: string, value: any) => void;
}

export const useUserStore = create<UserState>((set) => ({
  isHomeless: null,
  isMarried: null,
  marriageYears: "",
  childrenCount: "",
  isHouseholder: null,
  hasAccount: null,
  hasHouseHistory: null,
  preferredRegion: "",
  setValue: (key, value) => set({ [key]: value }),
}));
