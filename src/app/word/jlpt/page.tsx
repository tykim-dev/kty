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
import SearchBar from './components/SearchBar';

const JlptPage = () => {

  const { data: session } = useSession();

  const wordInfo = usehWordStore((state) => state.wordInfo);
  const setWordInfo = usehWordStore((state) => state.setWordInfo);
  
  const {data: words = [], error} = useWord({type: wordInfo.type, level: wordInfo.level});

  const handleSearch = (data: any) => {
    setWordInfo(data);
  }

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
      <SearchBar onSearch={(data: any) => handleSearch(data)} />

      <div className="w-full h-auto relative">
        <TableHolizontal title='JLPT 단어외우기' headers={headers} datas={words} />
      </div>
    </WordLayout>
  )
}

export default JlptPage