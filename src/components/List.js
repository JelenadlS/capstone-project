import styled from 'styled-components';
import Card from './Card';
import { nanoid } from 'nanoid';

export default function List({ activities }) {
  return (
    <ListStyle role="list">
      {activities.map(activity => (
        <li key={nanoid()}>
          <Card activity={activity} />
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
