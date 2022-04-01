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

  filteredSearchActivities,
}) {
  return (
    <Picture>
      <Header hiddenGroup="hidden">all activities</Header>
      <Main>
        <Searchbar />
        <FilterTags activities={activities} />
        {filteredSearchActivities.length > 0 ? (
          <List
            activities={activities}
            filteredSearchActivities={filteredSearchActivities}
          />
        ) : (
          <StyledEmptyMessage data-testid="StyledEmptyMessage">
            There is no activity with this name.
          </StyledEmptyMessage>
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

const StyledEmptyMessage = styled.p`
  color: rgba(71, 39, 35, 0.72);
  padding: 10px;
  text-align: center;
`;
