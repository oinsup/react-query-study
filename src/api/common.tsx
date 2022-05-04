import axios from "axios";

interface dataProps {
    num : number
}

export const fetchApi = async (num:number) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/location/unloading/${num}`)
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
