import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 5px 10px;
  border: 1px solid black;
  background-color: white;
  top: 115px;
  right: 165px;
  z-index: 5;

  .disabled {
    pointer-events: none;
    opacity: 0.8;
  }

  @media screen and (max-width: 767px) {
    right: 20px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const TotalContainer = styled.div`
  margin-top: 10px;
  margin-left: auto;
  font-size: 18px;
`;