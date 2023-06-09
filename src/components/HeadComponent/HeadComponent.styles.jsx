import styled from 'styled-components';

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  height : 4rem;
  background-color : #c7b0b3;
  padding-left : 20px;
  padding-right : 10px;
  justify-content : space-between;
`;

const HeadImg = styled.img`
width: 40%;
object-fit: contain ;
`;

const HeadIcon = styled.ul `
display: flex ;
display : row ; 
align-items : center ; 
justify-content : center ; 

li{
  color : #591823;
}
`;

const Button = styled.button`
  background-color: #c7b0b3;

`;

export {
  HeadContainer, 
  HeadImg,
  HeadIcon, 
  Button, 
};