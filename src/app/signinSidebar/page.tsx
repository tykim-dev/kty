"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";

const SignInSidebarPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2 ml-auto">
      {
        session
        ? <>
          <button onClick={() => signOut()} className="focus:outline-none flex items-center font-bold leading-snug text-black opacity-50 hover:opacity-75" type="button">
            {session.user.name}님
            <i className="fas fa-right-from-bracket ml-1" />
          </button>
        </>
        : <>
          <button onClick={() => signIn()} className="focus:outline-none flex items-center font-bold text-black opacity-50 hover:opacity-75" type="button">
            로그인
            <i className="fas fa-right-to-bracket ml-1" />
          </button>
        </>
      }
    </div>
  )
}

export default SignInSidebarPage
