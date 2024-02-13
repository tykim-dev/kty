"use client"; // 필수!
import { useJlptStore } from '@/app/store/jlptStore';
import JlptLayout from '@/app/components/Layout/JlptLayout'
import { useJlptList } from '@/app/swr/useJlpt';
import Question from '../components/question';
import { useEffect, memo, useState } from 'react';
import { isEmpty } from 'lodash';

const JlptTestPage = () => {
  const { jlptInfo, jlptList, getJlptList, init } = useJlptStore();

  useEffect(() => {
    getJlptList();
  }, [])

  return (
    <JlptLayout>
      <div className="px-4 mx-auto w-full m-10 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">JLPT</h6>
              <span
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              >
                {`${jlptInfo.year}/${jlptInfo.month}/${jlptInfo.level}`}
              </span>
            </div>
          </div>
          <div className="flex-auto mt-3 lg:px-10 py-10 pt-0">
              {jlptList.map((questionInfo: any, idx: number) => {
                return (<Question key={`jlpt-test-${idx}`} questionInfo={questionInfo} />)
              })}
          </div>
        </div>
      </div>
    </JlptLayout>
  )
}

export default memo(JlptTestPage)