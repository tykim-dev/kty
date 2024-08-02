import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

interface WordTodayStore {
    wordTodayInfo: {
        level: string,
    },
    wordTodayList: Array<any>,
    setWordTodayInfo: (wordTodayInfo: any) => void,
    setWordTodayList: (wordTodayList: any) => void,
    setWordTodayAnswer: (selectedData: any) => void,
    getWordTodayList: () => void,
    init: () => void,
}

export const useWordTodayStore = create<WordTodayStore>()(
    devtools(
        persist((set, get) => ({
            wordTodayInfo: {
                level: '',
            },
            wordTodayList: [],
            setWordTodayInfo: (wordTodayInfo) => set((state) => {
                state.wordTodayInfo = wordTodayInfo;
                state.getWordTodayList();
                return state;
            }),
            setWordTodayList: (wordTodayList: Array<any>) => set((state) => ({ wordTodayList: wordTodayList })),
            setWordTodayAnswer: (selectedData: any) => set((state) => {
                state.wordTodayList = state.wordTodayList.map((data: any) => {
                    if(data.questionNo === selectedData.questionNo) {
                        return {...data, selectedAnswer: selectedData.selectedAnswer}
                    } else {
                        return data
                    }
                });
                return state;
            }),
            getWordTodayList: async () => {
                const response = await fetch('/api/wordToday/list', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({params: get().wordTodayInfo}),
                })
                const resData = await response.json();
                set({ wordTodayList: resData });
            },
            init: () => set({ 
                wordTodayInfo: {
                    level: '',
                },
                wordTodayList: []
            }),
        }),
        {
          name: 'wordtoday-storage', // persist key
        }
      )
    )
  );