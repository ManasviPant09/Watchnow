import React, { useState } from 'react';
import styled from "styled-components";
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import firebase from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignup = async(e) =>{
    e.preventDefault();
    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("created");
        firebase.database().ref(`users/${user.uid}`).set({
          email: email,
          password: password
        });
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
  }
  return (
    <Container>
        <BackgroundImage />
        <Wrapper>
        <Header />
        <Body>
        <TextContainer>
          <Title1>Unlimited movies, TV shows and more.</Title1>
          <Title2>Watch anywhere. Cancel anytime.</Title2>
          <Title3>Ready to watch? Enter your email to create or restart your membership.</Title3>
        </TextContainer>
        <Form>
          <Input placeholder="Email address" type="email" onChange={(e)=>setEmail(e.target.value)} />
          {showPassword && (<Input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />)}
          {!showPassword && (<Button onClick={() => setShowPassword(true)}>Get Started<ArrowForwardIosIcon style={{fontSize: "20px",marginBottom: "-2px",marginLeft: "5px"}} /></Button>)}
          {showPassword && <Button onClick={handleSignup}>Register</Button>}
        </Form>
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
const Body = styled.div`
  gap: 1rem;
  margin-top: 100px;
`;
const TextContainer = styled.div`
  text-align: center;
  font-size: 2rem;
  color: white;
  margin-left: 200px;
  margin-right: 200px;
`;
const Title1 = styled.h2` 
  margin-left: 175px;
  margin-right: 175px;
  margin-bottom: -30px;
`;
const Title2 = styled.h5`
  margin-left: 175px;
  margin-right: 175px;
  margin-bottom: -20px;
  font-size: 30px;
  font-weight: 500;
`;
const Title3 = styled.h6`
  font-weight: 500;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: grid;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 250px;
  margin-right: 300px;
`;
const Input = styled.input`
  color: black;
  border: 1px solid black;
  padding: 1rem;
  font-size: 1.2rem;
  width: 60%;
  border-radius: 2px;
  &:focus {
  outline: none;
}
`;
const Button = styled.button`
  padding: 0.80rem;
  background-color: #e50914;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: white;
  font-weight: 200;
  font-size: 1.5rem;
  align-items: center;
  width: 30%;
`;
export default Register;