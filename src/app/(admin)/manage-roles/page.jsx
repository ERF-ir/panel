'use client'
import Master from "@/components/admin/layout/Master";
import Link from "next/link";
import {BeatLoader} from "react-spinners";
import {Toaster} from "react-hot-toast";
import React, {useEffect, useState, useTransition} from "react";
import {listRoles} from "@/services/requests/roles/role";


const Page = () => {

    let [isPending, startTransition] = useTransition();

    let [roles, setRoles] = useState([]);
    let [permissionn, setPermission] = useState([]);



    const fetchRoles = async ()=>{

        let response = await listRoles();
       setRoles(response.data.data);
    }

    useEffect(() => {
        fetchRoles();
    },[])

    console.log(roles)


    return (



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

                        <h1 className={'text-gray-600 text-[1.1rem] ms-2 '}>لیست نقش های موججود</h1>
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

                <button  disabled={isPending} onClick={()=>startTransition(()=>router.push('/content/post-category/store'))} className={'py-2.5  mb-5 space-x-2 flex ' +
                    ' items-center border hover:bg-purple-100  border-purple-600  px-3  active:bg-purple-300   rounded-lg   text-purple-600 transition-all  '}>
                    {isPending ? <BeatLoader size={8}  speedMultiplier={0.7} color={'#837cf3'} /> : (
                        <>
                            <span className={'text-sm'}>ایجاد نقش جدید</span>
                        </>
                    ) }
                </button>

                <table  className={'w-full border-collapse  text-center bo '}>


                    <thead className={'bg-indigo-100    text-gray-600 '}>
                    <tr className={'*:p-4 '}>
                        <th>#</th>
                        <th>نام نقش</th>
                        <th>دسترسی ها</th>
                        <th>توضیحات</th>
                        <th>عملیات</th>
                    </tr>
                    </thead>

                    <tbody className={' text-gray-600  '}>


                    {roles.map((role)=>(



                        <tr key={role.id}  className={'border-y *:py-4 even:bg-gray-50  ' }>

                            <td>{role.id}</td>
                            <td>{role.name}</td>
                            <td>

                                {

                                   role.permissions.length ?  role.permissions.map((permission)=>(
                                       <div className={'*:text-emerald-600 *:text-sm *:my-2'} key={permission.id}>
                                           <p> { permission.name ? permission.name : 'نقشی وجود ندرد' }</p>
                                       </div>
                                   )) : <p className={'text-amber-600 text-sm '}>دسترسی وجود ندارد</p>
                                }
                            </td>
                            <td>
                                {role.description}
                            </td>

                            <td>


                              <div className={'flex items-center justify-center space-x-3 *:cursor-pointer'}>

                                  <svg  width="35"  className={'border active:bg-red-200 transition-all hover:bg-red-50 p-1.5 *:fill-red-500 border-red-500 rounded-xl'} height="35"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M20.9997 6.72998C20.9797 6.72998 20.9497 6.72998 20.9197 6.72998C15.6297 6.19998 10.3497 5.99998 5.11967 6.52998L3.07967 6.72998C2.65967 6.76998 2.28967 6.46998 2.24967 6.04998C2.20967 5.62998 2.50967 5.26998 2.91967 5.22998L4.95967 5.02998C10.2797 4.48998 15.6697 4.69998 21.0697 5.22998C21.4797 5.26998 21.7797 5.63998 21.7397 6.04998C21.7097 6.43998 21.3797 6.72998 20.9997 6.72998Z" fill="#292D32"/>
                                      <path d="M8.50074 5.72C8.46074 5.72 8.42074 5.72 8.37074 5.71C7.97074 5.64 7.69074 5.25 7.76074 4.85L7.98074 3.54C8.14074 2.58 8.36074 1.25 10.6907 1.25H13.3107C15.6507 1.25 15.8707 2.63 16.0207 3.55L16.2407 4.85C16.3107 5.26 16.0307 5.65 15.6307 5.71C15.2207 5.78 14.8307 5.5 14.7707 5.1L14.5507 3.8C14.4107 2.93 14.3807 2.76 13.3207 2.76H10.7007C9.64074 2.76 9.62074 2.9 9.47074 3.79L9.24074 5.09C9.18074 5.46 8.86074 5.72 8.50074 5.72Z" fill="#292D32"/>
                                      <path d="M15.2104 22.7501H8.79039C5.30039 22.7501 5.16039 20.8201 5.05039 19.2601L4.40039 9.19007C4.37039 8.78007 4.69039 8.42008 5.10039 8.39008C5.52039 8.37008 5.87039 8.68008 5.90039 9.09008L6.55039 19.1601C6.66039 20.6801 6.70039 21.2501 8.79039 21.2501H15.2104C17.3104 21.2501 17.3504 20.6801 17.4504 19.1601L18.1004 9.09008C18.1304 8.68008 18.4904 8.37008 18.9004 8.39008C19.3104 8.42008 19.6304 8.77007 19.6004 9.19007L18.9504 19.2601C18.8404 20.8201 18.7004 22.7501 15.2104 22.7501Z" fill="#292D32"/>
                                      <path d="M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z" fill="#292D32"/>
                                      <path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#292D32"/>
                                  </svg>
                              </div>


                            </td>

                        </tr>
                    ))}


                    </tbody>

                </table>


            </div>

        </Master>
    );
};

export default Page;