import React, { Component } from "react";
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
  grid-gap: 10px;
  grid-template-columns: 2fr 6fr;
`;

const App = () => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <AppContainer>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <MainContainer>
        <Categories categories={categories} />
        <Products products={products} searchText={searchText} />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
