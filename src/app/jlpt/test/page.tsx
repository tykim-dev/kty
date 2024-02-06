"use client"; // 필수!
import {useRouter} from 'next/router'
import { useJlptStore } from '@/app/store/jlptStore';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import JlptLayout from '@/app/components/Layout/JlptLayout'
import { useJlptList } from '@/app/swr/useJlpt';
import CardJlptQuestion from '@/app/components/Cards/CardJlptQuestion';

const JlptTestPage = () => {
  const jlptInfo =useJlptStore((state) => state.jlptInfo);
  const setJlptInfo = useJlptStore((state) => state.setJlptInfo);

  const {data: jlptList = [], isLoading, error} = useJlptList({params: jlptInfo});
  
  // const { data: session } = useSession();

  return (
    <JlptLayout>
      <div className="px-4 mx-auto w-full -m-24 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">JLPT</h6>
            </div>
          </div>
          <div className="grid grid-flow-row auto-rows-max bg-white">
              {jlptList.map((questionInfo: any, idx: number) => {
                return (<CardJlptQuestion key={`jlpt-test-${idx}`} questionInfo={questionInfo} />)
              })}
          </div>
        </div>
      </div>
    </JlptLayout>
  )
}

export default JlptTestPage