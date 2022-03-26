import styled from 'styled-components';

export default function Searchbar({
  setSearchInput,
  // setActiveFilter,
  // onShowSearch,
}) {
  const searchInputHandler = event => {
    const lowerCase = event.target.value.toLowerCase();
    setSearchInput(lowerCase);
    // setActiveFilter('');
  };

  // function working(event) {
  //   searchInputHandler(event);
  //   onShowSearch(true);
  // }

  return (
    <StyledSearchbar>
      <StyledInput
        id="seachbar"
        name="searchbar"
        aria-label="searchbar"
        type="text"
        placeholder="Search..."
        onChange={searchInputHandler}
        // onChange={working}
      ></StyledInput>
    </StyledSearchbar>
  );
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