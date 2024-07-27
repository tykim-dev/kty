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
      {/* {sortBy(classData?.classificationArr).reverse().map((classification, cIdx) => {
        return (
          <div key={`class-${cIdx}`}>
            <h3 className="text-2xl font-normal leading-normal mt-0 mb-2 text-blueGray-800 uppercase shadow-lg shadow-blue-500/50 p-2 mt-2">
              {classification}
            </h3>
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-2">
              {sortBy(classData.yearArr).reverse().map((year, yIdx) => {
                return sortBy(classData.monthArr).reverse().map((month, mIdx) => {
                  return (
                    <button key={`btn-${cIdx}-${yIdx}-${mIdx}`} onClick={handleClick({classification: classification, year: year, month: month})} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                      {`${year}/${month}`}
                    </button>
                  );
                });
              })}
            </div>
          </div>
        );
      })} */}
      <div className="grid grid-cols-4 gap-4 sm:grid-cols-2">
        <button onClick={handleClick({classification: 'vocabulary'})} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          문자어휘 文字語彙 <br/> VOCABULARY
        </button>
        <button onClick={handleClick({classification: 'grammar'})} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          문법 文法 <br/> GRAMMAR
        </button>
        <button onClick={handleClick({classification: 'listening'})} className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          청해 聴解 <br/> Listening
        </button>
      </div>
    </>
  )
}

export default memo(Classification)