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
          <Image
            src={session.user.image || ''}
            className="w-8 h-8 rounded-full"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p>{session.user.name || ""}</p>
          <p className="text-sky-600"> {session.user.email}</p>
          <button className="text-red-500" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
        : <>
          <button className="text-green-600" onClick={() => signIn()}>
              Sign In
            </button>
        </>
      }
    </div>
  )
}

export default SignInPage