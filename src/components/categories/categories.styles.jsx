import styled from "styled-components";

export const CategoryContainer = styled.section`
  font-size: 15px;
  color: #373738;

  h4 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    padding: 10px 0;
    color: rgba(123, 123, 123, 0.78);

    &:hover {
      color: #f8cb00;
    }
  }

  .active {
    color: #f8cb00;
  }

  .filter-inputs input {
    font-size: 12px;
    border: 0.5px solid rgba(123, 123, 123, 0.78);
    display: inline-block;
    width: 50px;
    height: 35px;
    text-align: center;
    margin: 10px 10px 0 0;
    border-radius: 2px;
  }
`;
