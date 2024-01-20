"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import JlptLayout from '@/app/components/Layout/JlptLayout'
import { useSearchParams, usePathname } from 'next/navigation'
import Classification from "./components/classification";


const JlptPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  console.log(searchParams.get('level'));
  const { data: session } = useSession();

  return (
    <JlptLayout>
      {searchParams.get('level')}
      <Classification />
    </JlptLayout>
  )
}

export default JlptPage