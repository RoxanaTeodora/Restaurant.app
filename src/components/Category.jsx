import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <SLink to={"/recipe/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italain</h4>
      </SLink>
      <SLink to={"/recipe/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/recipe/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/recipe/cuisine/japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  svg {
    color: white;
    font-size: 1.5rem;
  }

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  &.active {
    color: yellow;
    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category;
