'use client';
import React, {memo, useEffect} from 'react';
import { usePathname, useRouter } from 'next/navigation';
import TabDefault from '@/app/components/Tabs/TabDefault';
import { useLevelUpStore } from '@/app/store/levelUpStore';
import { useClassTypeList } from '@/app/swr/useLevelUp';
import { sortBy } from 'lodash';
import Classification from './classification';

type LevelUpListProps = {
  level?: string,
  onSearch?: (data: any) => any,
  onClick?: (data: any) => any,
}

const LevelUpList = (props: LevelUpListProps) => {
  const {
    level
  } = props
  
  const pathname = usePathname();
  const router = useRouter();
  const levelUpInfo =useLevelUpStore((state) => state.levelUpInfo);
  const setLevelUpInfo = useLevelUpStore((state) => state.setLevelUpInfo);

  const {data: classInfos = [], isLoading, error} = useClassTypeList({params: {level: levelUpInfo.level || level}});

  const handleClick = (selectedData: any) => {
    setLevelUpInfo({...levelUpInfo, ...selectedData});
    router.push('/levelUp/test');
  }

  const handleTabChange = (selectedData: any) => {
    setLevelUpInfo({...levelUpInfo, level: selectedData.level});
  }

  useEffect(() => {
    setLevelUpInfo({...levelUpInfo, level: level});
  }, [level])

  return (
    <>
      <div className="px-4 mx-auto w-full m-10 mb-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">레벨업(Level up)</h6>
                <strong>★ 10000개의 문제를 매번 다양하게 학습할 수 있습니다.</strong>
            </div>
          </div>
          <div className="flex-auto mt-3 lg:px-10 py-10 pt-0">
            <TabDefault onChange={handleTabChange} selectedIdx={Number(level?.substring(1,2)) - 1 || 0} data={
              sortBy(classInfos[0]?.levelArr).map((item, idx) => {
                return {
                  title: item,
                  content: (<Classification classData={classInfos[0]} onClick={(data) => handleClick(data)}/>),
                };
              })} />
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(LevelUpList)