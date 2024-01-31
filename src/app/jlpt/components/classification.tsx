'use client'
import React, {memo, useEffect} from 'react';
import TabDefault from '@/app/components/Tabs/TabDefault';
import { usehWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';
import useClassTypeList from '@/app/swr/useClassTypeList';
import { sortBy } from 'lodash';

type ClassificationProps = {
  classData: any;
  onClick?: (data: any) => any,
}

const Classification = (props: ClassificationProps) => {

  const {
    classData,
    onClick
  } = props

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    // onClick && onClick(wordInfo);
  }

  return (
    <>
      {sortBy(classData.classificationArr).reverse().map((classification) => {
        return (
          <>
            <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 text-blueGray-800 uppercase">
              {classification}
            </h3>
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap">
                {sortBy(classData.yearArr).reverse().map((year) => {
                  return sortBy(classData.monthArr).reverse().map((month) => {
                    return (
                      <div className="w-full px-4 flex-1">
                        <span className="text-sm block my-1 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">{`${year}/${month}`}</span>
                      </div>
                    );
                  });
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  )
}

export default memo(Classification)