import React from 'react';
import styled from "styled-components";
import Lnb from "../Lnb";
import ToWork from "../dashboard/ToWork";
import Vision from "../dashboard/Vision";
import News from "../dashboard/News";
import ToWorkList from "../dashboard/ToWorkList";

const ContainerWrap = styled.div`
  display:flex;padding:112px 85px 0;transition:.4s;
  @media screen and (max-width:1600px){
    padding:112px 72px 0;
  }
  @media screen and (max-width:1024px){
    flex-direction:column;
  }
  @media screen and (max-width:768px){
    padding:112px 72px 0;
  }
`

const Content = styled.div`
  flex:1;
  >.inner{padding-left:82px;transition:.4s;}
  
  @media screen and (max-width:1600px){
    >.inner{padding-left:30px;}
  }
  @media screen and (max-width:1024px){
    >.inner{padding-left:0;}
  }
`

const TitPage = styled.h1`
  font-weight:bold;font-size:28px;color:#1a1b1e;margin-bottom:23px;
`
const Emoji = styled.span`
  display:inline-block;margin-right:12px;text-align:center;
`


const Dashboard = styled.div`
  display:grid;
  gap:30px 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1600px){
    gap:24px;
  }
  @media screen and (max-width: 1260px){
    grid-template-columns:1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns:100%;
  }
`

const Box = styled.div`
  background-color:#fff;height:240px;border-radius:6px;box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, .04);
  >.inner{padding:24px;height:calc(100%);}
  &:nth-child(3){grid-column: 3 / span 2}
  &:nth-child(4){grid-column: 1 / span 2; grid-row: 2 / span 2; height:auto;}
  &:nth-child(5){grid-column: 3 / span 2;}
  @media screen and (max-width: 1260px){
    &:nth-child(3){grid-row:2; grid-column:1 / span 2}
    &:nth-child(4){grid-row:3; grid-column:1 / span 2; height:510px}
    &:nth-child(5){grid-column: 1 / span 2; }
  }
  @media screen and (max-width: 768px){
    grid-template-columns:1fr;
    grid-column:1;
    &:nth-child(3){grid-row:3;grid-column:1}
    &:nth-child(4){grid-row:4;grid-column:1}
    &:nth-child(5){grid-row:5;grid-column:1}
    &:nth-last-child(1),&:nth-last-child(2){height:120px;}
  }
  
`



const Container = () => {
    return (
        <ContainerWrap>
            <Lnb/>
            <Content>
                <div className={'inner'}>
                    <TitPage><Emoji>💫</Emoji>홈</TitPage>
                    <Dashboard>
                        <Box>
                            <ToWork/>
                        </Box>
                        <Box>
                            <News/>
                        </Box>
                        <Box>
                            <Vision/>
                        </Box>
                        <Box>
                            <ToWorkList/>
                        </Box>
                        <Box>
                            <div className={'inner'}>
                                <span>5월 13일 금요일</span>
                                <p>김무브님<br/>오늘은 활기찬 금요일입니다.</p>
                                <button type={'button'} style={{'marginTop': 'auto'}}><span>근무중</span></button>
                            </div>
                        </Box>
                        <Box>
                            <div className={'inner'}>
                                <span>5월 13일 금요일</span>
                                <p>김무브님<br/>오늘은 활기찬 금요일입니다.</p>
                                <button type={'button'} style={{'marginTop': 'auto'}}><span>근무중</span></button>
                            </div>
                        </Box>
                        <Box>
                            <div className={'inner'}>
                                <span>5월 13일 금요일</span>
                                <p>김무브님<br/>오늘은 활기찬 금요일입니다.</p>
                                <button type={'button'} style={{'marginTop': 'auto'}}><span>근무중</span></button>
                            </div>
                        </Box>
                    </Dashboard>
                </div>
            </Content>
        </ContainerWrap>
    );
};

export default Container;