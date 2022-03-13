import Header from '../components/Header';
import styled from 'styled-components';

export default function ActivityOverviewPage({ activity, friend }) {
  return (
    <>
      <Header title={activity} link="y"></Header>
      <WrapperCard>
        <p>{activity}</p>
        <p>mit: {friend}</p>
      </WrapperCard>
    </>
  );
}

const WrapperCard = styled.section`
  color: rgba(71, 39, 35, 0.72);
  margin: 20px;
  font-size: 25px;
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 15px;
  word-break: break-word;
`;
