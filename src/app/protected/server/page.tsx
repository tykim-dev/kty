import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"

const ProtectedServerPage = async () => {
  const session = await getServerSession(options);

  return (
    <div className="flex gap-2 ml-auto">
      <h1><i style={{color: 'red'}}>Server-Side</i> Protected Page.</h1>
      <p>You are logged in as : <b>{session?.user.name}</b></p>
    </div>
  )
}

export default ProtectedServerPage