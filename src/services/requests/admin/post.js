import {axiosRequest} from "@/services/axios/config";


export async function  addPost  (data){

   return  await  axiosRequest.post('content/post/store',data,{
      headers: {'Content-Type': 'multipart/form-data'},
   })
        .catch(error =>   error.response)

}


