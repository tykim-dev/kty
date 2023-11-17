import useWord from '@/app/swr/useWord';
import { Carousel } from '@material-tailwind/react';
import WordCard from './WordCard';

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
      <Carousel className="rounded-xl align-middle" autoplay={true}>
        {words.map((wordInfo: any, index: number) => {
          return (
            <WordCard key={`word-${index}`} wordInfo={wordInfo} />
          )
        })}
      </Carousel>
    </>
  )
}

export default WordContent