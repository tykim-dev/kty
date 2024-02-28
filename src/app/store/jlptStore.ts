import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

interface JlptStore {
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

export const useJlptStore = create<JlptStore>()(
    devtools(
        persist((set, get) => ({
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
        }),
        {
          name: 'jlpt-storage', // persist key
        }
      )
    )
  );