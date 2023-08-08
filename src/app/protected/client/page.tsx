'use client'
import { useSession } from "next-auth/react"

const ProtectedClientPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2 ml-auto">
      <h1><i style={{color: 'red'}}>Client-Side</i> Protected Page.</h1>
      <p>You are logged in as : <b>{session?.user.name}</b></p>
    </div>
  )
}

export default ProtectedClientPage