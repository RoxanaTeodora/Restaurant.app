import React from "react";
import Veggies from "../Veggies";
import PopularSection from "../PopularSection";
import Category from "../Category";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import Search from "../Search";
import SearchResponse from "./SearchResponse";
import ResipeDescription from "./ResipeDescription";

function Recipe() {
  return (
    <div>
      <Search />
      <Category />
      <Routes>
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<SearchResponse />} />
        <Route path="/description/:name" element={<ResipeDescription />} />
      </Routes>
      <Veggies />
      <PopularSection />
    </div>
  );
}

export default Recipe;
