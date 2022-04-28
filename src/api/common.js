import axios from "axios";



export const fetchApi = async (num) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/location/unloading/${num}`)
    return data;
}

export const waitingApi = async (num) => {
    const {data} = await axios.get(`http://118.67.135.235:8080/api/admin/waiting/car/list`)
    return data;
}
