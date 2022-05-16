import React, {useState} from 'react';
import styled from "styled-components";

const LnbWrap = styled.ul`
  width:260px;
  @media screen and (max-width:1024px){
    display:none;
    &.active{position:fixed;left:50%;top:92px;display:block;transform:translateX(-50%);width:calc(100% - 144px);height:calc(100% - 92px);background-color:#fff;}
  }
`

const LnbItem = styled.li`
  color:#1a1b1e;line-height: 48px;font-size:18px;border-radius: 8px;cursor:pointer;padding:0 20px;font-family:'Pretendard';font-weight:bold;
  &:not(:last-child){margin-bottom:4px;}
  &.active{background-color:#fff;box-shadow: 1px 1px 10px rgba(0, 0, 0, .04);}
`
const LnbMobile = styled.strong`
  display:block;line-height:60px;background-color:#fff;border-radius: 8px;box-shadow: 1px 1px 10px rgba(0, 0, 0, .04);
  opacity:0;visibility:hidden;padding:0;width:0;
  @media screen and (max-width:1024px){
    visibility:visible;opacity:1;transition:.4s;padding:0 20px;width:auto;
  }
`
const Dimmed = styled.div`
  display:none;position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.5);
  @media screen and (max-width:1024px){
    &.active{display:block;}
  }
`
const Emoji = styled.span`
  width:22px;display:inline-block;margin-right:12px;text-align:center;
`

const Lnb = () => {
    const initialMenu = [
        {name:'홈',active:true,emoji:'💫'},
        {name:'무브먼츠 소식',active:false,emoji:'📢'},
        {name:'프로젝트',active:false,emoji:'🔥'},
        {name:'근무',active:false,emoji:'⏱'},
        {name:'휴가',active:false,emoji:'🌴'},
        {name:'워크플로우',active:false,emoji:'📝'},
        {name:'파일함',active:false,emoji:'🗄'},
        {name:'고객 문의 사항',active:false,emoji:'🛎'},
        {name:'인재 채용',active:false,emoji:'🚀'}
    ]
    const [currentMenu, setCurrentMenu] = useState('홈');
    const [menuList,setMenuList] = useState(initialMenu);
    const [menuToggle,setMenuToggle] = useState(false);
    const onClick = (index:number) => {
        const newArr = [...menuList]
        for (let i = 0; i < newArr.length; i++){
            newArr[i].active = false;
        }
        newArr[index].active = true;
        setMenuList(newArr)
        setCurrentMenu(newArr[index].name)
    }
    const onMenuOpen = (type?:boolean) => {
        if(type === false ){
            setMenuToggle(false)
        }else{
            setMenuToggle(!menuToggle)
        }

    }
    return (
        <>
            <LnbMobile onClick={() => onMenuOpen()}>{currentMenu}</LnbMobile>
            <Dimmed className={menuToggle ? 'active' : undefined}> </Dimmed>
            <LnbWrap className={menuToggle ? 'active' : undefined}>
                {
                    menuList.map(({name,active,emoji},index) => {
                        return(
                            <LnbItem key={index} className={active ? 'menuItem active' : 'menuItem'} onClick={() => {
                                onClick(index);
                                onMenuOpen(false)
                            }}>
                                <Emoji>{emoji}</Emoji>
                                {name}
                            </LnbItem>

                        )
                    })
                }
            </LnbWrap>
        </>
    );
};

export default Lnb;