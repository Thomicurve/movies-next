import Navbar from 'components/Navbar'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const { user } = useUser()
  const router = useRouter()

  useEffect(() => {
    user === null && router.push('/login')
  }, [user, router])

  return (
    <>
      <Navbar />

    </>
  )
}
