import styled from "styled-components"

export const Wrapper= styled.div`
border-radius:20px;
background:red;
color:white;
border:1px solid black;
width:300px;
height:180px;
`

export const Logo=styled.img`
${(props)=>
`
width:${props.width};
height:${props.height};
margin-left:${props.mleft};
`

}
`

export const D= styled.p`
font-size:10px;
`
