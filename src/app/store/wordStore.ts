import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

type WordStore = {
    wordInfo: {
        type: string
    },
    setWordInfo: (wordInfo: any) => void,
    init: () => void,
}

export const usehWordStore = create(devtools<WordStore>((set) => ({
    wordInfo: {
        type: 'jlpt'
    },
    setWordInfo: (wordInfo) => set((state) => ({ wordInfo: wordInfo })),
    init: () => set({ wordInfo: {
        type: 'jlpt'
    } }),
})));