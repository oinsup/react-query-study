import axios from "axios";



export const fetchApi = async (num) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/location/unloading/${num}`)
    return data;
}

export const waitingApi = async (num) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/waiting/car/list`)
    return data;
}


export const loadListApi = async (pageNo,sort) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/location/loading/list`,
        {
            params:{
                pageNo:pageNo,
                sort:sort
            }
        })
    return data;
}
