import Link from 'next/link'

function Home() {
  return (
    <>
      <div>test</div>
      <Link href={'/users'}>users</Link><br/>
      <Link href={'/login'}>login</Link><br/>
    </>
  )
}

export default Home
