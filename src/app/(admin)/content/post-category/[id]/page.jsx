
import React from 'react';
import EditForm from "@/app/(admin)/content/post-category/[id]/EditForm";

const Page = async ({params})  =>  {

    //console.log(await params)
    return (


        <div>
            <EditForm id={params} />
        </div>
    );
};

export default Page;