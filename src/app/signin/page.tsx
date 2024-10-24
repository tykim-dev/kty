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
          <button onClick={() => signOut()} className="text-white align-middle rounded-md flex items-center border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Sign Out
          </button>
        </>
        : <>
          <button onClick={() => signIn()} className="text-white align-middle rounded-md flex items-center border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            {/* <img
              src="https://docs.material-tailwind.com/icons/metamask.svg"
              alt="metamask"
              className="h-5 w-5 mr-2"
            /> */}
            {/* <Image
              src={'https://docs.material-tailwind.com/icons/metamask.svg'}
              className="h-5 w-5 mr-2"
              width={500}
              height={500}
              alt="Picture of the author"
            /> */}
            Sign In
          </button>
        </>
      }
    </div>
  )
}

export default SignInPage