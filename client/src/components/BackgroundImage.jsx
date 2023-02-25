import React from 'react';
import styled from "styled-components";
import Background from "../assets/Background.jpg";

const BackgroundImage = () => {
  return (
    <Container>
        <Image src={Background} alt="Background"/>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
const Image = styled.img`
  height: 100vh;
  width: 100vw;
`;


export default BackgroundImage;
