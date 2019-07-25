import React from "react";

import { CategoryContainer } from "./categories.styles";

const Categories = ({categories}) => (
  <CategoryContainer>
    <h4>ALL CATEGORIES</h4>
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id} >
          {name}
        </li>
      ))}
    </ul>
  </CategoryContainer>
);

export default Categories;
