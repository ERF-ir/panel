import {axiosRequest} from "@/services/axios/config";


export async function  addpublicDiscount  (data){
    return  await  axiosRequest.post('store/public-discount/store',data,{
    })
        .catch(error =>   error.response)
}

export async function  ListpublicDiscounts  (){
    return  await  axiosRequest.get('store/public-discount/index')
        .catch(error =>   error.response)
}



