import { Link } from 'react-router-dom';

import FilterTags from '../components/FilterTags';
import { StyledEmptyMessage } from '../components/GeneralStyling';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';

import newIcon from '../images/newIcon.svg';

export default function AllActivitiesPage({
  activities,
  filteredSearchActivities,
}) {
  return (
    <>
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
    </>
  );
}
