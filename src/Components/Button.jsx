import styled from "styled-components";

export const Button = styled.button`
/* background:${(props) => props.background};
color:${(props) => props.color};
border:${(props) => props.border};
padding:7px 10px;
border-radius: 3px; */

${(props) =>
  `background:${props.background};
   color:${props.color};
   border:${props.border};
   border-radius:5px;
   padding: 7px 10px;
   border-radius:${props.borderRadius};
   background-image:url('${props.bimg}');`}

`;

export const Rapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
