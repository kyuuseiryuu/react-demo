import { create } from 'zustand'

interface Count {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
}

const useCountStore = create<Count>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

export { useCountStore as useStore };