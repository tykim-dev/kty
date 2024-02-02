import { create } from 'zustand'
import { devtools } from 'zustand/middleware';

type JlptStore = {
    jlptInfo: {
        level: string,
        classification: string,
        year: string,
        month: string,
    },
    jlptList: [],
    setJlptInfo: (jlptInfo: any) => void,
    setJlptList: (jlptList: any) => void,
    init: () => void,
}

export const useJlptStore = create(devtools<JlptStore>((set) => ({
    jlptInfo: {
        level: '',
        classification: '',
        year: '',
        month: '',
    },
    jlptList: [],
    setJlptInfo: (jlptInfo) => set((state) => ({ jlptInfo: jlptInfo })),
    setJlptList: (jlptList) => set((state) => ({ jlptList: jlptList })),
    init: () => set({ 
        jlptInfo: {
            level: '',
            classification: '',
            year: '',
            month: '',
        },
        jlptList: []
    }),
})));