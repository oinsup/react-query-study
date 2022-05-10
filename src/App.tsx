import React, {useState} from 'react';
import {useQuery} from "react-query";
import {fetchApi2} from "./api/common";
import LoadList from "./LoadList";
import './common.scss'
import TestComp from "./components/TestComp";
import Dashboard from "./pages/Dashboard";




const App = () => {
    const [num,setNum] = useState<number>(1)
    const {data,status} = useQuery(['posts',num], () => fetchApi2(num),{
    });
    const onClick = (dir:string) =>{
        if (dir === 'up'){
            setNum(num+1)
        }else{
            setNum(num-1)
        }

    }
    const [state, setState] = useState<string>('')
    return (
        <div>
            <span>상태 : {status}</span>
            {status === 'success' ? <p>{data.data.unLoadingAddress}</p> : '로딩중'}
            <p>{num}</p>
            <button onClick={() => onClick('down')}>-</button>
            <button onClick={() => onClick('up')}>+</button>
            <LoadList/>
            <input type={'text'} className={'after'} onChange={(e) => {
                setState(e.target.value)
            }} value={state}/>
            <TestComp num={num}/>
            <Dashboard/>
        </div>
    );
};

export default App;