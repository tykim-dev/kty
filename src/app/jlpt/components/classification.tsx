'use client'
import React, {memo} from 'react';
import { MouseEvent } from 'react';
import { sortBy } from 'lodash';

type ClassificationProps = {
  classData: any,
  onClick?: (data: any) => any,
}

const Classification = (props: ClassificationProps) => {

  const {
    classData,
    onClick
  } = props

  const handleClick = (selectedData: any) => (e: MouseEvent<HTMLElement>) => {
    onClick && onClick(selectedData);
  }

  return (
    <>
      {classData.classifications.map((classificationInfo: any, cIdx: number) => {
        return (
          <div key={`class-${cIdx}`}>
            <h3 className="text-center text-2xl font-normal leading-normal mt-0 mb-2 text-blueGray-800 uppercase shadow-lg shadow-blue-500/50 p-2 mt-2">
              {classificationInfo.classificationNm}
            </h3>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-2">
              {classificationInfo.years.map((year: string, yIdx: number) => {
                return classificationInfo.months.map((month: string, mIdx: number) => {
                  return (
                    <button key={`btn-${cIdx}-${yIdx}-${mIdx}`} onClick={handleClick({classification: classificationInfo.classification, year: year, month: month})} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      {['N1','N2','N3'].includes(classData.level) ? `${year}/${month}` : `${year}${month}`}
                    </button>
                  );
                });
              })}
            </div>
          </div>
        );
      })}
    </>
  )
}

export default memo(Classification)