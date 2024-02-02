import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

type WordStore = {
    wordInfo: {
        type: string,
        level: number,
        part: string,
    },
    wordList: [],
    setWordInfo: (wordInfo: any) => void,
    setWordList: (wordList: any) => void,
    init: () => void,
}

export const useWordStore = create(devtools<WordStore>((set) => ({
    wordInfo: {
        type: 'jlpt',
        level: 1,
        part: '',
    },
    wordList: [],
    setWordInfo: (wordInfo) => set((state) => ({ wordInfo: wordInfo })),
    setWordList: (wordList) => set((state) => ({ wordList: wordList })),
    init: () => set({ 
        wordInfo: {
            type: 'jlpt',
            level: 1,
            part: '',
        },
        wordList: []
    }),
})));