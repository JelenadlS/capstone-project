import Header from '../components/Header';
import Button from '../components/Button';
import editicon from '../images/edit.svg';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ActivityOverviewPage({
  // activity,
  // friend,
  // notes,
  // date,
  // location,
  // id,
  selectedActivity,
}) {
  const navigate = useNavigate();

  return (
    <>
      <Header title={selectedActivity.actitvity} link="y"></Header>
      {selectedActivity && console.log(selectedActivity.activity)}
      <WrapperCard>
        <p>
          <strong>{selectedActivity.activity}</strong>
        </p>
        {selectedActivity.friend ? (
          <EmptyMessage>
            <strong>with: </strong>
            plan who will join you!
          </EmptyMessage>
        ) : (
          <p>
            <strong>with: </strong>
            {selectedActivity.friend}
          </p>
        )}
        {selectedActivity.notes ? (
          <div />
        ) : (
          <div>
            <p>
              <strong>additional notes:</strong>
            </p>
            <p>{selectedActivity.notes}</p>
          </div>
        )}
        {selectedActivity.date ? (
          <EmptyMessage>
            <strong>date: </strong>
            plan your activity soon!
          </EmptyMessage>
        ) : (
          <p>
            <strong>on the: </strong>
            {selectedActivity.date}
          </p>
        )}
        {selectedActivity.location ? (
          <EmptyMessage>
            <strong>location: </strong>where do you have to go?
          </EmptyMessage>
        ) : (
          <p>
            <strong>at: </strong>
            {selectedActivity.location}
          </p>
        )}
        <EditPositioning
          background="transparent"
          onClick={() => navigate(`/editactivity/${selectedActivity.id}}`)}
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

const EditPositioning = styled(Button)`
  position: fixed;
  right: -2px;
  top: 60px;
`;
