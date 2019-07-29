import styled from 'styled-components'
import CustomButton from "../custom-button/custom-button.component";

export const Card = styled.div`
  background: #fff;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  box-shadow: 0 4px 14px 7px rgba(121, 121, 121, 0.05);
  height: 352px;
  width: 100%;
  padding: 20px;
  text-align: center;
  display: grid;
  align-content: space-between;
  justify-content: center;
  position: relative;

  &:hover {
    border: 2px solid #f8cb00;
    background-color: rgba(248,203,0,0.8);


    img {
      opacity: 0.75;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  img {
    width: 100%;
  }

  .name {
    font-size: 18px;
    font-weight: 400;
    color: #373738;
    letter-spacing: 0;
    text-align: center;
  }

  .price {
    color: #f8cb00;
  }
`;

export const DetailsButton = styled(CustomButton)`
  width: 100%;
  opacity: 0.7;
  position: absolute;
  top: 50px;
  display: none;
`;

export const AddButton = styled(CustomButton)`
  width: 100%;
  opacity: 0.7;
  position: absolute;
  bottom: 50px;
  display: none;
`;

