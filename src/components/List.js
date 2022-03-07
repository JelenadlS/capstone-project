import styled from 'styled-components';

const todos = [
  { text: '1. Speicherstadt' },
  { text: '2. Hafen City' },
  { text: '3. Elbphilharmonie' },
  { text: '4. Planten un Blomen' },
  { text: '5. International Maritime Museum' },
  { text: '6. Kunsthalle Hamburg' },
  { text: '7. St Pauli' },
  { text: '8. Altonabalkon' },
  { text: '9. Harbour Boat Tour' },
  { text: '10. Jungfernstieg' },
];

export default function List() {
  return (
    <ListStyle role="list">
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
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
