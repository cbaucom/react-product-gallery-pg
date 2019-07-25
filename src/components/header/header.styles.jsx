import styled from 'styled-components'


export const HeaderContainer = styled.header`
  border-top: 3px solid #6364d8;
  background: #f8cb00;
  max-width: 1400px;
  height: 166px;
  margin-bottom: 2rem;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const LogoText = styled.h1`
  font-size: 2em;
  font-weight: 900;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 33px;
  text-align: left;
`;

export const SearchContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
  width: 90%;
  height: 51px;
  /* margin-left: 2rem; */
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SearchIcon = styled.i.attrs({
  className: "fa fa-search",
})`
  padding: 20px;
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
`;
