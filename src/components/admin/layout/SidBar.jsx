import logo from "../../../../public/logo.png";
import {motion} from "motion/react";
import React, {useState} from "react";
import Link from "next/link";


const SidBar = () => {

    const [menubar, setMenubar] = useState(false);
    const [menubar2, setMenubar2] = useState(false);
    
    return (

        <>
            <aside  className={'col-span-2 vh overflow-auto  bg-white font-iran '} >

                <div className={'flex justify-start mt-5'}>
                    <img src={logo.src} width={'185'} alt="logo" />
                </div>

                <ul className={'p-5 '}>
                    <p className={'text-gray-600 p-2 px-3 rounded-xl bg-gray-200 w-fit text-[0.8rem]'}>داشبورد</p>
                    <li className={'flex bg-[#635bff] drop-shadow-[0_10px_20px_rgba(99,91,255,0.4)]  px-2 py-3 rounded-xl cursor-pointer my-3 '}>

                        <svg width={27} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35" fill="#FFFFFF" />
                            <path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z" fill="#FFFFFF" />
                            <path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z" fill="#FFFFFF" />
                        </svg>

                        <div className={'mt-1 mr-2 text-white f'}>مدیریت داشبورد</div>
                    </li>

                    <p className={'text-green-600  p-2 px-3 rounded-xl bg-emerald-100 w-fit mt-5 mb-2 text-[0.8rem] '}>بخش فروش محصولات</p>
                    <li className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className={' mr-3 text-[0.9rem] text-gray-600 hover:text-white transition-all duration-500  hover:ps-7 hover:bg-[#7872ff]  hover:px-7 rounded-[12px] py-3'}>مدیریت دسته بندی</div>
                    </li>



                    <li onClick={()=>{setMenubar2(prevState2 => !prevState2)}} className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>

                        <svg width={23} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35" fill="#909090" />
                            <path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z" fill="#909090" />
                            <path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z" fill="#909090" />
                        </svg>

                        <div className={' mr-3 text-[0.9rem] text-gray-600 transition-all duration-500 hover:text-white  hover:ps-7 hover:bg-[#7872ff] hover:px-7 rounded-[12px] py-3'}>مدیریت تخفیف ها</div>

                        <motion.div

                            animate={{ rotate: menubar2 ? "-90deg" : 0}}
                            transition={{ duration: 0.1}}
                        >

                            <svg className={'ms-3'} width="21" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.1 19.1498C14.26 19.1498 13.34 18.8798 12.41 18.3398L7.78 15.6698C6.15 14.7198 5.25 13.4198 5.25 11.9998C5.25 10.5798 6.15 9.2798 7.78 8.3398L12.41 5.6698C14.04 4.7298 15.61 4.5998 16.85 5.3098C18.08 6.0198 18.76 7.4498 18.76 9.3298V14.6698C18.76 16.5498 18.08 17.9798 16.85 18.6898C16.32 18.9998 15.73 19.1498 15.1 19.1498ZM15.1 6.3598C14.52 6.3598 13.86 6.5598 13.16 6.9698L8.53 9.6398C7.38 10.2998 6.75 11.1398 6.75 11.9998C6.75 12.8598 7.38 13.6998 8.53 14.3598L13.16 17.0298C14.31 17.6898 15.35 17.8198 16.1 17.3898C16.85 16.9598 17.26 15.9898 17.26 14.6698V9.3298C17.26 8.0098 16.85 7.0398 16.1 6.6098C15.8 6.4398 15.46 6.3598 15.1 6.3598Z" fill="#292D32"/>
                            </svg>
                        </motion.div>
                    </li>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: menubar2 ? "auto " : 0, opacity: menubar2 ? 1 : 0 }}
                        transition={{ duration: 0.5,ease: "easeInOut" }}
                        className="overflow-hidden bg-gray-100 w-[80%] ms-8 rounded-xl "
                    >
                        <ul className={'*:text-[0.87rem] *:text-gray-600 p-2.5 '}>
                            <li className={' flex es items-center cursor-pointer  transition-all duration-500 group  w-[80%]  hover:bg-[#7872ff]   p-2 rounded-2xl mb-2 '}>
                                <svg style={{fill:"#918bff"}}  width={16} className={'sv'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M12.94,8.31 c-2.218,0.681-3.95,2.412-4.631,4.631c-0.132,0.43-0.528,0.706-0.956,0.706c-0.098,0-0.196-0.014-0.294-0.044 c-0.528-0.162-0.824-0.722-0.662-1.25C7.274,9.5,9.501,7.273,12.354,6.397c0.528-0.164,1.087,0.135,1.25,0.662 C13.765,7.588,13.468,8.147,12.94,8.31z"   />
                                </svg>
                                <span className={'ms-2  group-hover:text-white'}>تخفیف شگفت انگیز</span>
                            </li>
                            <li className={' flex es items-center cursor-pointer  transition-all duration-500 group  w-[80%]  hover:bg-[#7872ff]   p-2 rounded-2xl mb-2 '}>
                                <svg style={{fill:"#918bff"}}  width={16} className={'sv'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M12.94,8.31 c-2.218,0.681-3.95,2.412-4.631,4.631c-0.132,0.43-0.528,0.706-0.956,0.706c-0.098,0-0.196-0.014-0.294-0.044 c-0.528-0.162-0.824-0.722-0.662-1.25C7.274,9.5,9.501,7.273,12.354,6.397c0.528-0.164,1.087,0.135,1.25,0.662 C13.765,7.588,13.468,8.147,12.94,8.31z"   />
                                </svg>
                               <Link href={'/store/public-discount'}>
                                   <span className={'ms-2  group-hover:text-white'}>تخفیف عمومی</span>
                               </Link>
                            </li>
                            <li className={' flex es items-center cursor-pointer  transition-all duration-500 group  w-[80%]  hover:bg-[#7872ff]   p-2 rounded-2xl mb-2 '}>
                                <svg style={{fill:"#918bff"}}  width={16} className={'sv'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M12.94,8.31 c-2.218,0.681-3.95,2.412-4.631,4.631c-0.132,0.43-0.528,0.706-0.956,0.706c-0.098,0-0.196-0.014-0.294-0.044 c-0.528-0.162-0.824-0.722-0.662-1.25C7.274,9.5,9.501,7.273,12.354,6.397c0.528-0.164,1.087,0.135,1.25,0.662 C13.765,7.588,13.468,8.147,12.94,8.31z"   />
                                </svg>
                                <span className={'ms-2  group-hover:text-white'}>کوپن تخفیف</span>
                            </li>
                        </ul>
                    </motion.div>





                    <p className={'text-sky-600 p-2 px-3 rounded-xl bg-sky-100 w-fit mt-5 mb-2 text-[0.8rem] '}>بخش محتوا</p>


                    <li className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href='/content/post-category'>
                            <div className={' mr-3 text-[0.9rem] text-gray-600 hover:text-white  transition-all duration-500  hover:ps-7 hover:bg-[#7872ff]  hover:px-7 rounded-[12px] py-3'}>مدیریت دسته بندی</div>
                        </Link>
                    </li>
                    <li className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M19.1399 2.58991L15.5099 6.21991C15.3699 6.35991 15.2299 6.62991 15.2099 6.82991L15.0099 8.21991C14.9399 8.71991 15.2899 9.06991 15.7899 8.99991L17.1799 8.79991C17.3699 8.76991 17.6499 8.63991 17.7899 8.49991L21.4199 4.86991C22.0499 4.23991 22.3399 3.51991 21.4199 2.59991C20.4899 1.65991 19.7699 1.95991 19.1399 2.58991Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.6201 3.11011C18.9301 4.21011 19.7901 5.07011 20.8901 5.38011" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <Link href={'/content/post'}>
                            <div className={' mr-3 text-[0.9rem] text-gray-600 hover:text-white transition-all duration-500  hover:ps-7 hover:bg-[#7872ff]  hover:px-7 rounded-[12px] py-3'}>مدیریت پست ها</div>
                        </Link>

                    </li>
                    <li className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="#666666" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>


                        <div className={' mr-3 text-[0.9rem] text-gray-600 hover:text-white transition-all duration-500  hover:ps-7 hover:bg-[#7872ff]  hover:px-7 rounded-[12px] py-3'}>مدیریت بنر ها</div>
                    </li>












                </ul>

            </aside>
        </>

    );
};

export default SidBar;