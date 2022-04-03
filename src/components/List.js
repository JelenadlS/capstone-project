import ActivityCard from './ActivityCard';

import { StyledList, StyledEmptyMessage } from '../components/GeneralStyling';

import useStore from '../hooks/useStore.js';

export default function List({
  onDeleteActivity,
  activities,
  filteredSearchActivities,
}) {
  const searchInput = useStore(state => state.searchInput);
  const currentFilter = useStore(state => state.currentFilter);

  return (
    <>
      {filteredSearchActivities?.length > 0 ? (
        <StyledList
          role="list"
          title="list of activities"
          searchInput={searchInput}
        >
          {(searchInput?.length > 0
            ? filteredSearchActivities
            : activities?.filter(
                activity =>
                  activity.category.includes(currentFilter) ||
                  currentFilter === 'all'
              )
          )?.map(activity => (
            <li key={activity.id}>
              <ActivityCard
                onDeleteActivity={() => onDeleteActivity(activity.id)}
                activityDetails={activity}
              />
            </li>
          ))}
        </StyledList>
      ) : (
        <StyledEmptyMessage data-testid="StyledEmptyMessage">
          There is no activity with this name.
        </StyledEmptyMessage>
      )}
    </>
  );
}
