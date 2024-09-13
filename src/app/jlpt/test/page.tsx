"use client"; // 필수!
import { useJlptStore } from '@/app/store/jlptStore';
import JlptLayout from '@/app/components/Layout/JlptLayout'
import Question from '../components/question';
import { useEffect, memo, useState } from 'react';
import ModalAnswer from '../components/modalAnswer';

const JlptTestPage = () => {
  const { jlptInfo, jlptList, getJlptList, init } = useJlptStore();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    getJlptList();
  }, [])

  return (
    mounted && <JlptLayout>
      <div onContextMenu={(e) => e.preventDefault()} onMouseDown={(e) => e.preventDefault()} className="px-4 mx-auto w-full m-10">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6 shadow-lg">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
              {
                { 
                  vocabulary : "文字語彙",
                  grammar : "文法",
                  reading : "読解",
                  listening : "聴解",
                }[jlptInfo.classification]
              }
              </h6>
              <span
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                {`${jlptInfo.year}/${jlptInfo.month} - ${jlptInfo.level}`}
              </span>
            </div>
          </div>
          <div className="flex-auto bg-white mt-2 sm:p-2 lg:px-10 p-10">
              {jlptList.map((questionInfo: any, idx: number) => {
                return (<Question key={`jlpt-test-${idx}`} questionInfo={questionInfo} />)
              })}
          </div>
          <div className="rounded-b bg-white mb-0 border-t p-6 sticky bottom-0 z-50 uppercase">
            <ModalAnswer title={`${jlptInfo.year}/${jlptInfo.month} - ${jlptInfo.level}`} />
          </div>
        </div>
      </div>
    </JlptLayout>
  )
}

export default memo(JlptTestPage)