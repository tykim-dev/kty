'use client'
import React, {memo} from 'react';
import { SwiperSlide } from 'swiper/react';

type WordCardProps = {
  wordInfo: any,
  fullScreen: boolean,
}

const WordCard = (props: WordCardProps) => {

  const {
    wordInfo,
    fullScreen = false,
  } = props

  return (
    <>
      <div className={`${fullScreen ? 'h-[calc(100vh-80px)]' : 'h-96'} text-center flex flex-col items-center justify-center`}>
        <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
          {wordInfo?.word}
        </h3>
        <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
          {wordInfo?.read}
        </h3>
        <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
          {wordInfo?.means}
        </h3>
      </div>
    </>
  )
}

export default memo(WordCard)