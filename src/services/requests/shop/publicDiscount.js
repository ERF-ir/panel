import {axiosRequest} from "@/services/axios/config";


export async function  addpublicDiscount  (data,token){
    return  await  axiosRequest.post('store/public-discount/store',data,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}

export async function  ListpublicDiscounts  (token){
    return  await  axiosRequest.get('store/public-discount/index',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}
export async function  ListCopenDiscounts  (token){
    return  await  axiosRequest.get('store/coupon-discount/index',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}



