'use client'
import React, {useEffect, useState} from "react";
import Master from "@/components/admin/layout/Master";

import {addPostCateegory, parentCategory} from "@/services/requests/admin/postCateegory";
import {Controller, useForm} from "react-hook-form";

import {toast, Toaster} from "react-hot-toast";
import {BeatLoader} from "react-spinners";
import {config200, config400} from "@/services/toast/config";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {yupResolver} from "@hookform/resolvers/yup";
import {couponDiscountValidation, publicDiscountValidation} from "@/services/validations/validation";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import "react-multi-date-picker/styles/colors/purple.css"
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import Buttinn from "@/components/admin/Buttinn";
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"
import {addpublicDiscount} from "@/services/requests/shop/publicDiscount";
import {log} from "next/dist/server/typescript/utils";
import jalaali from "jalaali-js";







const page = () => {

    function convertPersianNumbersToEnglish(str) {
        return str.replace(/[\u06F0-\u06F9]/g, function (d) {
            return d.charCodeAt(0) - 0x06F0;
        });
    }

    function convertJalaliDateTimeToGregorianString(jalaliDateTime) {
        const [datePart, timePart] = jalaliDateTime.split(" ");
        const [jy, jm, jd] = datePart.split("/").map(Number);

        const {gy, gm, gd} = jalaali.toGregorian(jy, jm, jd);

        const paddedMonth = String(gm).padStart(2, '0');
        const paddedDay = String(gd).padStart(2, '0');

        return `${gy}-${paddedMonth}-${paddedDay} ${timePart}`;
    }


    const router = useRouter();

    let [loading, setLoading] = useState(false);

    const options = [];
    for (let i = 1; i <= 100; i++) {
        options.push(<option key={i} value={i}>{i}٪</option>);
    }




    const {control,watch,register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:{
            status : '1',
            type:'0'

        },
        mode:'all',
        resolver: yupResolver(couponDiscountValidation)

    })
    let typeSelect = watch('type')

    const  onSubmit  = async (data) => {

        data.end_at = convertJalaliDateTimeToGregorianString(convertPersianNumbersToEnglish(data.end_at))
        data.start_at = convertJalaliDateTimeToGregorianString(convertPersianNumbersToEnglish(data.start_at))
        setLoading(true)

        console.log(data)

    }

    return (
        <>
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
                                <h1 className={'text-gray-600 text-[1.1rem] ms-2 '}>افزودن کد تخفیف</h1>
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
                                <span className={' '}>تخفیف</span>
                                <svg width={20} className={'rotate-90  '} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path  className={'fill-gray-400'} d="M12,14.071L8.179,10.25c-0.414-0.414-1.086-0.414-1.5,0l0,0c-0.414,0.414-0.414,1.086,0,1.5l4.614,4.614 c0.391,0.391,1.024,0.391,1.414,0l4.614-4.614c0.414-0.414,0.414-1.086,0-1.5v0c-0.414-0.414-1.086-0.414-1.5,0L12,14.071z" fill="#666666" />
                                </svg>
                                <span className={' '}>تخفیف عمومی</span>
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
                    <div className=" py-10 pr-20 mt-5 w-[80%]   bg-white shadow-[0_0_10px_#ebebeb] rounded-xl">

                        <form onSubmit={handleSubmit(onSubmit)} className={'flex-wrap  flex items-center justify-between'}>

                            <div className={'w-[50%]'}>
                                <label className={'text-gray-500 block'}>عنوان تخفیف :</label>
                                <input {...register("title")} type='text'  placeholder='دهه فجر' className={'p-3.5 mt-3 w-[75%] ' +
                                    ' shadow-[0_0_2px_#c9c9c9] focus:ring-2 ring-indigo-300  transition-all  text-sm text-gray-500 placeholder:text-sm placeholder:text-gray-300 border border-gray-300 rounded-lg'} />
                                <p className={' p-2   rounded-full  flex items-center'}>

                                    {errors.title && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.title.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className={'w-[50%]  '}>
                                <label className={'text-gray-500 block'}>کد تخفیف :</label>
                                <input {...register("coupon_code")} type='text'  placeholder='sample' className={'p-3.5 mt-3 w-[75%] ' +
                                    ' shadow-[0_0_2px_#c9c9c9] focus:ring-2 ring-indigo-300  transition-all  text-sm text-gray-500 placeholder:text-sm placeholder:text-gray-300 border border-gray-300 rounded-lg'} />
                                <p className={' p-2   rounded-full  flex items-center'}>

                                    {errors.coupon_code && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.coupon_code.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>

                            <div className={'mt-10'}>
                                <label className={'text-gray-500'}>درصد تخفیف :</label>
                                <div className="select mt-3" >
                                    <select {...register("percentage")}>
                                       <option value={''}>انتخاب کنید</option>
                                        {options}
                                    </select>
                                </div>
                                <p className={' p-2   rounded-full  flex items-center'}>
                                    {errors.percentage && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.percentage.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>
                            <div className={'ml-28 mt-10'}>
                                <label className={'text-gray-500'}>نوع تخفیف :</label>
                                <div className="select mt-3" >
                                    <select {...register("type")}>
                                       <option value={''}>انتخاب کنید</option>
                                       <option value={'0'}>عمومی</option>
                                       <option value={'1'}>خصوصی</option>

                                    </select>
                                </div>
                                <p className={' p-2   rounded-full  flex items-center'}>
                                    {errors.type && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.type.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>

                            <div className={'ml-28 mt-10'} hidden={!Number(typeSelect)}>
                                <label className={'text-gray-500'}>انتخاب کاربر :</label>
                                <div className="select mt-3" >
                                    <select {...register("user_id")}>
                                       <option value={''}>انتخاب کنید</option>
                                       <option value={'0'}>عمومی</option>
                                       <option value={'1'}>خصوصی</option>

                                    </select>
                                </div>
                                <p className={' p-2   rounded-full  flex items-center'}>
                                    {errors.user_id && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.type.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>


                            <div dir='rtl' className={' mt-5'}>
                                <Controller
                                    control={control}
                                    name="start_at"
                                    render={({
                                                 field: { onChange, name, value },
                                             }) => (
                                        <>
                                            <DatePicker

                                                value={value}
                                                onChange={(date) => {
                                                    onChange(date);
                                                }}
                                                render={<Buttinn  p={'تاریخ شروع'} />}
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                                className="purple"
                                                format="YYYY/MM/DD HH:mm:ss"
                                                plugins={[
                                                    <TimePicker position="bottom" />
                                                ]}
                                            />
                                        </>
                                    )}
                                />
                                <p className={' p-2   rounded-full  flex items-center'}>
                                    {errors.start_at && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.start_at.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>


                            <div className={' me-36 mt-5 '}>
                                <Controller
                                    control={control}
                                    name="end_at"

                                    render={({
                                                 field: { onChange, name, value },

                                             }) => (
                                        <>
                                            <DatePicker

                                                value={value}
                                                onChange={(date) => {
                                                    onChange(date);
                                                }}
                                                render={<Buttinn   p={'تاریخ پایان'} />}
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                                className="purple"
                                                format="YYYY/MM/DD HH:mm:ss"
                                                plugins={[
                                                    <TimePicker position="bottom" />
                                                ]}
                                            />
                                        </>
                                    )}
                                />
                                <p className={' p-2   rounded-full  flex items-center'}>
                                    {errors.end_at && (
                                        <>
                                            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#ff6467"/>
                                                <path d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#ff6467"/>
                                                <path d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z" fill="#ff6467"/>
                                            </svg>
                                            <span className={'text-sm ms-2  bg-red-100 rounded-md py-2 px-3  text-red-400 '}>{errors.end_at.message}</span>
                                        </>
                                    )}
                                </p>
                            </div>



                            <div className={'w-full mt-10'}>
                                <button type={"submit"} disabled={loading} className={'py-2.5  space-x-2 flex  items-center  px-4 bg-blue-400  hover:shadow-md ring-blue-200 active:bg-blue-300 ring-4  rounded-lg   text-white transition-all  '}>
                                    {loading ? <BeatLoader size={8}  speedMultiplier={0.7} color={'white'} /> : (
                                        <>
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className={'fill-white'} d="M14.2209 21.6301C13.0409 21.6301 11.3709 20.8001 10.0509 16.8301L9.33086 14.6701L7.17086 13.9501C3.21086 12.6301 2.38086 10.9601 2.38086 9.78007C2.38086 8.61007 3.21086 6.93007 7.17086 5.60007L15.6609 2.77007C17.7809 2.06007 19.5509 2.27007 20.6409 3.35007C21.7309 4.43007 21.9409 6.21007 21.2309 8.33007L18.4009 16.8201C17.0709 20.8001 15.4009 21.6301 14.2209 21.6301ZM7.64086 7.03007C4.86086 7.96007 3.87086 9.06007 3.87086 9.78007C3.87086 10.5001 4.86086 11.6001 7.64086 12.5201L10.1609 13.3601C10.3809 13.4301 10.5609 13.6101 10.6309 13.8301L11.4709 16.3501C12.3909 19.1301 13.5009 20.1201 14.2209 20.1201C14.9409 20.1201 16.0409 19.1301 16.9709 16.3501L19.8009 7.86007C20.3109 6.32007 20.2209 5.06007 19.5709 4.41007C18.9209 3.76007 17.6609 3.68007 16.1309 4.19007L7.64086 7.03007Z" fill="#292D32"/>
                                                <path className={'fill-white'} d="M10.1108 14.4C9.92078 14.4 9.73078 14.33 9.58078 14.18C9.29078 13.89 9.29078 13.41 9.58078 13.12L13.1608 9.53C13.4508 9.24 13.9308 9.24 14.2208 9.53C14.5108 9.82 14.5108 10.3 14.2208 10.59L10.6408 14.18C10.5008 14.33 10.3008 14.4 10.1108 14.4Z" fill="#292D32"/>
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
        </>
    );
};

export default page;