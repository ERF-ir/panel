'use client'

import logo from './../../public/logo.png';
import profile from './../../public/f.png';

import {useState} from "react";

import { motion } from "motion/react"
import {toJalaali} from "jalaali-js";


export default function Home() {



    const [menubar, setMenubar] = useState(false);
    const [menubar2, setMenubar2] = useState(false);



   let dateTime = new Intl.DateTimeFormat('fa-IR',
       {year: 'numeric',month: 'short',day: 'numeric'}).format( new Date())



    let newText = dateTime.replace(/ /g, " / ");



  return (


//bg-[#f4f7fc]
      <div className={'grid grid-cols-10  '}>

          <aside  className={'col-span-2 vh overflow-auto  bg-white font-iran '} >

              <div className={'flex justify-start mt-5'}>
                  <img src={logo.src} width={'185'} alt="logo" />
              </div>

              <ul className={'p-5 '}>
                  <p className={'text-gray-400 text-sm'}>داشبورد</p>
                  <li className={'flex bg-[#635bff] drop-shadow-[0_10px_20px_rgba(99,91,255,0.4)]  px-2 py-3 rounded-xl cursor-pointer my-3 '}>

                      <svg width={27} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35" fill="#FFFFFF" />
                          <path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z" fill="#FFFFFF" />
                          <path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z" fill="#FFFFFF" />
                      </svg>

                     <div className={'mt-1 mr-2 text-white f'}>مدیریت داشبورد</div>

                  </li>



                  <p className={'text-gray-400 mt-5 mb-2 text-[0.8rem] '}>بخش محتوا</p>


                  <li className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>

                      <svg width={23} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35" fill="#909090" />
                          <path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z" fill="#909090" />
                          <path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z" fill="#909090" />
                      </svg>

                      <div className={' mr-3 text-[0.9rem] text-gray-600 hover:text-white transition-all duration-300  hover:ps-7 hover:bg-[#7872ff]  hover:px-7 rounded-[12px] py-3'}>مدیریت دسته بندی</div>

                  </li>

                  <li onClick={()=>{setMenubar2(prevState2 => !prevState2)}} className={'flex items-center     px-2 py-1 rounded-xl cursor-pointer  '}>

                      <svg width={23} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M18,21H6c-1.657,0-3-1.343-3-3V8.765c0-1.09,0.591-2.093,1.543-2.622l6-3.333c0.906-0.503,2.008-0.503,2.914,0l6,3.333C20.409,6.672,21,7.676,21,8.765V18C21,19.657,19.657,21,18,21z" opacity=".35" fill="#909090" />
                          <path d="M15,21H9v-6c0-1.105,0.895-2,2-2h2c1.105,0,2,0.895,2,2V21z" fill="#909090" />
                          <path d="M20.499,9.23c-0.247,0-0.496-0.061-0.727-0.189l-6.839-3.8c-0.584-0.324-1.28-0.324-1.864,0l-6.839,3.8c-0.725,0.402-1.637,0.142-2.04-0.583c-0.402-0.724-0.142-1.637,0.583-2.04l6.839-3.8c1.496-0.832,3.282-0.831,4.778,0l6.839,3.8c0.724,0.402,0.985,1.315,0.583,2.04C21.537,8.952,21.026,9.23,20.499,9.23z" fill="#909090" />
                      </svg>

                      <div className={' mr-3 text-[0.9rem] text-gray-600 transition-all duration-300 hover:text-white  hover:ps-7 hover:bg-[#7872ff] hover:px-7 rounded-[12px] py-3'}>مدیریت دسته بندی</div>

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
                      transition={{ duration: 0.3,ease: "easeInOut" }}
                      className="overflow-hidden bg-gray-100 w-[80%] ms-8 rounded-xl "
                  >
                      <ul className={'*:text-[0.87rem] *:text-gray-600 p-2.5 '}>
                          <li className={' flex es items-center cursor-pointer  transition-all duration-300 group  w-[80%]  hover:bg-[#7872ff]   p-2 rounded-2xl mb-2 '}>
                              <svg style={{fill:"#918bff"}}  width={16} className={'sv'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M12.94,8.31 c-2.218,0.681-3.95,2.412-4.631,4.631c-0.132,0.43-0.528,0.706-0.956,0.706c-0.098,0-0.196-0.014-0.294-0.044 c-0.528-0.162-0.824-0.722-0.662-1.25C7.274,9.5,9.501,7.273,12.354,6.397c0.528-0.164,1.087,0.135,1.25,0.662 C13.765,7.588,13.468,8.147,12.94,8.31z"   />
                              </svg>
                              <span className={'ms-2  group-hover:text-white'}>دسته بندی</span>
                          </li>
                      </ul>
                  </motion.div>










              </ul>

          </aside>


          <main className={'col-span-8  bg-white  vh overflow-auto'}>

              <header className={'p-5 flex items-center justify-between'}>
                  <section className={'flex '}>


                      <div className={'flex items-center'}>
                          <div className={' w-[56px] p-1 rounded-full  bg-green-500  '}>
                              <img src={profile.src} className={' rounded-full size-12 '} alt={'profile'}/>
                          </div>
                          <div className={'ms-4'}>
                              <h1 className={'text-gray-600 text-sm'}> سلام عرفان بیات</h1>
                              <p className={' mt-3 text-[0.8rem]'}>
                                <span className={'p-1 rounded-full px-2 bg-orange-100 text-orange-700'}>مدیر اصلی</span>
                                  <span className={'ms-3 p-1 text-gray-700 bg-gray-100 text-[0.75rem] px-2 rounded-full'}>{newText}</span>
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


              <section className={'p-5 bg-[#f4f7fc] me-5  rounded-xl'}>

                  <p>wd</p>
                  <p>wd</p>
                  <p>wd</p>
                  <p>wd</p>  <p>wd</p>
                  <p>wd</p>
                  <p>wd</p>
                  <p>wd</p>  <p>wd</p>
                  <p>wd</p>


              </section>





          </main>


      </div>



  );
}
