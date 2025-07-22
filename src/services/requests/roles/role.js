import {axiosRequest} from "@/services/axios/config";


export  async function listRoles () {

    return  await axiosRequest.get('manage-roles/index').catch(error =>  error.response.data.message)
}

