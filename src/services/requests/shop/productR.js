import {axiosRequest} from "@/services/axios/config";




export async function  listProducts  (token){
    return  await  axiosRequest.get('store/product/index',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}



export async function  toggleStatusp  (id,token){
    return  await  axiosRequest.patch(`store/product/toggle-status/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}


