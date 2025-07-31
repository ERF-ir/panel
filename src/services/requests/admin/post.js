import {axiosRequest} from "@/services/axios/config";


export async function  addPost  (data,token){
   return  await  axiosRequest.post('content/post/store',data,{
      headers: {'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)
}

export async function  listPost  (token){
   return  await  axiosRequest.get('content/post/index',{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)
}

export async function  deletePost  (id,token){
   return  await  axiosRequest.delete(`content/post/${id}`,{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
       .catch(error =>   error.response)
}

export async function  toggleStatus  (id,token){
   return  await  axiosRequest.patch(`content/post/${id}/toggle-status`,{},{
      headers: {'Authorization': `Bearer ${token}`}
   })
       .catch(error =>   error.response)
}


