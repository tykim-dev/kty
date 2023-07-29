import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth';

export default async function About() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <h1>{session?.user.name}</h1>
      ) : (
        <h1>You Shall Not Pass!!</h1>
      )}
    </>
  );
}