import styled from 'styled-components';
import Card from './Card';
import Form from './Form';
import { useEffect, useState, useRef } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function List({
  activities,
  errorMessage,
  onDeleteActivity,
  onAddActivity,
}) {
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
      <WrapperList>
        <ListStyle role="list">
          {activities.map(activity => (
            <li key={activity.id}>
              <NavLink to="/about">
                <Card
                  onDeleteActivity={() => onDeleteActivity(activity.id)}
                  activity={activity.activity}
                  id={activity.id}
                  errorMessage={
                    errorMessage &&
                    `unfortunately something went wrong with your data.`
                  }
                />
              </NavLink>
            </li>
          ))}
          <div ref={activitiesEndRef} />
        </ListStyle>
        <Bottom>
          <Form onAddActivity={onAddActivity} />
        </Bottom>
      </WrapperList>
      <Outlet />
    </>
  );
}

const WrapperList = styled.div`
  grid-template-rows: 60px 1fr auto;
`;
const ListStyle = styled.ul`
  list-style-type: none;
  color: rgba(71, 39, 35, 0.72);

  li {
    padding: 5px;
  }
`;
const Bottom = styled.div`
  background: white;
  width: 100%;
`;
