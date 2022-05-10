import React, {ReactEventHandler, useEffect, useState} from 'react';
import {PaginationWrap} from "./style";

interface PagiProps {
    data: {
        totalPages:number,
        pageable:{
            pageSize:number
        }
    },
    pageNo:number,
    setPageNo:React.Dispatch<number>,
    pageGroup:number,
    setPageGroup:React.Dispatch<number>
}


export default function Pagination({data,pageNo,setPageNo,pageGroup,setPageGroup}:PagiProps) {
    const [startRow, setStartRow] = useState(1);
    const [pageable,setPageable] = useState({
        pageSize:data.pageable.pageSize,
        totalPages:data.totalPages,
    })
    const {pageSize, totalPages} = pageable;
    useEffect(() => {
        setStartRow((pageGroup - 1) * pageSize + 1)
        console.log(pageGroup)
    },[pageGroup]);
    let endRow = pageGroup * pageSize > totalPages ? totalPages : pageGroup * pageSize;
    const pageList = () => {
        const pageListArr = [];
        for(let i = startRow; i < endRow +1; i++){
            pageListArr.push(
                <button
                    className={pageNo ===  i ? 'active' : undefined}
                    key={i}
                    onClick={()=>{
                        setPageNo(i)
                    }}
                    disabled={pageNo ===  i}
                >{i}</button>
            )
        }
        return pageListArr;
    }

    const onFirst = () => {
        setPageGroup(1);
        setPageNo(1)
    }

    const onPrev = () => {
        if (pageGroup === 1) return;
        setPageGroup(pageGroup - 1);
        setPageNo((pageGroup - 1) * pageSize);
    }

    const onNext = () => {
        if (pageGroup * 10 > totalPages) return;
        setPageGroup(pageGroup + 1)
        setPageNo((pageGroup * pageSize) + 1)
        console.log('pageGroup : '+ pageGroup + 'pageNo :' + pageNo)
    }

    const onLast = () => {
        setPageGroup(Math.ceil(totalPages / pageSize));
        setPageNo(totalPages );
    }

    return (
        <>
            <PaginationWrap width={75} height={70}>
                {
                    totalPages < pageSize || pageGroup === 1 ? null :
                        <>
                            <button
                                onClick={onFirst}
                            >처음으로</button>

                            <button
                                onClick={onPrev}
                            >이전</button>
                        </>

                }

                {pageList()}
                {
                    pageGroup * 10 > totalPages - 1 ? null :
                        <>
                            <button
                                onClick={onNext}
                            >다음</button>

                            <button
                                onClick={onLast}
                            >마지막으로</button>
                        </>
                }
            </PaginationWrap>
        </>

    );
};

