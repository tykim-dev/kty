"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import { useSearchParams, usePathname } from 'next/navigation'
import { useWordTodayStore } from '@/app/store/wordTodayStore';
import WordTodayLayout from "../components/Layout/WordTodayLayout";
import WordTodayTestPage from "./test/page";
import LevelList from "./components/levelList";

const JlptPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const wordTodayInfo =useWordTodayStore((state) => state.wordTodayInfo);
  
  const { data: session } = useSession();

  return (
    <WordTodayLayout>
      <LevelList level={searchParams.get('level') || wordTodayInfo.level || 'N1'} />
      <WordTodayTestPage  />
    </WordTodayLayout>
  )
}

export default JlptPage