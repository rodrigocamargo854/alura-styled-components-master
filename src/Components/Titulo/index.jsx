import React from "react";
import styled from "styled-components"


const TituloStyled = styled.h1`
  color: ${({ theme }) => theme.text};
  padding: 25px 0;
`


const Titulo = ({ children }) => {
  return <TituloStyled >{children}</TituloStyled>;
};
export default Titulo;
