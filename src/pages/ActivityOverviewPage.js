import Header from '../components/Header';
import editicon from '../images/edit.svg';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ActivityOverviewPage({ activities }) {
  const { id } = useParams();
  const selectedActivity = activities.find(activity => activity.id === id);

  return (
    <>
      <Header textAlign="left" title={selectedActivity.activity} link="y"></Header>
      <WrapperCard>
        <p>
          <strong>{selectedActivity.activity}</strong>
        </p>
        {selectedActivity.friend ? (
          <p>
            <strong>with: </strong>
            {selectedActivity.friend}
          </p>
        ) : (
          <EmptyMessage>
            <strong>with: </strong>
            plan who will join you!
          </EmptyMessage>
        )}
        {selectedActivity.notes ? (
          <div>
            <p>
              <strong>additional notes:</strong>
            </p>
            <p>{selectedActivity.notes}</p>
          </div>
        ) : (
          <div />
        )}
        {selectedActivity.date ? (
          <p>
            <strong>on the: </strong>
            {selectedActivity.date}
          </p>
        ) : (
          <EmptyMessage>
            <strong>date: </strong>
            plan your activity soon!
          </EmptyMessage>
        )}
        {selectedActivity.location ? (
          <p>
            <strong>at: </strong>
            {selectedActivity.location}
          </p>
        ) : (
          <EmptyMessage>
            <strong>location: </strong>where do you have to go?
          </EmptyMessage>
        )}
        <EditPositioning
          background="transparent"
          to={`/editactivity/${selectedActivity.id}`}
        >
          <img src={editicon} alt="edit" />
        </EditPositioning>
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

const EditPositioning = styled(Link)`
  position: fixed;
  right: -2px;
  top: 60px;
`;
