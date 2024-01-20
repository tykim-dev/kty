import React, {memo} from 'react';
import TabDefault from '@/app/components/Tabs/TabDefault';
import { usehWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';

type ClassificationProps = {
  level?: string;
  onSearch?: (data: any) => any,
  onClick?: (data: any) => any,
}

const Classification = (props: ClassificationProps) => {

  const {
    level,
    onSearch
  } = props

  const wordInfo =usehWordStore((state) => state.wordInfo);
  const setWordInfo = usehWordStore((state) => state.setWordInfo);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setWordInfo({...wordInfo, [e.target.name]: e.target.value});
  }

  const handleSearch = (e: MouseEvent<HTMLElement>) => {
    onSearch && onSearch(wordInfo);
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
            <TabDefault selectedIdx={Number(level?.substring(1,2)) - 1 || 0} data={[
              {title: 'N1', content: 'content1'},
              {title: 'N2', content: 'content2'},
              {title: 'N3', content: 'content3'},
              {title: 'N4', content: 'content4'},
              {title: 'N5', content: 'content5'},
            ]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Classification)