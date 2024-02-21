import Link from "next/link"
import { getServerSession } from "next-auth"
import { options } from "@/app/api/auth/[...nextauth]/options";

const Header = async () => {
  const session = await getServerSession(options);

  return (
    <header style={{display: 'flex', gap: 30}}>
      <Link scroll={false} href="/">홈</Link>
      <Link scroll={false} href="/protected/client">Protected (client)</Link>
      <Link scroll={false} href="/protected/server">Protected (server)</Link>
      {
        session 
        ? <>
          <Link scroll={false} href="/profile/client">Profile (client)</Link>
          <Link scroll={false} href="/profile/server">Profile (server)</Link>
          <Link scroll={false} href="/dashboard">Admin Dashboard</Link>
        </> 
        : <>
          <Link scroll={false} href="/signin">Sign In</Link>
        </>
      }
    </header>
  )
}

export default Header