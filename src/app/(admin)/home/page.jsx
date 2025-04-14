'use client'
import SidBar from "@/components/admin/layout/SidBar";
import Header from "@/components/admin/layout/Header";
import {Bar} from "react-chartjs-2";
import React from "react";
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from "chart.js";
import Master from "@/components/admin/layout/Master";

const options = {
    responsive: false,

    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    size: 14,
                    family:'iran',
                }
            },
        },
        tooltip:{
            bodyFont: {
                size: 14,
                family: 'iran', // تغییر فونت متن تولتیپ
            },
            titleFont: {
                size: 16,
                family: 'iran', // تغییر فونت عنوان تولتیپ
            },

        }
    },
    scales: {
        x: {
            ticks: {
                font: {
                    size: 14,
                    family: 'iran',
                }
            }
        },
    },

};

const labels = ['مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین'];

export const data = {
    labels,
    datasets: [

        {
            label: 'کالای دیجیتال',
            data: [10,20,30,33,15,17,40,10],
            backgroundColor: 'rgb(156,149,255)',
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: 10,
        },
        {

            label: 'کالای سوپرمارکتی',
            data: [7,20,38,28,15,10,35,13],
            backgroundColor: 'rgb(81,192,255)',
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: 10,
        }
    ],
};

const page = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <>

             <Master>
                 <div className={'grid grid-cols-12 gap-5 px-3 pt-4  bg-white shadow-[0_0_10px_#ebebeb] rounded-xl '}>



                     <div className={'col-span-3  bg-linear-to-tr mx-2 h-[90%]  overflow-hidden from-cyan-200 rounded-xl to-emerald-500 p-5'}>

                         <div className={'relative'}>
                             <svg className={'absolute overflow-hidden -left-[120px] -top-[100px]'} xmlns="http://www.w3.org/2000/svg" width="214.654" height="240.533" viewBox="0 0 214.654 240.533">
                                 <g id="Group_1" data-name="Group 1" transform="translate(-1263.857 -318.907)">
                                     <rect id="Rectangle_1" data-name="Rectangle 1" width="146.807" height="146.807" rx="17" transform="translate(1367.665 351.824) rotate(45)" fill="rgba(255,255,255,0.42)" opacity="0.49"/>
                                     <rect id="Rectangle_2" data-name="Rectangle 2" width="146.807" height="146.807" rx="17" transform="translate(1374.702 318.907) rotate(45)" fill="#fff" opacity="0.18"/>
                                 </g>
                             </svg>

                         </div>

                         <div className={' flex justify-start '}>
                             <svg className={'p-2 rounded-[7px] bg-white/25'} width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM10.95 17.51C10.66 17.8 10.11 18.08 9.71 18.14L7.25 18.49C7.16 18.5 7.07 18.51 6.98 18.51C6.57 18.51 6.19 18.37 5.92 18.1C5.59 17.77 5.45 17.29 5.53 16.76L5.88 14.3C5.94 13.89 6.21 13.35 6.51 13.06L10.97 8.6C11.05 8.81 11.13 9.02 11.24 9.26C11.34 9.47 11.45 9.69 11.57 9.89C11.67 10.06 11.78 10.22 11.87 10.34C11.98 10.51 12.11 10.67 12.19 10.76C12.24 10.83 12.28 10.88 12.3 10.9C12.55 11.2 12.84 11.48 13.09 11.69C13.16 11.76 13.2 11.8 13.22 11.81C13.37 11.93 13.52 12.05 13.65 12.14C13.81 12.26 13.97 12.37 14.14 12.46C14.34 12.58 14.56 12.69 14.78 12.8C15.01 12.9 15.22 12.99 15.43 13.06L10.95 17.51ZM17.37 11.09L16.45 12.02C16.39 12.08 16.31 12.11 16.23 12.11C16.2 12.11 16.16 12.11 16.14 12.1C14.11 11.52 12.49 9.9 11.91 7.87C11.88 7.76 11.91 7.64 11.99 7.57L12.92 6.64C14.44 5.12 15.89 5.15 17.38 6.64C18.14 7.4 18.51 8.13 18.51 8.89C18.5 9.61 18.13 10.33 17.37 11.09Z" fill="#fff"/>
                             </svg>

                         </div>
                         <div className={' mt-3  flex justify-start text-white'}>
                             <div>
                                 <h1 className={' text-[1.7rem] font-bold'}>۵۱۰</h1>
                                 <p className={'text-[1.1rem] pb-2 '}>محصولات ثبت شده</p>
                             </div>
                         </div>
                     </div>
                     <div className={'col-span-3 bg-linear-to-tr mx-2 h-[90%]  overflow-hidden from-pink-300 rounded-xl to-purple-500 p-5'}>

                         <div className={'relative'}>
                             <svg className={'absolute overflow-hidden -left-[120px] -top-[100px]'} xmlns="http://www.w3.org/2000/svg" width="214.654" height="240.533" viewBox="0 0 214.654 240.533">
                                 <g id="Group_1" data-name="Group 1" transform="translate(-1263.857 -318.907)">
                                     <rect id="Rectangle_1" data-name="Rectangle 1" width="146.807" height="146.807" rx="17" transform="translate(1367.665 351.824) rotate(45)" fill="rgba(255,255,255,0.42)" opacity="0.49"/>
                                     <rect id="Rectangle_2" data-name="Rectangle 2" width="146.807" height="146.807" rx="17" transform="translate(1374.702 318.907) rotate(45)" fill="#fff" opacity="0.18"/>
                                 </g>
                             </svg>

                         </div>

                         <div className={' flex justify-start '}>
                             <svg className={'p-2 rounded-[7px] bg-white/25'} width="45"  height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#fff"/>
                             </svg>
                         </div>
                         <div className={' mt-3  flex justify-start text-white'}>
                             <div>
                                 <h1 className={' text-[1.7rem] font-bold'}>۱۰۲</h1>
                                 <p className={'text-[1.1rem] pb-2  '}>پروژه تکمیل شده</p>
                             </div>
                         </div>




                     </div>
                     <div className={'col-span-3 bg-linear-to-tr mx-2 h-[90%]  overflow-hidden from-orange-200 rounded-xl to-yellow-500 p-5'}>

                         <div className={'relative'}>
                             <svg className={'absolute overflow-hidden -left-[120px] -top-[100px]'} xmlns="http://www.w3.org/2000/svg" width="214.654" height="240.533" viewBox="0 0 214.654 240.533">
                                 <g id="Group_1" data-name="Group 1" transform="translate(-1263.857 -318.907)">
                                     <rect id="Rectangle_1" data-name="Rectangle 1" width="146.807" height="146.807" rx="17" transform="translate(1367.665 351.824) rotate(45)" fill="rgba(255,255,255,0.42)" opacity="0.49"/>
                                     <rect id="Rectangle_2" data-name="Rectangle 2" width="146.807" height="146.807" rx="17" transform="translate(1374.702 318.907) rotate(45)" fill="#fff" opacity="0.18"/>
                                 </g>
                             </svg>

                         </div>

                         <div className={' flex justify-start '}>
                             <svg className={'p-2 rounded-[7px] bg-white/25'} width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z" fill="#fff"/>
                                 <path d="M14.0809 14.1489C11.2909 12.2889 6.74094 12.2889 3.93094 14.1489C2.66094 14.9989 1.96094 16.1489 1.96094 17.3789C1.96094 18.6089 2.66094 19.7489 3.92094 20.5889C5.32094 21.5289 7.16094 21.9989 9.00094 21.9989C10.8409 21.9989 12.6809 21.5289 14.0809 20.5889C15.3409 19.7389 16.0409 18.5989 16.0409 17.3589C16.0309 16.1289 15.3409 14.9889 14.0809 14.1489Z" fill="#fff"/>
                                 <path d="M19.9894 7.33815C20.1494 9.27815 18.7694 10.9781 16.8594 11.2081C16.8494 11.2081 16.8494 11.2081 16.8394 11.2081H16.8094C16.7494 11.2081 16.6894 11.2081 16.6394 11.2281C15.6694 11.2781 14.7794 10.9681 14.1094 10.3981C15.1394 9.47815 15.7294 8.09815 15.6094 6.59815C15.5394 5.78815 15.2594 5.04815 14.8394 4.41815C15.2194 4.22815 15.6594 4.10815 16.1094 4.06815C18.0694 3.89815 19.8194 5.35815 19.9894 7.33815Z" fill="#fff"/>
                                 <path d="M21.9883 16.5904C21.9083 17.5604 21.2883 18.4004 20.2483 18.9704C19.2483 19.5204 17.9883 19.7804 16.7383 19.7504C17.4583 19.1004 17.8783 18.2904 17.9583 17.4304C18.0583 16.1904 17.4683 15.0004 16.2883 14.0504C15.6183 13.5204 14.8383 13.1004 13.9883 12.7904C16.1983 12.1504 18.9783 12.5804 20.6883 13.9604C21.6083 14.7004 22.0783 15.6304 21.9883 16.5904Z" fill="#fff"/>
                             </svg>



                         </div>
                         <div className={' mt-3  flex justify-start text-white'}>
                             <div>
                                 <h1 className={' text-[1.7rem] font-bold'}>۴۱۰</h1>
                                 <p className={'text-[1.1rem] pb-2 '}>تعداد کاربران</p>
                             </div>
                         </div>




                     </div>
                     <div className={'col-span-3 bg-linear-to-tr mx-2 h-[90%]  overflow-hidden from-blue-200 rounded-xl to-indigo-500 p-5'}>

                         <div className={'relative'}>
                             <svg className={'absolute overflow-hidden -left-[120px] -top-[100px]'} xmlns="http://www.w3.org/2000/svg" width="214.654" height="240.533" viewBox="0 0 214.654 240.533">
                                 <g id="Group_1" data-name="Group 1" transform="translate(-1263.857 -318.907)">
                                     <rect id="Rectangle_1" data-name="Rectangle 1" width="146.807" height="146.807" rx="17" transform="translate(1367.665 351.824) rotate(45)" fill="rgba(255,255,255,0.42)" opacity="0.49"/>
                                     <rect id="Rectangle_2" data-name="Rectangle 2" width="146.807" height="146.807" rx="17" transform="translate(1374.702 318.907) rotate(45)" fill="#fff" opacity="0.18"/>
                                 </g>
                             </svg>

                         </div>

                         <div className={' flex justify-start '}>
                             <svg className={'p-2 rounded-[7px] bg-white/25'} width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16 8.75C15.59 8.75 15.25 8.41 15.25 8V4.5C15.25 3.42 14.58 2.75 13.5 2.75H10.5C9.42 2.75 8.75 3.42 8.75 4.5V8C8.75 8.41 8.41 8.75 8 8.75C7.59 8.75 7.25 8.41 7.25 8V4.5C7.25 2.59 8.59 1.25 10.5 1.25H13.5C15.41 1.25 16.75 2.59 16.75 4.5V8C16.75 8.41 16.41 8.75 16 8.75Z" fill="#fff"/>
                                 <path d="M8.00082 17.78C7.59082 17.78 7.25082 17.44 7.25082 17.03C7.25082 16.61 7.59082 16.28 8.00082 16.28H19.7608C20.0608 16.28 20.2908 16.02 20.2608 15.72L19.5808 10.03C19.3408 8.09 19.0008 6.5 15.6008 6.5H8.40082C5.00082 6.5 4.66082 8.09 4.43082 10.03L3.53082 17.53C3.24082 19.99 4.00082 22 7.51082 22H16.4908C19.6508 22 20.5808 20.37 20.5308 18.25C20.5208 17.98 20.3008 17.78 20.0308 17.78H8.00082Z" fill="#fff"/>
                             </svg>


                         </div>
                         <div className={' mt-3  flex justify-start text-white'}>
                             <div>
                                 <h1 className={' text-[1.7rem] font-bold'}>۳۵۰</h1>
                                 <p className={'text-[1.1rem] pb-2 '}>تعداد محصولات</p>
                             </div>
                         </div>




                     </div>


                 </div>
                 <h1 className={'text-center text-gray-600 text-xl mt-6'}>نمودار فروش محصولات</h1>
                 <div className={'flex justify-center p-3 mx-20 bg-white shadow-[0_0_10px_#ebebeb] rounded-xl my-6'}>

                     <Bar width={850} height={350}  options={options} data={data} />

                 </div>
             </Master>

        </>
    );
};

export default page;