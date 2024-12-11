// LOGIN PAGE
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useLoggedUserStore from '@/store/loggedUserStore';
import Login from '@/components/auth/Login';

const LoginPage = () => {
    const isLoggedIn = useLoggedUserStore((state) => state.isLoggedIn);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/');
        } else {
            router.push('/login');
        }
    }, [isLoggedIn, router]);

    return (
        <Login />
    );
}

export default LoginPage;