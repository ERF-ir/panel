import {axiosRequest} from "@/services/axios/config";


export async function  addPostCateegory  (data){

   return  await  axiosRequest.post('content/post-category/store',data)
        .catch(error =>   error.response)

}
export async function  parentCategory  (){

   return  await  axiosRequest.get('content/post-category/index')
        .catch(error =>   error.response)

}
export async function  getCategory  (){

   return  await  axiosRequest.get('content/post-category/index')
        .catch(error =>   error.response)

}
export async function  deleteCategory  (id){

   return  await  axiosRequest.delete(`content/post-category/${id}`)
        .catch(error =>   error.response)
}
export async function  toggleStatus  (id){

   return  await  axiosRequest.patch(`content/post-category/${id}/toggle-status`)
        .catch(error =>   error.response)
}
export async function  showPostCategory (id){

   return  await  axiosRequest.get(`content/post-category/${id}`)
        .catch(error =>   error.response)
}
export async function  editPostCategory (id,data){

   return  await  axiosRequest.put(`content/post-category/${id}`,data)
        .catch(error =>   error.response)
}


