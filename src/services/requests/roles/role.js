import {axiosRequest} from "@/services/axios/config";
import {data} from "@/app/(admin)/home/page";


export  async function listRoles (token) {

    return  await axiosRequest.get('manage-roles/index',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).catch(error =>  error.response.data.message)
}
export  async function permissions (token) {

    return  await axiosRequest.get('manage-roles/permissions',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).catch(error =>  error.response.data.message)
}
export  async function permissionsUser (token) {

    return  await axiosRequest.get('manage-roles/permissions-user',{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).catch(error =>  error.response.data.message)
}


export  async function addRole (data,token) {

    return  await axiosRequest.post('manage-roles/store',data,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).catch(error =>  error.response.data.message)
}

