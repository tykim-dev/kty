"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'

type SigninProps = {
  className?: string,
}

const SignInPage = (props: SigninProps) => {
  const { className } = props
  const { data: session } = useSession();

  return (
    <div className={`flex gap-2 ml-auto ${className}`}>
      {
        session
        ? <>
          {/* <Image
            src={session.user.image || ''}
            className="w-8 h-8 rounded-full"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p>{session.user.name || ""}</p>
          <p className="text-sky-600"> {session.user.email}</p> */}
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => signOut()}>
            Sign Out
          </button>
        </>
        : <>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => signIn()}>
              Sign In
            </button>
        </>
      }
    </div>
  )
}

export default SignInPage