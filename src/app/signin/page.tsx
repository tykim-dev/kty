"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'

const SignInPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2 ml-auto">
      {
        session
        ? <>
          <button onClick={() => signOut()} className="rounded-lg border border-white px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75" type="button">
            {session.user.name}님
            <i className="fas fa-right-from-bracket ml-1" />
          </button>
        </>
        : <>
          <button onClick={() => signIn()} className="rounded-lg border border-white px-3 py-2 flex items-center text-xs font-bold leading-snug text-white hover:opacity-75" type="button">
            로그인
            <i className="fas fa-right-to-bracket ml-1" />
          </button>
        </>
      }
    </div>
  )
}

export default SignInPage
