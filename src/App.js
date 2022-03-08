import styled from 'styled-components';
import List from './components/List';
import Form from './components/Form';
import { useState } from 'react';

export default function App() {
  const [activities, setActivities] = useState([]);

  function onAddActivity({ activity, friend }) {
    setActivities([...activities, { activity, friend }]);
  }

  return (
    <>
      <Title>Top 10 to do in Hamburg</Title>
      <List activities={activities} />
      <Form onAddActivity={onAddActivity} />
    </>
  );
}

const Title = styled.h1`
  background: #f0e7da;
  padding: 10px;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(71, 39, 35, 0.72);
`;
