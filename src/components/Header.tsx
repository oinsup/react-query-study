import React from 'react';
import styled from "styled-components";

const HeaderWrap = styled.header`
  position:fixed;left:0;top:0;width:100%;height:72px;background:#212224;display:flex;align-items:center;justify-content:space-between;padding:0 85px;transition:.4s;
  >.flex{flex:1;}
  @media screen and (max-width:1600px){
    padding:0 72px;
  }
`

const Logo = styled.div`
  width:125px;height:14px;background:url("/images/header/logo.svg")no-repeat center;
`

const UserMenu = styled.div`
  display:flex;align-items:center;
`

const UserBtn = styled.button`
  &:not(:first-child){margin-left:20px;}
  &.btnUser{
    width:40px;height:40px;border-radius:6px;overflow:hidden;background-color:#19aa5c;box-sizing:border-box;border:1px solid #179150;margin-left:40px;
    img{width:100%;height:100%;}
  }
`


const Header = () => {
    return (
        <HeaderWrap>
            <div className={'flex sb ac'}>
                <Logo/>
                <UserMenu>
                    <UserBtn type={'button'}>
                        <img src={'/images/header/btn-organization.svg'} alt={'조직도'}/>
                        <span className={'hidden'}>{'조직도'}</span>
                    </UserBtn>
                    <UserBtn type={'button'}>
                        <img src={'/images/header/btn-alarm.svg'} alt={'알림'}/>
                        <span className={'hidden'}>{'알림'}</span>
                    </UserBtn>
                    <UserBtn type={'button'} className={'btnUser'}>
                        <span className={'hidden'}>{'사용자명'}</span>
                    </UserBtn>

                </UserMenu>
            </div>
        </HeaderWrap>
    );
};

export default Header;