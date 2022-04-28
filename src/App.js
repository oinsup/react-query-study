import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {fetchApi} from "./api/common";




const App = () => {
    const [num,setNum] = useState(1)
    const {data,isLoading,status} = useQuery(['todo',num], () => fetchApi(num),{
    });
    const onClick = () =>{
        setNum(num+1)
    }
    return (
        <div>
            <span>상태 : {status}</span>
            {status === 'success' ? <p>{data.data.unLoadingAddress}</p> : '로딩중'}
            <p>{num}</p>
            <button onClick={onClick}>버튼</button>
        </div>
    );
};

export default App;