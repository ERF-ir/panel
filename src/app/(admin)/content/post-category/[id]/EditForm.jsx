'use client'
import Master from "@/components/admin/layout/Master";
import Link from "next/link";
import {BeatLoader} from "react-spinners";
import {toast, Toaster} from "react-hot-toast";
import React, {useEffect, useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {
    editPostCategory,
    getCategory,
    parentCategory,
    showPost,
    showPostCategory
} from "@/services/requests/admin/postCateegory";
import {config200} from "@/services/toast/config";
import {getCookie} from "@/helpers";

const EditForm = ({id}) => {
    const router = useRouter();
    let [isPending, startTransition] = useTransition();
    let [loading,setLoading] = useState(false);
    let [postCat,setPostCat] = useState();
    let [listParent,setListParent] = useState([]);

    const {register,reset,handleSubmit,formState:{errors}} = useForm({
        mode:'all',
        defaultValues:{
            parent_id: '',
        }
    })

    useEffect(() => {
        getPostCateegory();
        getParent()

    }, []);

    const getPostCateegory = async () => {
        let idd = await id
       let response = await showPostCategory(idd.id,getCookie())
       setPostCat(response.data.data);
        reset(
            {
                name:response.data.data.name,
                status : response.data.data.status,
            }
        )

    }
    const getParent = async () => {

       let response = await parentCategory(getCookie())
        setListParent(response.data.data);

    }

    const onSubmit = async (data) => {
        setLoading(true)
        let idd = await id
        let  response = await editPostCategory(idd.id,data,getCookie());
        if (response.status === 200)
        {
            toast.success('دسته بندی ویرایش شد',config200)
            setLoading(false)
            getParent()
        }


    }








    return (
        <Master>
            <div className={'flex justify-center mt-3 '}>
                <div className=" py-5 px-10 w-[85%]   flex items-center justify-between bg-white shadow-[0_0_10px_#ebebeb] rounded-xl">

                    <div>
                        <div className={'flex items-center'}>
                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#666666"/>
                                <path d="M8.49935 17.6901C7.88935 17.6901 7.32935 17.4701 6.91935 17.0701C6.42935 16.5801 6.21935 15.8701 6.32935 15.1201L6.75935 12.1101C6.83935 11.5301 7.21935 10.7801 7.62935 10.3701L15.5093 2.49006C17.4993 0.500059 19.5193 0.500059 21.5093 2.49006C22.5993 3.58006 23.0893 4.69006 22.9893 5.80006C22.8993 6.70006 22.4193 7.58006 21.5093 8.48006L13.6293 16.3601C13.2193 16.7701 12.4693 17.1501 11.8893 17.2301L8.87935 17.6601C8.74935 17.6901 8.61935 17.6901 8.49935 17.6901ZM16.5693 3.55006L8.68935 11.4301C8.49935 11.6201 8.27935 12.0601 8.23935 12.3201L7.80935 15.3301C7.76935 15.6201 7.82935 15.8601 7.97935 16.0101C8.12935 16.1601 8.36935 16.2201 8.65935 16.1801L11.6693 15.7501C11.9293 15.7101 12.3793 15.4901 12.5593 15.3001L20.4393 7.42006C21.0893 6.77006 21.4293 6.19006 21.4793 5.65006C21.5393 5.00006 21.1993 4.31006 20.4393 3.54006C18.8393 1.94006 17.7393 2.39006 16.5693 3.55006Z" fill="#666666"/>
                                <path d="M19.8496 9.82978C19.7796 9.82978 19.7096 9.81978 19.6496 9.79978C17.0196 9.05978 14.9296 6.96978 14.1896 4.33978C14.0796 3.93978 14.3096 3.52978 14.7096 3.40978C15.1096 3.29978 15.5196 3.52978 15.6296 3.92978C16.2296 6.05978 17.9196 7.74978 20.0496 8.34978C20.4496 8.45978 20.6796 8.87978 20.5696 9.27978C20.4796 9.61978 20.1796 9.82978 19.8496 9.82978Z" fill="#666666"/>
                            </svg>
                            <h1 className={'text-gray-600 text-[1.1rem] ms-2 '}>ویرایش دسته بندی</h1>
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
                            <span className={' '}>ساخت پست</span>
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
            </div>





            <div className={'flex justify-center mt-3 pb-16'}>
                <div className=" py-10 px-14 mt-5 w-[85%]   bg-white shadow-[0_0_10px_#ebebeb] rounded-xl">

                    <form onSubmit={handleSubmit(onSubmit)} className={'flex-wrap  flex items-center justify-between'}>

                        <div className={'w-[50%]'}>
                            <label className={'text-gray-500 block'}>نام دسته بندی :</label>
                            <input {...register("name",{
                                required:'فیلد نام الزامی است'
                            })} type='text'  placeholder='ورزشی' className={'p-3.5 mt-3 w-[75%] ' +
                                ' shadow-[0_0_2px_#c9c9c9] focus:ring-2 ring-indigo-300  transition-all  text-sm text-gray-500 placeholder:text-sm placeholder:text-gray-300 border border-gray-300 rounded-lg'} />
                            <p className={' p-2   rounded-full  flex items-center'}>

                                {errors.name && (
                                    <>
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                            <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                            <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                        </svg>
                                        <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.name.message}</span>
                                    </>
                                )}
                            </p>
                        </div>

                        <div>
                            <label className={'text-gray-500'}>انتخاب زیر دسته :</label>
                            <div className="select mt-3" >
                                <select {...register("parent_id")}>
                                    <option value={''} >سر دسته</option>
                                    {
                                       listParent.filter(item => !item.parent_id)
                                        .map((item) => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                                    }

                                </select>
                            </div>
                        </div>

                        <div className={'w-full mt-10'}>
                            <button type={"submit"}  className={'py-2.5  space-x-2 flex  items-center  px-4 bg-orange-300  hover:shadow-md ring-orange-200 active:bg-orange-200 ring-4  rounded-lg   text-white transition-all  '}>
                                {loading ? <BeatLoader size={8}  speedMultiplier={0.7} color={'white'} /> : (
                                    <>
                                        <svg width="22" height="22" viewBox="0 0 24 24" className={'*:fill-white'} xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.53999 19.5201C4.92999 19.5201 4.35999 19.31 3.94999 18.92C3.42999 18.43 3.17999 17.69 3.26999 16.89L3.63999 13.65C3.70999 13.04 4.07999 12.23 4.50999 11.79L12.72 3.10005C14.77 0.930049 16.91 0.870049 19.08 2.92005C21.25 4.97005 21.31 7.11005 19.26 9.28005L11.05 17.97C10.63 18.42 9.84999 18.84 9.23999 18.9401L6.01999 19.49C5.84999 19.5 5.69999 19.5201 5.53999 19.5201ZM15.93 2.91005C15.16 2.91005 14.49 3.39005 13.81 4.11005L5.59999 12.8101C5.39999 13.0201 5.16999 13.5201 5.12999 13.8101L4.75999 17.05C4.71999 17.38 4.79999 17.65 4.97999 17.82C5.15999 17.99 5.42999 18.05 5.75999 18L8.97999 17.4501C9.26999 17.4001 9.74999 17.14 9.94999 16.93L18.16 8.24005C19.4 6.92005 19.85 5.70005 18.04 4.00005C17.24 3.23005 16.55 2.91005 15.93 2.91005Z" fill="#292D32"/>
                                            <path d="M17.3404 10.9498C17.3204 10.9498 17.2904 10.9498 17.2704 10.9498C14.1504 10.6398 11.6404 8.26985 11.1604 5.16985C11.1004 4.75985 11.3804 4.37985 11.7904 4.30985C12.2004 4.24985 12.5804 4.52985 12.6504 4.93985C13.0304 7.35985 14.9904 9.21985 17.4304 9.45985C17.8404 9.49985 18.1404 9.86985 18.1004 10.2798C18.0504 10.6598 17.7204 10.9498 17.3404 10.9498Z" fill="#292D32"/>
                                            <path d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H21C21.41 21.25 21.75 21.59 21.75 22C21.75 22.41 21.41 22.75 21 22.75Z" fill="#292D32"/>
                                        </svg>

                                        <span>افزودن</span>
                                    </>
                                ) }
                            </button>
                        </div>
                    </form>

                </div>

            </div>



            <Toaster/>
        </Master>
    );
};

export default EditForm;