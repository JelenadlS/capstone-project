import Header from '../components/Header';
import styled from 'styled-components';

export default function ActivityOverviewPage({
  activity,
  friend,
  notes,
  date,
  location,
}) {
  return (
    <>
      <Header title={activity} link="y"></Header>
      <WrapperCard>
        <p>
          <strong>{activity}</strong>
        </p>
        {friend.length === 0 ? (
          <EmptyMessage>
            <strong>with: </strong>
            plan who will join you!
          </EmptyMessage>
        ) : (
          <p>
            <strong>with: </strong>
            {friend}
          </p>
        )}
        {notes.length === 0 ? (
          <div />
        ) : (
          <div>
            <p>
              <strong>additional notes:</strong>
            </p>
            <p>{notes}</p>
          </div>
        )}
        {date.length === 0 ? (
          <EmptyMessage>
            <strong>on the: </strong>
            plan your activity soon!
          </EmptyMessage>
        ) : (
          <p>
            <strong>on the: </strong>
            {date}
          </p>
        )}
        {date.length === 0 ? (
          <EmptyMessage>
            <strong>at: </strong>where do you have to go?
          </EmptyMessage>
        ) : (
          <p>
            <strong>at: </strong>
            {location}
          </p>
        )}
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

const EmptyMessage = styled.div`
  font-size: 16px;
`;
