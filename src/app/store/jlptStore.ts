import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import jlptList from '../jlpt/components/jlptList';

type JlptStore = {
    jlptInfo: {
        level: string,
        classification: string,
        year: string,
        month: string,
    },
    jlptList: Array<any>,
    setJlptInfo: (jlptInfo: any) => void,
    setJlptList: (jlptList: any) => void,
    setJlptAnswer: (selectedData: any) => void,
    getJlptList: () => void,
    init: () => void,
}

export const useJlptStore = create(devtools<JlptStore>((set, get) => ({
    jlptInfo: {
        level: '',
        classification: '',
        year: '',
        month: '',
    },
    jlptList: [],
    setJlptInfo: (jlptInfo) => set((state) => ({ jlptInfo: jlptInfo })),
    setJlptList: (jlptList: Array<any>) => set((state) => ({ jlptList: jlptList })),
    setJlptAnswer: (selectedData: any) => set((state) => {
        state.jlptList = state.jlptList.map((data: any) => {
            if(data.questionNo === selectedData.questionNo) {
                return {...data, selectedAnswer: selectedData.selectedAnswer}
            } else {
                return data
            }
        });
        return state;
    }),
    // setJlptAnswer: (selectedData: any) => set((state) => ({ jlptList: state.jlptList.map((data: any) => {
    //                 if(data.questionNo === selectedData.questionNo) {
    //                     return {...data, selectedAnswer: selectedData.selectedAnswer}
    //                 } else {
    //                     return data
    //                 }
    //             }, true)
    //  })),
    getJlptList: async () => {
        const response = await fetch('/api/jlpt/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({params: get().jlptInfo}),
        })
        const resData = await response.json();
        set({ jlptList: resData });
    },
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