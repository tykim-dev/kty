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
      {/* {sortBy(classData.classificationArr).map((item) => {
        return item;
      })} */}
      aaaaaaaaaaaaaaaa
    </>
  )
}

export default memo(Classification)