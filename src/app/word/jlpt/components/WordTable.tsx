import { usehWordStore } from '@/app/store/wordStore';
import { ChangeEvent, MouseEvent } from 'react';
import useWord from '@/app/swr/useWord';
import useWordPage from '@/app/swr/useWordPage';
import TableHolizontal from '@/app/components/Tables/TableHolizontal';

type WordTableProps = {
  conditions: any,
}

const WordTable = (props: WordTableProps) => {

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
      visibleResponsive: ['lg', 'md', 'sm'],
    },
    {
      title: '뜻',
      field: 'means',
      type: 'array',
      width: '25%',
      visibleResponsive: ['lg', 'md', 'sm'],
    },
    {
      title: '예문',
      field: '',
      type: 'button',
      width: '25%',
    },
  ]

  // if (isLoading) {
  //   return <p>조회중...</p>;
  // }

  return (
    <>
      <TableHolizontal title='JLPT 단어외우기' headers={headers} data={words} />
    </>
  )
}

export default WordTable