import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function SearchResponse() {
  const [searchResponse, setSearchResponse] = useState([]);
  let params = useParams();

  const getSearchResponse = async (name) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const recipes = await data.json();
      console.log(recipes);
      setSearchResponse(recipes.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (params.search) {
      getSearchResponse(params.search);
    }
  }, [params.search]);

  return (
    <Grid>
      {searchResponse.map((item) => (
        <Card key={item.id}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem; /* Corectat 'grid-grap' la 'grid-gap' */
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default SearchResponse;
