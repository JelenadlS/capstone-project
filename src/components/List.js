import styled from 'styled-components';

import ActivityCard from './ActivityCard';

export default function List({
  selectedFriendsActivity,
  errorMessage,
  onDeleteActivity,
  currentFilter,
  activities,
  searchInput,
  filteredSearchActivities,
  showBin,
  handleResetPageAndShowArrow,
  handleResetPage,
}) {
  return (
    <ListStyle role="list" title="list of activities" searchInput={searchInput}>
      {(searchInput?.length > 0
        ? filteredSearchActivities
        : (selectedFriendsActivity?.length > 0
            ? selectedFriendsActivity
            : activities
          ).filter(
            activity =>
              activity.category.includes(currentFilter) ||
              currentFilter === 'all'
          )
      ).map(activity => (
        <li key={activity.id}>
          <ActivityCard
            onDeleteActivity={() => onDeleteActivity(activity.id)}
            activity={activity.activity}
            nameOfSelectedFriend={activity.friend}
            nameOfSelectedActivity={activity.activity}
            nameOfSelectedCategory={activity.category}
            errorMessage={errorMessage}
            photo={activity.photo}
            showBin={showBin}
            handleResetPageAndShowArrow={handleResetPageAndShowArrow}
            handleResetPage={handleResetPage}
          />
        </li>
      ))}
    </ListStyle>
  );
}

const ListStyle = styled.ul`
  list-style-type: none;

  li {
    padding: 5px;
  }
`;
