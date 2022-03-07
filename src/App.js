import styled from 'styled-components';
import List from './components/List';

export default function App() {
  return (
    <>
      <Title>Top 10 to do in Hamburg</Title>
      <List />
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
