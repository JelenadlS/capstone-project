import styled from 'styled-components';

import ActivityCard from './ActivityCard';

export default function List({
  selectedFriendsActivity,
  errorMessage,
  onDeleteActivity,
  currentFilter,
}) {
  return (
    <ListStyle role="list" title="list of activities">
      {selectedFriendsActivity
        .filter(
          activity =>
            activity.category.includes(currentFilter) || currentFilter === 'all'
        )
        .map(activity => (
          <li key={activity.id}>
            <ActivityCard
              onDeleteActivity={() => onDeleteActivity(activity.id)}
              activity={activity.activity}
              id={activity.id}
              nameOfSelectedFriend={activity.friend}
              nameOfSelectedActivity={activity.activity}
              nameOfSelectedCategory={activity.category}
              errorMessage={errorMessage}
              photo={activity.photo}
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
