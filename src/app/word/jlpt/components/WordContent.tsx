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

  const headers:TableHeadType[] = [
    {
      title: '단어',
      field: 'word',
      type: 'string',
      width: '25%',
    },
    {
      title: '읽기',
      field: 'read',
      type: 'string',
      width: '25%',
    },
    {
      title: '뜻',
      field: 'means',
      type: 'array',
      width: '25%',
    },
    {
      title: '예문',
      field: '',
      type: 'button',
      width: '25%',
    },
  ]

  const headersMobile:TableHeadType[] = [
    {
      title: '단어',
      fields: ['word', 'read', 'means'],
      type: 'string',
      width: '25%',
    },
    {
      title: '예문',
      fields: ['word'],
      type: 'button',
      width: '25%',
    },
  ]

  // if (isLoading) {
  //   return <p>조회중...</p>;
  // }

  return (
    <>
      <div className='xs:hidden sm:hidden'>
        <WordTable title='JLPT 단어외우기' headers={headers} data={words} />
      </div>
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden'>
        <WordList title='JLPT 단어외우기' headers={headersMobile} data={words} />
      </div>
    </>
  )
}

export default WordTableContent