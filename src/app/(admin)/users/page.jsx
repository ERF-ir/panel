'use client'
import Master from "@/components/admin/layout/Master";
import Link from "next/link";
import {BeatLoader} from "react-spinners";
import {Toaster} from "react-hot-toast";
import React, {useEffect, useState, useTransition} from "react";
import {usersList} from "@/services/requests/usersRequests";
import {data} from "@/app/(admin)/home/page";
import {useRouter} from "next/navigation";
import {getCookie} from "@/helpers";

const Page =  () => {

    let [users, setUsers] = useState([]);

    const fetchUsers = async () => {


        let response = await usersList(getCookie())

        setUsers(response.data.data)
    }



    useEffect(()=>{
        fetchUsers()
    },[])








    return (
        <>
            <Master>

                <div className=" py-5 px-10    flex items-center justify-between bg-white shadow-[0_0_10px_#ebebeb] rounded-xl">

                    <div>
                        <div className={'flex items-center'}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z" fill="#666666"/>
                                <path d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z" fill="#666666"/>
                                <path d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z" fill="#666666"/>
                                <path d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z" fill="#666666"/>
                            </svg>

                            <h1 className={'text-gray-600 text-[1.1rem] ms-2 '}>لیست مدیران سایت</h1>
                        </div>
                        <div className={'flex mt-4 items-center text-[0.7rem] text-gray-400'}>
                            <span className={'p-1 rounded-md bg-indigo-100 text-indigo-400 '}>داشبورد</span>
                            <svg width={20} className={'rotate-90 '} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path  className={'fill-gray-400'} d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z" fill="#666666" />
                            </svg>
                            <span className={' '}>محتوا</span>
                            <svg width={20} className={'rotate-90 '} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path  className={'fill-gray-400'} d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z" fill="#666666" />
                            </svg>
                            <span className={' '}>پست</span>
                            <svg width={20} className={'rotate-90  '} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path  className={'fill-gray-400'} d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z" fill="#666666" />
                            </svg>
                            <span className={' '}>لیست پست</span>
                        </div>
                    </div>

                    <div className={'flex  items-center space-x-5'}>

                        <svg onClick={()=>router.back()} width="37" className={' cursor-pointer p-1.5  rounded-lg border shadow-lg bg-gray-50 transition-all group-hover:fill-gray-200 duration-200 hover:bg-gray-200 hover:border-gray-200 border-gray-400'} height="39" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                            <path className={'fill-gray-400 group'} d="M3,26c-0.552,0-1-0.447-1-1C2,23.395,2.485,9.553,19,9.016V5c0-0.404,0.244-0.77,0.617-0.924 c0.374-0.156,0.804-0.069,1.09,0.217l7,7c0.391,0.391,0.391,1.023,0,1.414l-7,7c-0.286,0.286-0.716,0.372-1.09,0.217 C19.244,19.77,19,19.404,19,19v-3.986c-6.12,0.171-10.631,1.924-13.083,5.098C4.022,22.563,4,24.976,4,25C4,25.553,3.552,26,3,26z" />
                        </svg>
                        <Link href={'/home'}>
                            <svg width="39" className={' cursor-pointer p-1.5 rounded-lg shadow-lg shadow-blue-100 transition-all duration-300 hover:bg-blue-200 bg-blue-100'} height="39" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z" fill="#2eadff"/>
                                <path d="M17.6009 22.5601H6.40094C4.58094 22.5601 2.92094 21.1601 2.62094 19.3701L1.29094 11.4001C1.07094 10.1601 1.68094 8.57007 2.67094 7.78007L9.60094 2.23007C10.9409 1.15007 13.0509 1.16007 14.4009 2.24007L21.3309 7.78007C22.3109 8.57007 22.9109 10.1601 22.7109 11.4001L21.3809 19.3601C21.0809 21.1301 19.3809 22.5601 17.6009 22.5601ZM11.9909 2.93007C11.4609 2.93007 10.9309 3.09007 10.5409 3.40007L3.61094 8.96007C3.05094 9.41007 2.65094 10.4501 2.77094 11.1601L4.10094 19.1201C4.28094 20.1701 5.33094 21.0601 6.40094 21.0601H17.6009C18.6709 21.0601 19.7209 20.1701 19.9009 19.1101L21.2309 11.1501C21.3409 10.4501 20.9409 9.39007 20.3909 8.95007L13.4609 3.41007C13.0609 3.09007 12.5209 2.93007 11.9909 2.93007Z" fill="#2eadff"/>
                            </svg>
                        </Link>


                    </div>
                </div>

                <div className=" py-10 px-14 mt-5   bg-white shadow-[0_0_10px_#ebebeb] rounded-xl">



                    <table  className={'w-full border-collapse  text-center bo '}>


                        <thead className={'bg-indigo-100    text-gray-600 '}>
                        <tr className={'*:p-4 '}>
                            <th>#</th>
                            <th>نام کاربر</th>
                            <th>ایمیل</th>
                            <th>تصویر</th>
                            <th>نقش</th>
                            <th>تاریخ ثبت نام</th>
                            <th>تغییر نقش</th>
                        </tr>
                        </thead>

                        <tbody className={' text-gray-600  '}>


                        {
                            users.map((user) => (
                                <tr key={user.id}  className={'border-y *:py-4 even:bg-gray-50  ' }>

                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.image}  className={'rounded-full size-[55px]'}/></td>
                                    <td>{user.roles}</td>
                                    <td>
                                        {new Intl.DateTimeFormat('fa-IR',  {year: 'numeric',month: 'short',day: 'numeric'}).
                                        format(new Date(user.created_at.replace(/-/g,',')))}
                                    </td>
                                    <td className={'flex items-center justify-center space-x-3 *:cursor-pointer'}>


                                     <Link href={`/users/${user.id}`} >
                                         <svg width="35"  className={'border active:bg-orange-200 transition-all hover:bg-orange-50 p-1.5 border-orange-500 rounded-xl'} height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#F29400"/>
                                             <path d="M8.49935 17.6901C7.88935 17.6901 7.32935 17.4701 6.91935 17.0701C6.42935 16.5801 6.21935 15.8701 6.32935 15.1201L6.75935 12.1101C6.83935 11.5301 7.21935 10.7801 7.62935 10.3701L15.5093 2.49006C17.4993 0.500059 19.5193 0.500059 21.5093 2.49006C22.5993 3.58006 23.0893 4.69006 22.9893 5.80006C22.8993 6.70006 22.4193 7.58006 21.5093 8.48006L13.6293 16.3601C13.2193 16.7701 12.4693 17.1501 11.8893 17.2301L8.87935 17.6601C8.74935 17.6901 8.61935 17.6901 8.49935 17.6901ZM16.5693 3.55006L8.68935 11.4301C8.49935 11.6201 8.27935 12.0601 8.23935 12.3201L7.80935 15.3301C7.76935 15.6201 7.82935 15.8601 7.97935 16.0101C8.12935 16.1601 8.36935 16.2201 8.65935 16.1801L11.6693 15.7501C11.9293 15.7101 12.3793 15.4901 12.5593 15.3001L20.4393 7.42006C21.0893 6.77006 21.4293 6.19006 21.4793 5.65006C21.5393 5.00006 21.1993 4.31006 20.4393 3.54006C18.8393 1.94006 17.7393 2.39006 16.5693 3.55006Z" fill="#F29400"/>
                                             <path d="M19.8496 9.82978C19.7796 9.82978 19.7096 9.81978 19.6496 9.79978C17.0196 9.05978 14.9296 6.96978 14.1896 4.33978C14.0796 3.93978 14.3096 3.52978 14.7096 3.40978C15.1096 3.29978 15.5196 3.52978 15.6296 3.92978C16.2296 6.05978 17.9196 7.74978 20.0496 8.34978C20.4496 8.45978 20.6796 8.87978 20.5696 9.27978C20.4796 9.61978 20.1796 9.82978 19.8496 9.82978Z" fill="#F29400"/>
                                         </svg>
                                     </Link>


                                    </td>

                                </tr>
                            ))
                        }




                        </tbody>

                    </table>
                    {users.length ? '': <div className={'flex justify-center mt-10'}><BeatLoader size={17}   speedMultiplier={0.9} color={'#74dfff'}/></div>}



                </div>
                <Toaster/>


            </Master>
        </>
    );
};

export default Page;