'use client'
import '../style.css'
import Link from 'next/link'
import {useForm} from "react-hook-form";
import {error} from "next/dist/build/output/log";
import {yupResolver} from "@hookform/resolvers/yup";
import React, {useState} from "react";
import {toast, Toaster} from "react-hot-toast";
import {loginValidation} from "@/services/validations/validation";
import {loginRequest} from "@/services/requests/auth/register";
import {config200, config400} from "@/services/toast/config";
import {BeatLoader} from "react-spinners";


const Page = () => {

    let {register,handleSubmit,reset,formState:{errors
    }} = useForm(
        {
            resolver: yupResolver(loginValidation),
            mode:'all'
        }
    )

    let [loading, setLoading] = useState(false)


    const onSubmit = async  (data)=>{
        setLoading(true)



        let response = await loginRequest(data)

        if (response.status === 200) {
            setLoading(false)

            reset()
            toast.success('با موفقیت وارد شدید',config200)
        } else {
            setLoading(false)

            reset()
            toast.error(response,config400)
        }

    }

    return (
        <div className={'containerAuth'}>

            <div className="wrapper">
                <div className="title">
                   فرم ورود
                </div>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="field">
                        <input {...register('email')}  type="text" required/>
                        <label>ادرس ایمیل</label>
                    </div>
                    {
                        errors.email &&
                        <p className={'flex items-center my-5'}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                            </svg>
                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.email.message}</span>
                        </p>
                    }
                    <div className="field">
                        <input {...register('password')}  type="password" required/>
                        <label >رمز ورود</label>
                    </div>
                    {
                        errors.password &&
                        <p className={'flex items-center my-5'}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                            </svg>
                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.password.message}</span>
                        </p>
                    }
                    <div className="content">
                        <div className="pass-link">
                            <a href="#">رمز خود را فراموش کرده اید ؟</a>
                        </div>
                    </div>
                    <div className="field">
                        <button className={loading ? 'opacity-50 btt' : 'btt'} disabled={loading}>
                            {
                                loading ? <BeatLoader size={11}  speedMultiplier={0.7} color={'white'} />
                                    : ' ورود'
                            }
                        </button>
                    </div>
                    <div className="signup-link">
                       حسابی ندارید ؟      <Link href={'/register'}> ثبت نام کنید  </Link>
                    </div>
                </form>
            </div>
            <Toaster/>


        </div>
    );
};

export default Page;