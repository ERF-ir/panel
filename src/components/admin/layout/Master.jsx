
import SidBar from "@/components/admin/layout/SidBar";
import Header from "@/components/admin/layout/Header";
import {useRouter} from "next/navigation";
import {useEffect} from "react";


const Master = ({children}) => {

    return (


        <>
        <div className={'grid grid-cols-10 '}>
            <SidBar/>
            <main className={'col-span-8  bg-white  vh overflow-auto'}>
                <Header/>
                <section className={'p-5 bg-[#f4f7fc] shadow-[0_0_8px_#dcddde] me-5   rounded-xl'}>
                    {children}
                </section>
            </main>
        </div>
        </>
    );
};

export default Master;