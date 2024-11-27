"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContentWrapper from '@/components/common/ContentWrapper'
import AUTH from '@/lib/firebase/auth';
import useLoggedUserStore from '@/store/loggedUserStore';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'

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
                toast.success("Logged in successfully");
                router.push('/');
            }
        } catch (error) {
            toast.error("Login failed");
        }
    }

    return (
        <ContentWrapper className='h-full mt-20'>
            <div className='w-full max-w-[400px] h-full rounded md:shadow-md p-10 m-auto bg-slate-50s bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white'>
                <h3 className='text-2xl'> Login </h3>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mt-3 text-sm'>
                        <label htmlFor="email"> Email </label>
                        <input type="email" id='email' placeholder='Enter your email' {...register('email', { required: 'This is required' })} className={`px-2 py-3 w-full bg-neutral-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md ${errors?.email ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.email && (
                            <label htmlFor="email" className='text-red-600 mt-1'> {errors.email.message} </label>
                        )}
                    </div>
                    <div className='mt-3 text-sm'>
                        <label htmlFor="password"> Password </label>
                        <input type="password" id='password' placeholder='Enter password' {...register('password', { required: 'This is required' })} className={`px-2 py-3 w-full bg-neutral-200 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-md ${errors?.password ? 'border-2 border-red-400' : undefined}`} />
                        {errors && errors.password && (
                            <label htmlFor="email" className='text-red-600 mt-1'> {errors.password.message} </label>
                        )}
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='px-5 py-3 w-full bg-color-primary-p70 rounded-md'> Login </button>
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