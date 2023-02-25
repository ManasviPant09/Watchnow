import React, { useState } from 'react';
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import BackgroundImage from '../components/BackgroundImage';
import {GoogleButton} from "react-google-button";
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';
import { provider } from '../utils/firebase-config';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showPasswordWarning, setShowPasswordWarning] = useState(false); 
  const navigate = useNavigate();
  //SIGNIN
  const handleLogin = async(e) =>{
    if (email.trim() === '') {
      setShowEmailWarning(true);
    }
    if (password.length < 4 || password.length > 60 || password.length === 0 ) {
      setShowPasswordWarning(true);
    }
    e.preventDefault();
    firebaseAuth.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  //GOOGLE SIGN IN
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    firebaseAuth.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const db = firebaseAuth.database();
        db.ref('users/' + user.uid).set({
          name: user.displayName,
          email: user.email
        });
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  
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
              <Input placeholder="Email" name="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
              {showEmailWarning && <WarningEmail>Please enter a valid email address!</WarningEmail>}
              <Input placeholder="Password" name="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
              {showPasswordWarning && <WarningPassword>Your password must contain between 4 and 60 characters.</WarningPassword>}
              <Button onClick={handleLogin}>Sign In</Button>
              <GoogleButton style={GoogleLogin} onClick={handleGoogleSignIn}/>
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
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #404040;
  ::placeholder{
    color: white;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    transform-origin: top left;
  }
  &:focus {
    outline: none;
    ::placeholder {
      font-size: 0.75rem;
      transform: translateY(-10px);
    }
  }
`;
const WarningEmail = styled.span`
  color: #FFAC1C;
  font-size: 0.75rem;
  margin-top: -2%;
`;
const WarningPassword = styled.span`
  color: #FFAC1C;
  font-size: 0.75rem;
  margin-top: -2%;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  border-radius: 5px;
  margin: 30px 20px 15px 0;
  padding: 15px 5px 15px 5px;
  background-color: #e50914;
  color: white;
  cursor: pointer;
  width: 95%;
`;
const GoogleLogin = {
  width: "95%",
  border: "none",
  borderRadius: "5px",
}
export default Login;
