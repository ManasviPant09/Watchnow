import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';
const Navbar = ({isScrolled}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Image src={Logo} alt="Netflix Logo" />
        </Left>
        <Center>
          <Title>Home</Title>
          <Title>TV Shows</Title>
          <Title>Movies</Title>
          <Title>New & Popular</Title>
          <Title>My List</Title>
          <Title>Browse by Languages</Title>
        </Center>
        <Right>
          <SearchIcon style={{marginTop: "-1.5%", marginRight: "2%"}} />
          <Children>Children</Children>
          <NotificationsNoneIcon style={{marginTop: "-1.5%", marginRight: "2%"}}/>
        </Right>
      </Wrapper>
      
    </Container>
  )
}
const Container = styled.div`
  height: 11vh;
  width: 100%;
  background-color: black;
  top: 0;
  position: fixed;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  padding: 10px 0 0 35px;
  color: white;
`;
const Left = styled.div`
  margin-right: 3%;
`;
const Image = styled.img`
  height: 3rem;
`;
const Center = styled.div`
  display: flex;
  align-items: center; 
  flex : 1;
  margin-top: -0.75%;
  margin-left: -0.5%;
`;
const Title = styled.h5`
  font-size: 90%;
  font-weight: 400;
  margin-right: 2%;
  padding: 0 2px 0 2px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content : flex-end;
  flex : 1;
  margin-right: 3%;
`;
const Children = styled.h5`
  font-size: 90%;
  font-weight: 400;
  margin: -1.5% 2% 0 1%;
`;
export default Navbar;