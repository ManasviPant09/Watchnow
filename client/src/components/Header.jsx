import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../assets/Logo.png"
import LanguageIcon from '@mui/icons-material/Language';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
const Header = (props) => {
  const navigate = useNavigate();
  const handleEvent=()=>{
    navigate("/login");
  }
  return (
    <StyledHeader>
        <Left>
            <Image src={Logo} alt="Netflix Logo" />
        </Left>
        <Right>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <LanguageContainer>
                    <InputLabel id="demo-select-small" style={{color: "white"}}></InputLabel>
                    <Select value="English" style={{color: "white", border: "1px solid white",borderRadius: "2px",
                    marginRight: "40px", paddingTop: "-10px"}}>
                        <MenuItem value="English">
                        <div style={{ display: 'flex', alignItems: 'center' }}><LanguageIcon />
                        <div>English</div>
                        </div>
                        </MenuItem>
                        <MenuItem value="हिंदी">
                        <div style={{ display: 'flex', alignItems: 'center' }}><LanguageIcon />
                        <div>हिंदी</div>
                        </div>
                        </MenuItem>
                    </Select>
                </LanguageContainer>
            </FormControl>  
            <Button onClick={handleEvent}>Sign In</Button>
        </Right>
    </StyledHeader>
  );
}
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  background: linear-gradient(black 20%,black 10%,black 5%,transparent);
`;
const Left = styled.div`
  padding-left: 40px;  
  padding-top: 10px;
  display: flex;
  align-items: center; 
  flex : 1;
`;
const Image = styled.img`
  height: 4.5rem;
`;
const Right = styled.div`
  padding-right: 40px;  
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content : flex-end;
  flex : 1;
`;
const LanguageContainer=styled.div`
  color: 
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Button = styled.button`
  width: 90px;
  padding: 10px 3px 10px 3px;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: 200;
  font-size: 1rem;
`;
export default Header;
