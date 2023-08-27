import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Combo {
  name: string
  subtotal: number
  gift: number
  total: number
  logo: string
  id: number
  store: string
}

export interface ComboStore {
  combo: Combo | null
  setCombo: (comboData: Partial<Combo> | null) => void
}

const useCombo = create<ComboStore>()(
  persist(
    (set) => ({
      combo: null,

      setCombo: (comboData) => {
        set((state) => ({
          ...state,

          combo: {
            name: comboData?.name || '',
            subtotal: comboData?.subtotal || 0,
            gift: comboData?.gift || 0,
            total: comboData?.total || 0,
            logo: comboData?.logo || '',
            id: comboData?.id || 0,
            store: comboData?.store || '',
          },
        }))
      },
    }),
    {
      name: 'combo-storage',
    },
  ),
)

export default useCombo
