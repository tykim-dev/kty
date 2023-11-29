'use client'
import useWord from '@/app/swr/useWord';
import { Button, Card, CardBody, Carousel, IconButton, Typography } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import WordCard from './WordCard';
import { prevArrow, propTypesPrevArrow } from '@material-tailwind/react/types/components/carousel';

type WordTableProps = {
  conditions: any,
}

const WordContent = (props: WordTableProps) => {

  const {
    conditions
  } = props

  const {data: words = [], isLoading, error} = useWord(conditions);

  // const {data: pageInfo} = useWordPage(conditions);

  // if (isLoading) {
  //   return <p>조회중...</p>;
  // }

  return (
    <>
      <div className={`flex flex-wrap mt-4`}>
        <div className="w-full mb-4 px-4">
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              "bg-white"
            }
          >
            <Swiper
            // spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full"
          >
            {words.map((wordInfo: any, index: number) => {
              return (
                <SwiperSlide key={index}><WordCard wordInfo={wordInfo} /></SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
      </div>
    </>
  )
}

export default WordContent