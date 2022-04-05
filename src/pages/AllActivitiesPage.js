import FilterTags from '../components/FilterTags';
import Header from '../components/Header';
import List from '../components/List';
import Main from '../components/Main';
import Searchbar from '../components/Searchbar';

export default function AllActivitiesPage({
  activitiesNotArchived,
  filteredSearchActivities,
}) {
  return (
    <>
      <Header hiddenGroup="hidden">all activities</Header>
      <Main aria-label="all activities page">
        <Searchbar />
        <FilterTags activities={activitiesNotArchived} />
        <List
          activities={activitiesNotArchived}
          filteredSearchActivities={filteredSearchActivities}
        />
      </Main>
    </>
  );
}
