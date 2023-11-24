'use client'
import React, {memo} from 'react';
import { Typography } from '@material-tailwind/react';
import { SwiperSlide } from 'swiper/react';

type WordCardProps = {
  wordInfo: any,
}

const WordCard = (props: WordCardProps) => {

  const {
    wordInfo
  } = props

  return (
    <>
      {/* <SwiperSlide> */}
        <div className="h-96 text-center flex flex-col items-center justify-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {wordInfo?.word}
            </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {wordInfo?.read}
          </Typography>
          <Typography variant="h4" color="blue-gray" className=''>
            {wordInfo?.means}
          </Typography>
        </div>
      {/* </SwiperSlide> */}
    </>
  )
}

export default memo(WordCard)