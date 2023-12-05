'use client'
import { useState } from 'react';
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

  const [isFullScreen, setFullScreen] = useState<boolean>(false);
  const {data: words = [], isLoading, error} = useWord(conditions);

  // const {data: pageInfo} = useWordPage(conditions);

  // if (isLoading) {
  //   return <p>조회중...</p>;
  // }

  const handleChangeScreen = (size: string | undefined) => {
    setFullScreen(size === 'full');
  }

  return (
    <>
      <div className={`flex flex-wrap ${isFullScreen ? 'fixed z-50 w-full h-full top-0 left-0 flex items-center justify-center' : ''}`}>
        <div className="w-full">
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full shadow-lg rounded " +
              "bg-blueGray-100 border-0"
            }
          >
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-right justify-between">
              {/* <h6 className="text-blueGray-700 text-xl font-bold">My account</h6> */}
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleChangeScreen('full')}
              >
                전체화면
              </button>
            </div>
          </div>
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