"use client"; // 필수!
import { signIn, signOut, useSession } from "next-auth/react";

const SignInPage = () => {

  const { data: session } = useSession();

  return (
    <div className="flex gap-2 ml-auto">
      {
        session
        ? <>
          <img
            className="w-8 h-8 rounded-full"
            src={session.user.image || ""}
          />{session.user.name || ""}
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