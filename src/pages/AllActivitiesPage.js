import FilterTags from '../components/FilterTags';
import { StyledEmptyMessage } from '../components/GeneralStyling';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Searchbar from '../components/Searchbar';

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
    </>
  );
}
