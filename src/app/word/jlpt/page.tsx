"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import WordLayout from '@/app/components/Layout/WordLayout'
import { use } from "react";
import useSWRImmutable from 'swr/immutable'
import CardTable from '@/app/components/Cards/CardTable';
import TableHolizontal from '@/app/components/Tables/TableHolizontal';
import { useSearchWordStore } from '@/app/store/searchWord';
import { usehWordStore } from '@/app/store/wordStore';
import useWord from '@/app/swr/useWord';

const JlptPage = () => {

  const { data: session } = useSession();

  const add = useSearchWordStore((state) => state.add);
  const cart = useSearchWordStore((state) => state.cart);

  const [type, setType] = useState('jlpt')
  const [level, setLevel] = useState(1)

  const wordInfo = usehWordStore((state) => state.wordInfo);
  const setWordInfo = usehWordStore((state) => state.setWordInfo);
  
  const {data: words = [], error} = useWord({type, level});

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
      <button type='button' onClick={() => add(2)} className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>zustand test({cart})</button>
      <button type='button' onClick={() => {setWordInfo({type: 'jlpt'})}} className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>구분({wordInfo.type})</button>
      <div className="w-full h-auto relative">
        <TableHolizontal title='JLPT 단어외우기' headers={headers} datas={words} />
      </div>
    </WordLayout>
  )
}

export default JlptPage