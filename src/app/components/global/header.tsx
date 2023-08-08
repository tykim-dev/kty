import Link from "next/link"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

const Header = async () => {
  const session = await getServerSession(options);

  return (
    <header style={{display: 'flex', gap: 30}}>
      <Link href="/">홈</Link>
      <Link href="/protected/client">Protected (client)</Link>
      <Link href="/protected/server">Protected (server)</Link>
      {
        session 
        ? <>
          <Link href="/profile/client">Profile (client)</Link>
          <Link href="/profile/server">Profile (server)</Link>
          <Link href="/dashboard">Admin Dashboard</Link>
        </> 
        : <>
          <Link href="/signin">Sign In</Link>
        </>
      }
    </header>
  )
}

export default Header