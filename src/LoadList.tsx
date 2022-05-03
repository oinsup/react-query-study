import React, {useEffect, useState} from 'react';
import {useQuery} from "react-query";
import {loadListApi} from "./api/common";
import Pagination from "./components/pagination/Pagination";

export default function LoadList(){
    const [pageNo, setPageNo] = useState<number>(1);
    const [pageGroup, setPageGroup] = useState<number>(1);
    const loadList = useQuery(['loadlist',pageNo,pageGroup],() => loadListApi(pageNo));

    return (
        <div>
            {
                loadList.status === 'success' &&
                    <>
                        <table>
                            <thead>
                            <tr>
                                <th scope="col">1</th>
                                <th scope="col">2</th>
                                <th scope="col">3</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                loadList.data.data.content.map((i:any,index:any) => {
                                    return(
                                        <tr key={index}>
                                            <td>{i.loadingId}</td>
                                            <td>{i.loadingAddress}</td>
                                            <td>{i.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        <Pagination
                            pageNo={pageNo}
                            pageGroup={pageGroup}
                            setPageGroup={setPageGroup}
                            setPageNo={setPageNo}
                            data={loadList.data.data}
                        />
                    </>
            }

        </div>
    );
};

