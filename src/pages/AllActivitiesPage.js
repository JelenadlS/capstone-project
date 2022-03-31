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
  setCurrentFilter,
  filteredSearchActivities,
  handleResetPage,
  handleResetPageAndShowArrow,
}) {
  return (
    <Picture>
      <Header hiddenGroup="hidden">all activities</Header>
      <Main>
        <Searchbar setCurrentFilter={setCurrentFilter} />
        <FilterTags
          activities={activities}
          currentFilter={currentFilter}
          onFilter={onFilter}
        />
        {filteredSearchActivities.length > 0 ? (
          <List
            activities={activities}
            currentFilter={currentFilter}
            filteredSearchActivities={filteredSearchActivities}
            handleResetPage={handleResetPage}
          />
        ) : (
          <StyledEmptyMessage data-testid="StyledEmptyMessage">
            There is no activity with this name.
          </StyledEmptyMessage>
        )}
      </Main>
      <Navigation
        handleResetPage={handleResetPage}
        handleResetPageAndShowArrow={handleResetPageAndShowArrow}
      >
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}

const StyledEmptyMessage = styled.p`
  color: rgba(71, 39, 35, 0.72);
  padding: 10px;
  text-align: center;
`;
