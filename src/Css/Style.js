import { styled } from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin:70px;

  div {
    height: 320px;
    width: 230px;
    border: 1px solid rgb(194, 193, 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    button {
      color: blue;
      font-size: 20px;
      border: none;
      background: transparent;
    }
  }
`;
