import {baseURL} from "@/consts";

export function url(url)
{
    return `${baseURL}${url}`;
}

export  function getCookie() {
    let cookies = document.cookie.split(';')
    let r = cookies.find((c)=>{
        return c.includes('token')
    })
    return  r.split('=')[1]
}