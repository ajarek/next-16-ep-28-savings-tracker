import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Record } from "@/types/typeRecord"
import { financialGoals } from "@/data/financialGoals"

type RegisterState = {
  items: Record[]
  addItemToRecords: (item: Record) => void
  removeItemFromRecords: (id: number) => void
  removeAllFromRecords: () => void
}

export const useFinancialGoals = create<RegisterState>()(
  persist(
    (set, get) => ({
      items: [...financialGoals],

      addItemToRecords: (item: Record) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromRecords: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      removeAllFromRecords: () => set({ items: [] }),
    }),

    {
      name: "financialGoals",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
