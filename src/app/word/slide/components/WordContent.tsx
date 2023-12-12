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
import ModalFullScreen from '@/app/components/Modals/ModalFullScreen';

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

  return (
    <>
      <ModalFullScreen visible={words.length > 0} title='단어암기' onChange={setFullScreen}>
        <Swiper
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
              <SwiperSlide key={index}><WordCard fullScreen={isFullScreen} wordInfo={wordInfo} /></SwiperSlide>
            )
          })}
        </Swiper>
      </ModalFullScreen>
    </>
  )
}

export default WordContent