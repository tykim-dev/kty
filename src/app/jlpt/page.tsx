"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import WordLayout from '@/app/components/Layout/WordLayout'
import { useSearchParams } from 'next/navigation'


const JlptPage = () => {
  const searchParams = useSearchParams();
  const { data: session } = useSession();
console.log(searchParams.get('level'));
  return (
    <WordLayout>
      <div className="w-full h-auto relative">
        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          문자/어휘
        </button>
        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          독해
        </button>
        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          청해
        </button>
      </div>
    </WordLayout>
  )
}

export default JlptPage