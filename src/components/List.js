import styled from 'styled-components';
import Card from './Card';
import { nanoid } from 'nanoid';
import { useEffect, useRef } from 'react';

export default function List({ activities }) {
  const activitiesEndRef = useRef(null);
  const scrollToBottom = () => {
    activitiesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [activities]);

  if (!activities || activities.length === 0) {
    return (
      <ListStyle role="list">
        <li> nothing yet</li>
        <div ref={activitiesEndRef} />
      </ListStyle>
    );
  }
  return (
    <ListStyle role="list">
      {activities.map(activity => (
        <li key={nanoid()}>
          <Card activity={activity.activity} friend={activity.friend} />
          <div ref={activitiesEndRef} />
        </li>
      ))}
    </ListStyle>
  );
}

const ListStyle = styled.ul`
  list-style-type: none;
  color: rgba(71, 39, 35, 0.72);

  li {
    padding: 5px;
  }
`;
