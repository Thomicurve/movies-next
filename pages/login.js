import { useEffect } from 'react';
import Form from 'components/AuthForm';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';



export default function Login() {
    const { user } = useUser()
    const router = useRouter()
    useEffect(() => {
        user !== null && router.push('/')
    }, [user, router])

    return (
        <Form isLogin={true} />
    )
}
