import {axiosRequest} from "@/services/axios/config";


export  async function registerRequest (data) {

 return  await axiosRequest.post('auth/register',data,{
  headers: {'Content-Type': 'multipart/form-data'}
 }).catch(error =>  error.response.data.message)
}


export  async function loginRequest (data) {

 return  await axiosRequest.post('auth/login',data,{

 }).catch(error =>  error.response.data.data)
}

export  async function getMe (token) {

 return  await axiosRequest.get('auth/get-me',{

  headers: {'Authorization': `Bearer ${token}`},

 }).catch(error =>  error.response.data.data)
}