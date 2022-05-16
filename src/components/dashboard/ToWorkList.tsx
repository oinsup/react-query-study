import React, {useState} from 'react';
import {Badge, Cont, Name, SwiperItem, TabList2, Time, TitBlack, ToWorkListWrap} from "./style";
import { Grid, Pagination } from "swiper";
import {SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const ToWorkList = () => {
    const initialList = [
        {name:'사무실',active:true},
        {name:'재택근무',active:false},
        {name:'외근',active:false},
        {name:'휴가',active:false},
    ]
    const [toWorkList,setToWorkList] = useState(initialList);
    const onClick = (index:number) => {
        const newArr = [...toWorkList]
        for (let i = 0; i < newArr.length; i++){
            newArr[i].active = false;
        }
        newArr[index].active = true;
        setToWorkList(newArr)
    }
    return (
        <div className={'inner'}>
            <Cont>
                <TitBlack>출근 현황</TitBlack>
                <div style={{height:'350px'}}>
                    <TabList2>
                        {
                            toWorkList.map(({name,active},index)=> {
                                return(
                                    <li key={index} className={active ? 'active' : undefined } onClick={() => onClick(index)}>{name}</li>
                                )
                            })
                        }

                    </TabList2>
                    <ToWorkListWrap
                        breakpoints={{
                            1650:{
                                slidesPerView:3,
                                slidesPerGroup:3,
                                grid:{
                                    rows: 6,
                                }
                            }
                        }}
                        slidesPerView={2}
                        slidesPerGroup={2}
                        grid={{
                            rows: 6,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}

                    >
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <span>오인섭</span>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'blue'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <SwiperItem>
                                <Badge className={'charcoal'}>강남</Badge>
                                <Time>09:00 - 18:00</Time>
                                <Name>오인섭</Name>
                            </SwiperItem>
                        </SwiperSlide>
                    </ToWorkListWrap>
                </div>
            </Cont>
        </div>
    );
};

export default ToWorkList;