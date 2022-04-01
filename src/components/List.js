import ActivityCard from './ActivityCard';

import { StyledList } from '../components/GeneralStyling';

import useStore from '../hooks/useStore.js';

export default function List({
  selectedFriendsActivity,
  onDeleteActivity,
  activities,
  filteredSearchActivities,
}) {
  const searchInput = useStore(state => state.searchInput);
  const currentFilter = useStore(state => state.currentFilter);

  return (
    <StyledList
      role="list"
      title="list of activities"
      searchInput={searchInput}
    >
      {(searchInput?.length > 0
        ? filteredSearchActivities
        : (selectedFriendsActivity?.length > 0
            ? selectedFriendsActivity
            : activities
          )?.filter(
            activity =>
              activity.category.includes(currentFilter) ||
              currentFilter === 'all'
          )
      )?.map(activity => (
        <li key={activity.id}>
          <ActivityCard
            onDeleteActivity={() => onDeleteActivity(activity.id)}
            nameOfSelectedFriend={
              activity?.group ? activity.group : activity.friend
            }
            nameOfSelectedActivity={activity.activity}
            nameOfSelectedCategory={activity.category}
            photo={activity.photo}
          />
        </li>
      ))}
    </StyledList>
  );
}
