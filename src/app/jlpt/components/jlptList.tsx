'use client';
import React, {memo, useEffect} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import TabDefault from '@/app/components/Tabs/TabDefault';
import { useJlptStore } from '@/app/store/jlptStore';
import { useClassTypeList } from '@/app/swr/useJlpt';
import { sortBy } from 'lodash';
import Classification from './classification';

type JlptListProps = {
  level?: string,
  onSearch?: (data: any) => any,
  onClick?: (data: any) => any,
}

const JlptList = (props: JlptListProps) => {
  const {
    level
  } = props
  
  const pathname = usePathname();
  const router = useRouter();
  const jlptInfo =useJlptStore((state) => state.jlptInfo);
  const setJlptInfo = useJlptStore((state) => state.setJlptInfo);

  const {data: classInfos = [], isLoading, error} = useClassTypeList({params: {level: jlptInfo.level || level}});

  const handleClick = (selectedData: any) => {
    setJlptInfo({...jlptInfo, ...selectedData});
    router.push('/jlpt/test');
  }

  const handleTabChange = (selectedData: any) => {
    setJlptInfo({...jlptInfo, level: selectedData.level});
  }

  useEffect(() => {
    setJlptInfo({...jlptInfo, level: level});
  }, [level])

  return (
    <>
      <div className="px-4 mx-auto w-full m-10 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">JLPT 기출문제</h6>
            </div>
          </div>
          <div className="flex-auto mt-3 lg:px-10 py-10 pt-0">
            <TabDefault onChange={handleTabChange} selectedIdx={Number(level?.substring(1,2)) - 1 || 0} data={
              classInfos.map((item: any, idx: number) => {
                return {
                  title: item.level,
                  content: (<Classification classData={item} onClick={(data) => handleClick(data)}/>),
                };
              })} />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(JlptList)