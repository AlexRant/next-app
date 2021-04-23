import Link from 'next/link'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

  useEffect(() => { //this func will run once - when the component first seen 
    const router = useRouter();

    setTimeout(() => {
      // router.go(-1)
      router.push('/')
    }, 3000)
  }, [])

  return (
    <>
    <Head>
      <title>User List | Not Found</title>
    </Head>
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>Go back to the <Link href="/"><a>homepage</a></Link></p>
    </div>
    </>
  );
}

export default NotFound;