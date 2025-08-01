'use client'
import profile from "../../../../public/f.png";
import React, {useEffect, useState} from "react";

import {axiosRequest} from "@/services/axios/config";
import {getMe, logout} from "@/services/requests/auth/register";
import {toast, Toaster} from "react-hot-toast";
import {config200, config400} from "@/services/toast/config";
import { useRouter } from 'next/navigation'
import {getCookie} from "@/helpers";


function Header() {



      let [user, setUser] = useState([])

    const router = useRouter();

    let dateTime = new Intl.DateTimeFormat('fa-IR',
        {year: 'numeric',month: 'short',day: 'numeric'}).format( new Date())

    let newText = dateTime.replace(/ /g, " / ");


    function getCookie() {
        let cookies = document.cookie.split(';')
        let r = cookies.find((c)=>{
            return c.includes('token')
        })
        return  r.split('=')[1]
    }

    const getUser = async () => {
            let token =  getCookie()
         let response = await getMe(token);
         setUser(response.data.data)

    }

            useEffect(()=>{

                getUser()


            },[])

    const handleDelete = async () => {

        let token =  getCookie()

        let response = await logout(token);
        if (response.status === 200) {
            document.cookie = 'token=; path=/; max-age=0'
            router.push('/login')
            toast.success('از سسیستم خارج شدید',config200)

        } else {

            toast.error(response,config400)
        }

    }


    return (
        <>
            <header className={'p-5 flex items-center justify-between'}>
                <section className={'flex '}>


                    <div className={'flex items-center'}>
                        <div className={' w-[56px] p-1 rounded-full  bg-green-500  '}>
                            <img src={user && user.image} className={' rounded-full size-12 '} alt={'profile'}/>
                        </div>
                        <div className={'ms-4'}>
                            <h1 className={'text-gray-600 text-sm'}> سلام {user && user.name}</h1>
                            <p className={' mt-3 text-[0.8rem]'}>
                                <span className={'p-1 rounded-full px-2 bg-orange-100 text-orange-700'}>{user.roles ? user.roles : 'نقشی ندارید'}</span>
                                <span className={'ms-3 p-1 text-gray-700 bg-gray-100 text-[0.8rem] px-2 rounded-full'}>{newText}</span>
                                <span onClick={handleDelete} className={'p-1.5 rounded-lg px-3 mr-4 border ' +
                                    'border-red-400 hover:bg-red-400 cursor-pointer text-red-400 transition-all hover:text-white'}>خروج</span>
                            </p>

                        </div>
                    </div>


                </section>


                <section  className={'flex items-center'}>
                    <div className={'flex items-center gap-x-5 me-8'}>
                        <div className={'me-3 cursor-pointer '}>
                            <svg width={26} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                <path d="M25.941406 2C25.464844 2.027344 25.074219 2.386719 25.007813 2.859375C24.941406 3.332031 25.21875 3.785156 25.671875 3.945313C32.292969 6.261719 37 12.566406 37 20C37 29.402344 29.402344 37 20 37C12.566406 37 6.261719 32.292969 3.945313 25.671875C3.78125 25.203125 3.296875 24.925781 2.8125 25.015625C2.324219 25.109375 1.980469 25.546875 2 26.042969C2.515625 38.28125 12.640625 48 25 48C37.691406 48 48 37.691406 48 25C48 12.640625 38.28125 2.515625 26.042969 2C26.007813 2 25.972656 2 25.941406 2 Z M 31.84375 5.203125C40.074219 8.039063 46 15.78125 46 25C46 36.609375 36.609375 46 25 46C15.78125 46 8.039063 40.074219 5.203125 31.84375C8.691406 36.183594 14 39 20 39C30.480469 39 39 30.480469 39 20C39 14 36.183594 8.691406 31.84375 5.203125Z" fill="#7D7D7D" />
                            </svg>
                        </div>
                        <div className={'bel'}>
                            <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <path d="M12.81 46.31c.24.06.49.09.73.09 1.34 0 2.57-.91 2.91-2.27 2.78-11.12 9.4-20.97 18.63-27.71 1.34-.98 1.63-2.85.65-4.19-.98-1.34-2.85-1.63-4.19-.65-10.36 7.57-17.79 18.61-20.91 31.1C10.22 44.28 11.2 45.91 12.81 46.31zM92.93 16.42c9.23 6.74 15.84 16.58 18.63 27.71.34 1.36 1.56 2.27 2.91 2.27.24 0 .49-.03.73-.09 1.61-.4 2.58-2.03 2.18-3.64-3.12-12.48-10.55-23.53-20.91-31.1-1.34-.98-3.21-.69-4.19.65C91.3 13.57 91.59 15.44 92.93 16.42zM19.2 90.85c-.98 3.91-.12 7.98 2.37 11.15 2.48 3.18 6.22 5 10.25 5h14.46c1.43 8.5 8.83 15 17.73 15s16.29-6.5 17.73-15h14.46c4.03 0 7.77-1.82 10.25-5 2.48-3.18 3.34-7.24 2.37-11.15L97.97 47.53C94.07 31.91 80.1 21 64 21S33.93 31.91 30.03 47.53L19.2 90.85zM64 116c-5.58 0-10.27-3.83-11.61-9h23.21C74.27 112.17 69.58 116 64 116zM64 27c13.34 0 24.92 9.04 28.15 21.98l10.83 43.32c.53 2.11.06 4.29-1.27 6.01-1.34 1.71-3.35 2.69-5.52 2.69H31.81c-2.17 0-4.18-.98-5.52-2.69-1.34-1.71-1.8-3.9-1.27-6.01l10.83-43.32C39.08 36.04 50.66 27 64 27z" fill="#fff" />
                            </svg>
                        </div>
                    </div>
                    <div className={'relative'}>
                        <div className={'absolute left-1.5 p-1 top-1 bg-violet-400 rounded-full'}>
                            <svg width="22" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#fff"/>
                                <path d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z" fill="#fff"/>
                            </svg>
                        </div>
                        <input type={"text"} placeholder={'جستجو کنید ...'} className={'p-2 placeholder:text-[0.78rem] border    px-3 rounded-full  border-violet-400'} />
                    </div>

                </section>
            </header>
            <Toaster/>

        </>
    );
}

export default Header;