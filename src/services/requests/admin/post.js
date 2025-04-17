import {axiosRequest} from "@/services/axios/config";


export async function  addPost  (data){
   return  await  axiosRequest.post('content/post/store',data,{
      headers: {'Content-Type': 'multipart/form-data'},
   })
        .catch(error =>   error.response)
}

export async function  listPost  (){
   return  await  axiosRequest.get('content/post/index')
        .catch(error =>   error.response)
}

export async function  deletePost  (id){
   return  await  axiosRequest.delete(`content/post/${id}`)
       .catch(error =>   error.response)
}

export async function  toggleStatus  (id){
   return  await  axiosRequest.patch(`content/post/${id}/toggle-status`)
       .catch(error =>   error.response)
}


