import {axiosRequest} from "@/services/axios/config";
import {data} from "@/app/(admin)/home/page";


export  async function listRoles () {

    return  await axiosRequest.get('manage-roles/index').catch(error =>  error.response.data.message)
}
export  async function permissions () {

    return  await axiosRequest.get('manage-roles/permissions').catch(error =>  error.response.data.message)
}
export  async function addRole (data) {

    return  await axiosRequest.post('manage-roles/store',data).catch(error =>  error.response.data.message)
}

