"use client"; // 필수!
import {useRouter} from 'next/router'
import { useJlptStore } from '@/app/store/jlptStore';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import JlptLayout from '@/app/components/Layout/JlptLayout'
import { useSearchParams, usePathname } from 'next/navigation'

const JlptTestPage = () => {
  const jlptInfo =useJlptStore((state) => state.jlptInfo);
  const setJlptInfo = useJlptStore((state) => state.setJlptInfo);
  
  const { data: session } = useSession();

  return (
    <>시험보기 {JSON.stringify(jlptInfo)}</>
  )
}

export default JlptTestPage