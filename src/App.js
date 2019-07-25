import React, { useState } from "react";
import styled from "styled-components";

import "./App.css";
import { products, categories } from "./data";
import Header from "./components/header/header.component";
import Categories from "./components/categories/categories.component";
import Products from "./components/products/products.component";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 2fr 6fr;
  padding: 0 2rem;
`;

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999999);

  return (
    <AppContainer>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <MainContainer>
        <Categories
          categories={categories}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        <Products
          products={products}
          searchText={searchText}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
