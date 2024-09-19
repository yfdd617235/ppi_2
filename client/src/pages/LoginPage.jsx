import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'


function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return (
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            <div className='max-w-md w-full p-10 rounded-md border border-zinc-500'>
                {
                    signinErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                            {error}
                        </div>
                    ))
                }
                <h1 className='text-xl font-bold'>Login</h1>

                <form
                    onSubmit={onSubmit}>

                    {/* <input type='text' {...register("username", { required: true })}
                    className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                    placeholder='Username' />
                {errors.username && <p className='text-red-500'>Username is required</p>} */}

                    <input type='email' {...register("email", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                        placeholder='Email' />
                    {errors.email && <p className='text-red-500'>Email is required</p>}

                    <input type='password' {...register("password", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 my-2 rounded-md'
                        placeholder='Password' />
                    {errors.password && <p className='text-red-500'>Password is required</p>}

                    <button type='submit'
                    className='bg-sky-800 px-3 py-1 my-3 rounded-sm'
                    >Login</button>

                </form>

                <p className='flex gap-x-2 justify-between'>
                    Don´t have an account? <Link to="/register" className='text-sky-500'>Sign up</Link>
                </p>

            </div>
        </div>
    );
}

export default LoginPage;