import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components"
import { corPrimaria } from "../UI/variaveis";


const StyledHeader = styled.nav`
  background-color: #41d3be;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`
const BtnPrimStyled = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? 'white' : corPrimaria)};
  color: ${(props) => props.primary ? 'corPrimaria' : 'white'};
  

`



const StyledLogo = styled.img`
height: 50px;
width: 50px;
`

const Cabecalho = () => {
  return (
    <StyledHeader >
      <StyledLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnPrimStyled primary href="https://google.com">
          Ajuda
        </BtnPrimStyled>
        <BtnPrimStyled className="btn-primario" href="https://google.com">
          Sair
        </BtnPrimStyled>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
