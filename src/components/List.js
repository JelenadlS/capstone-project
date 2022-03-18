import { useEffect, useRef } from 'react';
import Card from './Card';
import styled from 'styled-components';

export default function List({
  activitiesOfSelectedFriend,
  errorMessage,
  onDeleteActivity,
}) {
  const activitiesEndRef = useRef(null);
  const scrollToBottom = () => {
    activitiesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [activitiesOfSelectedFriend]);
  return (
    <>
      <ListStyle role="list" title="list of activities">
        {activitiesOfSelectedFriend.map(activity => (
          <li key={activity.id}>
            <Card
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
    </>
  );
}

const ListStyle = styled.ul`
  list-style-type: none;
  color: rgba(71, 39, 35, 0.72);

  li {
    padding: 5px;
  }
`;
