import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.2rem;
  background-color: #fff;
  border-radius: 1rem;
  align-items: left;
  border: 2px solid #c7b0b3;
`;

const Profile = styled.ul`
  width: 100%;
  display : flex;
  flex-direction : row;
  justify-content: left;
  align-items: left;
  gap : 1rem ; 

  li  {
      color : black ; 
      font-weight : 800;
    }
`;

const TextContainer = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-left: 0.25rem;
  display: flex;
  justify-content: flex-start;
`;

const CardPic = styled.div `
  background-color : black ; 
  width : 100%;
  height : 200px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.p`
  width : 100%
  border: 1px solid red;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2rem;
`;



export { 
  CardWrapper, 
  CardTitle, 
  Profile,
  CardPic,
  TextContainer,
};