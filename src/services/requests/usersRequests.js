import {axiosRequest} from "@/services/axios/config";
import {data} from "@/app/(admin)/home/page";


export async function  usersList  (token){
    return  await  axiosRequest.get('users/index',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}

export async function  storeRoles  (id,data,token){
    return  await  axiosRequest.post(`users/${id}`,data,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}




