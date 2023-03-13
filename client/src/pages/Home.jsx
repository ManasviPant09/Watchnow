import React, { useState } from 'react';
import styled from 'styled-components';
import Featured from '../components/Featured';
import Navbar from '../components/Navbar';

const Home = () => {
  const [isScrolled,setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0? false:true);
    return () => (window.onscroll = null);
  }
  return (
    <Container>
      <Navbar/>
      <Featured /> 
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;
export default Home;