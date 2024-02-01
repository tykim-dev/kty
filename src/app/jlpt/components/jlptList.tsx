import React, {memo, useEffect} from 'react';
import TabDefault from '@/app/components/Tabs/TabDefault';
import { usehWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';
import useClassTypeList from '@/app/swr/useClassTypeList';
import { sortBy } from 'lodash';
import Classification from './classification';

type JlptListProps = {
  level?: string;
  onSearch?: (data: any) => any,
  onClick?: (data: any) => any,
}

const JlptList = (props: JlptListProps) => {

  const {
    level,
    onSearch
  } = props

  const {data: classInfos = [], isLoading, error} = useClassTypeList({params: {level: level}});

  const wordInfo =usehWordStore((state) => state.wordInfo);
  const setWordInfo = usehWordStore((state) => state.setWordInfo);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWordInfo({...wordInfo, [e.target.name]: e.target.value});
  }

  const handleSearch = (e: MouseEvent<HTMLElement>) => {
    onSearch && onSearch(wordInfo);
  }

  const handleClick = (selectedData: any) => {
    console.log(selectedData);
  }

  const handleTabChange = (selectedData: any) => {
    console.log(selectedData);
  }

  return (
    <>
      <div className="px-4 mx-auto w-full -m-24 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">JLPT 기출문제</h6>
            </div>
          </div>
          <div className="flex-auto mt-3 lg:px-10 py-10 pt-0">
            <TabDefault onChange={handleTabChange} selectedIdx={Number(level?.substring(1,2)) - 1 || 0} data={
              sortBy(classInfos[0]?.levelArr).map((item) => {
                return {
                  title: item,
                  content: (<Classification classData={classInfos[0]} onClick={(data) => handleClick(data)}/>),
                };
              })} />
            {}
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(JlptList)