import styled from "styled-components";


export const PaginationWrap = styled.div`
  display:flex;
  button{background:none;
    width:${(props:any) => props.width + 'px' || 50+'px'};
    height:50px;font-size:16px;}
`
