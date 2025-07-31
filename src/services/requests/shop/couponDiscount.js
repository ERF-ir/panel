import {axiosRequest} from "@/services/axios/config";


export async function  addCouponDiscount  (data,token){
    return  await  axiosRequest.post('store/coupon-discount/store',data,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .catch(error =>   error.response)
}





