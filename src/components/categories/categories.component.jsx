import React from "react";

import { CategoryContainer } from "./categories.styles";

const Categories = ({
  categories,
  setMinPrice,
	setMaxPrice,
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
  const handleMinPriceChange = event => {
    event.target.value === ""
      ? setMinPrice(0)
      : setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = event => {
    event.target.value === ""
      ? setMaxPrice(9999999)
      : setMaxPrice(event.target.value);
  };

  return (
    <CategoryContainer>
      <h4 className="all-categories-label">All Categories</h4>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id} onClick={() => setSelectedCategoryId(id)} className={
						(selectedCategoryId === id &&
							"active") ||
						""
					}>{name}</li>
        ))}
      </ul>
      <h4 className="filter-label">Filter By Price</h4>
      <div className="filter-inputs">
        <input
          type="text"
          placeholder="$ Min"
          onChange={handleMinPriceChange}
        />
        <input
          type="text"
          placeholder="$ Max"
          onChange={handleMaxPriceChange}
        />
      </div>
    </CategoryContainer>
  );
};

export default Categories;
