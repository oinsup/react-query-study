import React, {useState} from 'react';
import {useQuery} from "react-query";
import {fetchApi} from "./api/common";
import LoadList from "./LoadList";




const App = () => {
    const [num,setNum] = useState(1)
    const {data,status} = useQuery([num], () => fetchApi(num),{
    });
    const onClick = (dir:string) =>{
        if (dir === 'up'){
            setNum(num+1)
        }else{
            setNum(num-1)
        }

    }
    return (
        <div>
            <span>상태 : {status}</span>
            {status === 'success' ? <p>{data.data.unLoadingAddress}</p> : '로딩중'}
            <p>{num}</p>
            <button onClick={() => onClick('down')}>-</button>
            <button onClick={() => onClick('up')}>+</button>
            <LoadList/>
        </div>
    );
};

export default App;