import React from 'react';
import {Badge, BtnMore, Cont, NewsItem, TitBlack, NewsTitle} from "./style";

const News = () => {
    return (
        <div className={'inner'}>
            <Cont>
                <TitBlack>
                    소식
                    <BtnMore type={'button'}><span className={'hidden'}>더보기</span></BtnMore>
                </TitBlack>
                <div>
                    <NewsItem>
                        <Badge className={'red new'}>공지</Badge>
                        <NewsTitle>
                            <strong>'근무시간을 지킵시다' 캠페인</strong>
                            <p><span>2022-05-15</span><span>김무브</span></p>
                        </NewsTitle>
                    </NewsItem>
                    <NewsItem>
                        <Badge className={'sky'}>일반</Badge>
                        <NewsTitle>
                            <strong>종합건강검진 예약</strong>
                            <p><span>2022-05-15</span><span>김무브</span></p>
                        </NewsTitle>
                    </NewsItem>
                </div>

            </Cont>
        </div>
    );
};

export default News;