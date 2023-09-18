"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import WordLayout from '@/app/components/Layout/WordLayout'
import { use } from "react";
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import CardTable from '@/app/components/Cards/CardTable';
import TableHolizontal from '@/app/components/Tables/TableHolizontal';

const JlptPage = () => {

  const { data: session } = useSession();
  // const [data, setData] = useState(null)
  const [type, setType] = useState('jlpt')
  const [level, setLevel] = useState(1)

  const { data: words = [], error } = useSWR({url: '/api/word', params: {type, level}}, {revalidateOnFocus:true});

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

  return (
    <WordLayout>
      
      <div className="w-full h-auto relative">
        <TableHolizontal title='JLPT 단어외우기' headers={headers} datas={words} />
      </div>
    </WordLayout>
  )
}

export default JlptPage