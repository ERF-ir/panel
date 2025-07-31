import {log} from "next/dist/server/typescript/utils";
import EditRole from "@/app/(admin)/users/EditRole";

const Page = async ({params}) => {

    return (
        <div>

           <EditRole id={params} />

        </div>
    );
};

export default Page;