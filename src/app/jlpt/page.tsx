"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import JlptLayout from '@/app/components/Layout/JlptLayout'
import { useSearchParams, usePathname } from 'next/navigation'
import JlptList from "./components/jlptList";

const JlptPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const { data: session } = useSession();

  return (
    <JlptLayout>
      {/* {searchParams.get('level')} */}
      <JlptList level={searchParams.get('level') || 'N1'} />
    </JlptLayout>
  )
}

export default JlptPage