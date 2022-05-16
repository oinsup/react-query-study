import React from 'react';
import styled from "styled-components";

interface BoxProps {
    height ?: number | string,
}

const ContWrap = styled.div`
`


const Box = styled.div<BoxProps>`
  flex:${props => props.height === undefined ? 1 : 'none'};
  border:1px solid #000;
  height:${props => props.height === 'auto' ? 'auto' : props.height === undefined ? 300 + 'px' : props.height + 'px'};
  display:flex;
  >.inner{flex:1;padding:15px;}
`

const Col = styled.div<BoxProps>`
  flex:1;
  display:flex;
  flex-direction: column;
  ${Box}{margin-bottom:15px;
    &:last-of-type{margin-bottom:0;}
  }
  @media screen and (max-width:768px){
    ${Box}{width:100%;flex:none;margin-right:0;margin-bottom:15px;
      &:last-child{margin-bottom:0;}
    }
  }
`

const Row = styled.div`
  flex:1;
  display:flex;
  margin-bottom:15px;
  &:last-child{margin-bottom:0;}
  >${Col}, >${Box}{margin-right:15px;flex:1;transition:.4s all;
    &:last-child{margin-right:0;}
  }
  @media screen and (max-width:768px){
    flex-wrap:wrap;
    >${Col}, >${Box}{width:100%;flex:none;margin-right:0;margin-bottom:15px;
      &:last-child{margin-bottom:0;}
    }
  }
`
const Label = styled.strong`
  margin-right:20px;
`

const Title = styled.h2`
  margin:0;
  font-size:24px;
`
const Btn = styled.button`
  background-color: ${props => props.theme || '#ffffff'};

`

const Dashboard = () => {
    return (
        <div>
            <h1>MOVEMENTS</h1>
            <ContWrap>
                <Row>
                    <Col>
                        <Box height={'auto'}>
                            <div className={'inner'}>
                                <div className={'flex ac'}>
                                    <Label>OKR</Label>
                                    <p className={'f1'}>퀀텀점프를 위한 완벽한 기초 만들기</p>
                                </div>
                            </div>
                        </Box>
                        <Box>
                            <div className={'inner'}>
                                <Title>공지사항</Title>
                            </div>
                        </Box>
                    </Col>
                    <Box>
                        <div className={'inner'}>
                            <Title>출근현황</Title>
                        </div>
                    </Box>
                </Row>
                <Row>
                    <Box>
                        <div className={'inner'}>
                            <Title>시스템 모니터링</Title>
                        </div>
                    </Box>
                    <Box>
                        <div className={'inner'}>
                            <Title>진행 중인 프로젝트</Title>
                        </div>
                    </Box>
                </Row>
                <Row>
                    <Box height={'auto'}>
                        <div className={'inner'}>
                            <Title>시스템 모니터링</Title>
                        </div>
                    </Box>
                </Row>
            </ContWrap>
        </div>
    );
};

export default Dashboard;