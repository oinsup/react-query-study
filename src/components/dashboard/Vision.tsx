import React, {useState} from 'react';
import {Cont, TabList, TabWrap, TitGray, TxtMain} from "./style";
import {SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Vision = () => {
    const initialList = [
        {name:'전체',active:true,desc:'J 커브 성장을 위한 3분기 이내에 제품 상품성 강화 및 조직 안정화를 시킨다.'},
        {name:'경영지원',active:false,desc:'경영지원 OKR'},
        {name:'사업관리',active:false,desc:'사업관리 OKR'},
        {name:'피플팀',active:false,desc:'피플팀 OKR'},
        {name:'데이터',active:false,desc:'데이터 OKR'},
        {name:'솔루션',active:false,desc:'솔루션 OKR'},
        {name:'프로덕트',active:false,desc:'프로덕트 OKR'},
        {name:'메타버스',active:false,desc:'메타버스 OKR'},
    ]
    const [visionList,setVisionList] = useState(initialList);
    const [desc, setDesc] = useState(visionList[0].desc)
    const onClick = (index:number) => {
        const newArr = [...visionList]
        for (let i = 0; i < newArr.length; i++){
            newArr[i].active = false;
        }
        newArr[index].active = true;
        setVisionList(newArr)
        setDesc(newArr[index].desc)
    }

    return (
        <div className={'inner'}>
            <Cont>
                <TitGray>OKR & Vision</TitGray>
                <TxtMain>
                    {desc}
                </TxtMain>
                <TabWrap>
                    <TabList
                        spaceBetween={6}
                        slidesPerView={"auto"}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                            {visionList.map(({name,active},index)=>{
                                return(
                                    <SwiperSlide key={index} className={active ? 'active' : undefined} onClick={() => onClick(index)}>
                                        {name}
                                    </SwiperSlide>
                                )
                            })}
                    </TabList>
                </TabWrap>
            </Cont>
        </div>
    );
};

export default Vision;