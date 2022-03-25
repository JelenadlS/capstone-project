import { useState } from 'react';
import styled from 'styled-components';

export default function Searchbar({ searchInputHandler }) {
  return (
    <div>
      <StyledInput
        id="seachbar"
        name="searchbar"
        aria-label="searchbar"
        type="text"
        placeholder="Search..."
        onChange={searchInputHandler}
      ></StyledInput>
    </div>
  );
}

const StyledInput = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
`;
