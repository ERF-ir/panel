import {axiosRequest} from "@/services/axios/config";


export async function  addPostCateegory  (data,token){

   return  await  axiosRequest.post('content/post-category/store',data,{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)

}
export async function  parentCategory  (token){

   return  await  axiosRequest.get('content/post-category/index',{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)

}
export async function  getCategory  (token){

   return  await  axiosRequest.get('content/post-category/index',{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)

}
export async function  deleteCategory  (id,token){

   return  await  axiosRequest.delete(`content/post-category/${id}`,{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)
}
export async function  toggleStatus  (id,token){

   return  await  axiosRequest.patch(`content/post-category/${id}/toggle-status`,{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)
}
export async function  showPostCategory (id,token){

   return  await  axiosRequest.get(`content/post-category/${id}`,{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)
}
export async function  editPostCategory (id,data,token){

   return  await  axiosRequest.put(`content/post-category/${id}`,data,{
      headers: {
         'Authorization': `Bearer ${token}`
      },
   })
        .catch(error =>   error.response)
}


