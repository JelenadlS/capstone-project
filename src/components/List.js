import styled from 'styled-components';
import Card from './Card';
import { useEffect, useState, useRef } from 'react';

export default function List({ activities, errorMessage, onDeleteActivity }) {
  const [scrollValue, setScrollValue] = useState(0);
  const activitiesEndRef = useRef(null);
  const scrollToBottom = () => {
    activitiesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = e => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);

  useEffect(scrollToBottom, [activities]);

  if (!activities || activities.length === 0) {
    return (
      <ListStyle role="list">
        <li>
          unfortunately you did not enter any activity yet. Start now and fill
          your list with amazing activities!
        </li>
        <div ref={activitiesEndRef} />
      </ListStyle>
    );
  }
  return (
    <>
      <ListStyle role="list">
        {activities.map(activity => (
          <li key={activity.id}>
            <Card
              onDeleteActivity={() => onDeleteActivity(activity.id)}
              activity={activity.activity}
              id={activity.id}
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
