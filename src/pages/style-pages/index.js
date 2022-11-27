import styled from "styled-components";


export const CategoryTitle=styled.h2`
font-size: 2rem;
font-weight: 300;
margin: 0;
`;


export const Container = styled.div`
width: 85%;
margin: auto;
`;

export const Picture = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
padding: 16px 20px 8px;
box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
width: 29%;
margin: 20px 0;
background: #ffffff;

img {
  width: 356px;
  height: 338px;
  object-fit: fill;
  box-shadow: 0px 0px 1.5px rgba(168, 172, 176, 0.19);
}
`;
export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;

export const Title=styled.p`
width: 100%;
margin: 10px 0 0 ;
text-align: start;
font-style: normal;
font-weight: 300;
font-size: 18px;
`;

export const Price = styled.p`
width: 100%;
margin: 0;
text-align: start;
font-style: normal;
font-weight: 600;
font-size: 18px;
`;
