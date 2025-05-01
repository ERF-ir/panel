import {axiosRequest} from "@/services/axios/config";


export async function  addCouponDiscount  (data){
    return  await  axiosRequest.post('store/coupon-discount/store',data,{
    })
        .catch(error =>   error.response)
}





