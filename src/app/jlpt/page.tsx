"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import JlptLayout from '@/app/components/Layout/JlptLayout'
import { useSearchParams, usePathname } from 'next/navigation'
import JlptList from "./components/jlptList";
import { useJlptStore } from '@/app/store/jlptStore';
import { Suspense } from "react";

const JlptPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const jlptInfo =useJlptStore((state) => state.jlptInfo);
  
  const { data: session } = useSession();

  return (
    <Suspense>
      <JlptLayout>
        <JlptList level={searchParams.get('level') || jlptInfo.level || 'N1'} />
      </JlptLayout>
    </Suspense>
  )
}

export default JlptPage