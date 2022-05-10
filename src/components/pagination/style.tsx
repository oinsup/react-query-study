import styled from "styled-components";


interface PaginationProps {
    width?:number,
    height?:number
}

export const PaginationWrap = styled.div<PaginationProps>`
  display:flex;
  button{background:none;
    width:${props => props.width + 'px' || 50+'px'};
    height:${props => props.height + 'px' || 50+'px'};
    font-size:16px;}
`
