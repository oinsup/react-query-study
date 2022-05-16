import React from 'react';
import {Btn, Cont, TitBlack, TxtMain} from "./style";

const ToWork = () => {
    return (
        <div className={'inner'}>
            <Cont>
                <TitBlack>5월 13일 금요일</TitBlack>
                <TxtMain>김무브님<br/>오늘은 활기찬 금요일 입니다.</TxtMain>
                <Btn type={'button'} style={{'marginTop': 'auto'}}><span>근무중</span></Btn>
            </Cont>
        </div>
    );
};

export default ToWork;