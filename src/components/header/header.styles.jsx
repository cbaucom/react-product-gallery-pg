import styled from "styled-components";

export const BackgroundContainer = styled.div`
  border-top: 3px solid #6364d8;
  background: #f8cb00;
  width: 100%;
  margin-bottom: 2rem;
`

export const HeaderContainer = styled.header`
  width: 90%;
  height: 166px;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 6fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 100%;
    grid-gap: 15px;
    padding: 0 1rem;
  }
`;

export const LogoText = styled.h1`
  font-size: 2em;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 33px;
  text-align: left;

  @media screen and (max-width: 767px) {
    font-size: 1.75em;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export const SearchContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SearchIcon = styled.i.attrs({
  className: "fa fa-search",
})`
  padding: 15px;
  color: #5c5c5c;
  width: 25px;
`;

export const InputContainer = styled.input`
  font-size: 15px;
  color: rgba(123, 123, 123, 0.78);
  letter-spacing: 0;
  line-height: 31px;
  width: 100%;
  padding: 10px;
  border: none;
  padding-left: 40px;
  margin-left: -30px;
  background: none;
`;
