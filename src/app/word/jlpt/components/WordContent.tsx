import useWord from '@/app/swr/useWord';
import WordTable from './WordTable';
import WordList from './WordList';

type WordTableProps = {
  conditions: any,
}

const WordTableContent = (props: WordTableProps) => {

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
      <div className='xs:hidden sm:hidden'>
        <WordTable title='JLPT 단어외우기' data={words} />
      </div>
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden'>
        <WordList title='JLPT 단어외우기' data={words} />
      </div>
    </>
  )
}

export default WordTableContent