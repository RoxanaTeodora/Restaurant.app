import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/recipe/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 1rem;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding-left: 3rem;
    border-radius: 1rem;
    outline: none;
    width: 30%;
    height: 5rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(100%, -50%);
    color: white;
    
}}
`;

export default Search;
