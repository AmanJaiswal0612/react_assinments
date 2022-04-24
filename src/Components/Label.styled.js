import styled from "styled-components";

export const Label = styled.label`
  font-size: 10px;
  margin-right: 10px;
  font-size: ${(props)=>props.font};
 
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid red;
  width: ${(props) => props.width};
  margin-right: 10px;
  ${(props) =>
    `border:${props.border};
   color:${props.color};
   background:${props.bg};
   padding:${props.padding};
   margin-left:${props.align}`}
`;
