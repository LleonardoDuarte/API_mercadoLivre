import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: yellow;
  padding: 20px;
  margin-botton: 50px;

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
    padding: 5px;
    border: none;

    &:hover {
        text-decoration:underline;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderArea>
      <Link to="/">Store</Link>
      <Link to="/cart">Cart</Link>
    </HeaderArea>
  );
};
