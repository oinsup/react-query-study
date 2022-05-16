import axios from "axios";
import {FC} from "react";

const BASE_URL = 'http://118.67.135.235:8080/api';



const instance = axios.create({
    baseURL:BASE_URL,
    headers:{
        "Content-Type":"application/json; charset=utf-8",
    },
    timeout:1000
})




interface dataProps {
    num : number
}


export const fetchApi = async (num:number) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/location/unloading/${num}`)
    return data;
}


export const fetchApi2 = async (num:number) => {
    const {data} =
        await instance({
            method:'get',
            url:`/admin/location/unloading/${num}`,
        })
    return data;
}


export const waitingApi = async (num:number) => {
    const {data} = await axios.get<dataProps>(`http://118.67.135.235:8080/api/admin/waiting/car/list`)
    return data;
}


export const loadListApi = async (pageNo:number,sort?:string) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/location/loading/list`,
        {
            params:{
                pageNo:pageNo,
                sort:sort
            }
        })
    return data;
}
