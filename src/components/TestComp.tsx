import React, {useEffect} from 'react';
import {QueryClient, useQueryClient} from "react-query";
import {queries} from "@testing-library/react";


interface TestCompProps {
    num:number,

}

const TestComp = ({num}:TestCompProps) => {

    const call = useQueryClient()
    console.log(call.getQueryData(['posts',num]))
    return (
        <div>

        </div>
    );
};

export default TestComp;