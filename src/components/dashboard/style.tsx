import styled from "styled-components";
import { Swiper } from 'swiper/react';

import 'swiper/css';
export const Cont = styled.div`
  display:flex;flex-direction:column;height:100%;
`

export const TitBlack = styled.div`
  display:flex;justify-content:space-between;font-size:16px;font-weight:bold;color:#1a1b1e;margin-bottom:22px;
`

export const TitGray = styled(TitBlack)`
  color:#80828b;
`

export const TxtMain = styled.p`
  font-size:24px;font-weight:bold;color:#242a30;line-height:36px;
`


export const Btn = styled.button`
  display:flex;align-items:center;justify-content:center;height:40px;background: #19aa5c;color:#fff;font-size:14px;font-weight:bold;border-radius:4px;
`


export const BtnMore = styled.button`
  width:24px;height:24px;background:url("/images/common/btn-more.svg")no-repeat center;
`

export const Badge = styled.span`
  position:relative;display:block;width:40px;height:40px;border-radius:6px;box-sizing:border-box;line-height:40px;text-align:center;color:#fff;font-size:12px;font-weight:bold;
  &.new{
    &:before{position:absolute;left:-4px;top:-4px;content:'';display:block;width:12px;height:12px;border-radius:50%;border:2px solid #fff;
    background:#19aa5c;box-sizing:border-box}
  }
  &.red{background:#dd5d5d;border:1px solid #d55454;}
  &.sky{background:#78acea;border:1px solid #719dd1;}
  &.blue{background:#5871de;border:1px solid #4e66ce;}
  &.charcoal{background: #42545a;border:1px solid #3c494d;}
`
export const NewsItem = styled.div`
  display: flex;align-items:center;
  &:not(:last-child){margin-bottom:24px;}
`

export const NewsTitle = styled.div`
  flex:1;margin-left:12px;
  strong{display:block;font-size:14px;color:#2b2b2b;font-weight: bold;margin-bottom:6px;}
  p{display:flex;justify-content:space-between;font-size:14px;color:#80828b;font-weight:300;}
`


export const TabWrap = styled.div`
  margin-top:auto;
`

export const TabList = styled(Swiper)`
  .swiper-slide{
    width:auto;height:34px;line-height:34px;padding:0 14px;box-sizing:border-box;border:1px solid #f0f1f1;border-radius: 6px;
    font-weight:bold;color:#3c4651;cursor:pointer;word-break:keep-all;transition: .4s;
    &:not(:last-child){margin-right:6px;}
    &.active{color:#fff;border:0;background:#19aa5c;border-radius:4px;}
  }
    
`


export const ToWorkListWrap = styled(Swiper)`
  width: 100%;height: 100%;
  .swiper-slide {
    display:flex;
    align-items:center;
    text-align: center;
    font-size: 14px;
    background: #fff;
    height: calc((100% - 45px) / 6) !important;
    &:nth-child(6n){margin-bottom:45px;}
  }
  .swiper-pagination{display:flex;align-items:center;justify-content:center;bottom: 0;}
  .swiper-pagination-bullet{width:10px;height:10px;border:2px solid #b9bbc6;background:#fff;opacity:1;transition:.4s;}
  .swiper-pagination-bullet-active{width:12px;height:12px;border:0;background: #3c4651;}
`

export const SwiperItem = styled.div`
  display:flex; align-items:center;
`

export const Time = styled.span`
  margin:0 6px ;font-weight:300;color:#2b2b2b;
`
export const Name = styled.span`
  font-weight:300;color:#80828b;
`

export const TabList2 = styled.ul`
  display:flex;border-bottom:1px solid #e8e9ea;margin-bottom:24px;
  li{position:relative;font-size:16px;color:#3c4651;padding-bottom:18px;cursor:pointer;font-weight:300;
    &:after{position:absolute;left:50%;bottom:-1px;display:block;content:'';width:0%;height:3px;background:transparent;transition:.4s;}
    &.active{
      &:after{left:0;width:100%;background:#19aa5c}
    }
    &:not(:last-child){margin-right:30px}
  }
`
