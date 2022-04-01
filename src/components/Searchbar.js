import styled from 'styled-components';

import useStore from '../hooks/useStore.js';

export default function Searchbar() {
  const searchInput = useStore(state => state.searchInput);
  const setCurrentFilter = useStore(state => state.setCurrentFilter);
  const setSearchInput = useStore(state => state.setSearchInput);
  return (
    <StyledSearchbar>
      <StyledInput
        id="seachbar"
        name="searchbar"
        aria-label="searchbar"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={searchInputHandler}
        onClick={handleOnClickSearch}
      ></StyledInput>
    </StyledSearchbar>
  );

  function searchInputHandler(event) {
    const lowerCase = event.target.value.toLowerCase();
    setSearchInput(lowerCase);
  }

  function handleOnClickSearch(event) {
    setCurrentFilter('all');
    event.target.select();
  }
}

const StyledSearchbar = styled.section`
  margin: 10px 30px;
`;

const StyledInput = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  outline: none;
`;
