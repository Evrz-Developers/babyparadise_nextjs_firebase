"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContentWrapper from '@/components/common/ContentWrapper'
import AUTH from '@/lib/firebase/auth';
import useLoggedUserStore from '@/store/loggedUserStore';
import { useRouter } from 'next/navigation';

const Login = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()
    const setUser = useLoggedUserStore((state) => state.setUser);
    const router = useRouter();

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const result = await AUTH.login(email, password);
            if (result.error) {
                console.error("Error signing in:", result.error);
            } else {
                const userWithLoginTime = {
                    ...result.user,
                    lastLoginAt: Date.now(),
                };
                setUser(userWithLoginTime);
                router.push('/');
            }
        } catch (error) {
            console.error("Error signing in:", error.message);
        }
    }

    return (
        <ContentWrapper className='h-full mt-20'>
            <div className='w-full max-w-[400px] h-full rounded md:shadow-md p-10 m-auto bg-slate-50'>
                <h3 className='text-2xl'> Login </h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-3 text-sm'>
                        <label htmlFor="email"> Email </label>
                        <input type="email" id='email' {...register('email', { required: 'This is required' })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.email ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.email && (
                            <label htmlFor="email" className='text-red-600 mt-1'> {errors.email.message} </label>
                        )}
                    </div>
                    <div className='mt-3 text-sm'>
                        <label htmlFor="password"> Password </label>
                        <input type="password" id='password' placeholder='enter password' {...register('password', { required: 'This is required' })} className={`px-5 py-3 w-full bg-gray-100 rounded-md ${errors?.password ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.password && (
                            <label htmlFor="email" className='text-red-600 mt-1'> {errors.password.message} </label>
                        )}
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='px-5 py-3 w-full bg-purple-300 rounded-md'> Login </button>
                    </div>

                </form>

                <div className='mt-2'>
                    <Link href={'/register'} className="text-link text-sm">
                        Create an account
                    </Link>
                </div>
            </div>
        </ContentWrapper>
    )
}

export default Login