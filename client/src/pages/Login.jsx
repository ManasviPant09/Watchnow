import React from 'react';
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Logo from "../assets/Logo.png";

const Register = () => {
  return (
    <Container>
        <BackgroundImage />
        <Wrapper>
          <Heading>
            <Image src = {Logo} />
          </Heading>
          <Body>
            <Content>
            <Title>Sign In</Title>
            <Form>
              <Input placeholder="Email" name="username" type="text"/>
              <Input placeholder="Password" name="password" type="password"/>
              <Button>Sign In</Button>
            </Form>
            </Content>
          </Body>
        </Wrapper>    
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  font-family: "Poppins",sans-serif;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
`;
const Heading = styled.div`
  padding-left: 20px;  
  padding-top: 10px;
  display: flex;
  align-items: center; 
  flex : 1;
`;
const Image = styled.img`
  height: 5.5rem;
`;
const Body = styled.div`
  margin: auto;
  width: 33%;
  height: 80vh;
  background-color: black;
  opacity: 0.80;
  border-radius: 5px;
  box-shadow: 5px 5px 25px -5px;
`;
const Content = styled.div`
  margin: 70px 60px 70px 60px;
`;
const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 550;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  width: 90%;
  margin: 20px 20px 15px 0;
  padding: 15px 5px 15px 5px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 2px;
  margin: 50px 20px 15px 0;
  padding: 15px 5px 15px 5px;
  background-color: #e50914;
  color: white;
  cursor: pointer;
  width: 95%;
`;
export default Register;
