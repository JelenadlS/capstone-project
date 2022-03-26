import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FilterTags from '../components/FilterTags';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';
import Searchbar from '../components/Searchbar';

import newIcon from '../images/newIcon.svg';

export default function AllActivitiesPage({
  activities,
  currentFilter,
  onFilter,
  filteredSearchActivities,
  setSearchInput,
  searchInput,
  setCurrentFilter,
}) {
  return (
    <Picture>
      <Header>all activities</Header>
      <Main>
        <Searchbar
          setSearchInput={setSearchInput}
          setCurrentFilter={setCurrentFilter}
        ></Searchbar>
        <FilterTags
          activities={activities}
          currentFilter={currentFilter}
          onFilter={onFilter}
          setSearchInput={setSearchInput}
        />
        {filteredSearchActivities.length > 0 ? (
          <List
            activities={activities}
            currentFilter={currentFilter}
            searchInput={searchInput}
            filteredSearchActivities={filteredSearchActivities}
          />
        ) : (
          <EmptyList data-testid="emptylist">
            There is no activity with this name.
          </EmptyList>
        )}
      </Main>
      <Navigation>
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}

const EmptyList = styled.p`
  color: rgba(71, 39, 35, 0.72);
  padding: 10px;
  text-align: center;
`;
