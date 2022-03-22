import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';

export default function List({
  selectedFriendsActivity,
  errorMessage,
  onDeleteActivity,
  currentFilter,
}) {
  const activitiesEndRef = useRef(null);
  const scrollToBottom = () => {
    activitiesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [selectedFriendsActivity]);

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
              errorMessage={
                errorMessage &&
                `unfortunately something went wrong with your data.`
              }
            />
          </li>
        ))}
      <div ref={activitiesEndRef} />
    </ListStyle>
  );
}

const ListStyle = styled.ul`
  list-style-type: none;

  li {
    padding: 5px;
  }
`;
