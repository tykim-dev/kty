"use client"; // 필수!
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import WordLayout from '@/app/components/Layout/WordLayout'
import { use } from "react";
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'

const JlptPage = () => {

  const { data: session } = useSession();
  // const [data, setData] = useState(null)
  const [type, setType] = useState('jlpt')
  const [level, setLevel] = useState(1)

  const { data: words = [], error } = useSWR({url: '/api/word', params: {type, level}}, {revalidateOnFocus:true});

  return (
    <WordLayout>
      
      <div className="w-full h-auto relative">
        {words.map((wordInfo: any) => {
          return (
            <div key={`${wordInfo._id}`}>{wordInfo.word} {wordInfo.read} {wordInfo.means.join(',')}</div>
          )
        })}
      </div>
    </WordLayout>
  )
}

export default JlptPage