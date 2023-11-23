'use client'
import { memo } from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';

type WordCardProps = {
  wordInfo: any,
}

const WordCard = (props: WordCardProps) => {

  const {
    wordInfo
  } = props

  return (
    <>
      <SwiperSlide>          
        <Card className="rounded-none relative h-full w-full">
          <CardBody className="h-96 text-center flex items-center justify-center">
            <div>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {wordInfo?.word}
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {wordInfo?.read}
              </Typography>
              <Typography variant="h4" color="blue-gray">
                {wordInfo?.means}
              </Typography>
            </div>
          </CardBody>
        </Card>
      </SwiperSlide>
{/* 
      <Card className="rounded-none relative h-full w-full">
        <CardBody className="h-96 text-center flex items-center justify-center">
          <div>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {wordInfo?.word}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {wordInfo?.read}
            </Typography>
            <Typography variant="h4" color="blue-gray">
              {wordInfo?.means}
            </Typography>
          </div>
        </CardBody>
      </Card> */}
    </>
  )
}

export default memo(WordCard)