import { useNavigate, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowBackButton, EditButton } from '../components/Button';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import editIcon from '../images/editIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import newIcon from '../images/newIcon.svg';

export default function ActivityOverviewPage({ activities }) {
  const navigate = useNavigate();
  const { activityName } = useParams();
  const selectedActivity = activities.find(
    activity => activity.activity === activityName
  );
  return (
    <Picture>
      <Header>
        {selectedActivity.activity}
        <ArrowBackButton
          onClick={() => navigate(`/${selectedActivity.friend}`)}
        >
          <img src={goBackIcon} alt="go back" />
        </ArrowBackButton>
      </Header>
      <MainGrid>
        <StyledTitle>
          <strong>Activity</strong>
        </StyledTitle>

        <StyledActivity>{selectedActivity.activity}</StyledActivity>

        <StyledCategory>
          <strong>category: </strong>
          {selectedActivity.category}
        </StyledCategory>

        <p>
          <strong>with: </strong>
        </p>

        <p> {selectedActivity.friend}</p>

        {selectedActivity.notes ? (
          <>
            <p>
              <strong>additional notes:</strong>
            </p>
            <p>{selectedActivity.notes}</p>
          </>
        ) : (
          <div />
        )}

        {selectedActivity.date ? (
          <>
            <p>
              <strong>on the: </strong>
            </p>
            <p>{selectedActivity.date}</p>
          </>
        ) : (
          <>
            <p>
              <strong>date: </strong>
            </p>
            <p>plan your activity soon!</p>
          </>
        )}

        {selectedActivity.location ? (
          <>
            <p>
              <strong>at: </strong>
            </p>
            <p>{selectedActivity.location}</p>
          </>
        ) : (
          <>
            <p>
              <strong>location: </strong>
            </p>
            <p>where do you have to go?</p>
          </>
        )}

        <EditButton
          onClick={() =>
            navigate(
              `/${selectedActivity.friend}/${selectedActivity.activity}/${selectedActivity.id}/editactivity`
            )
          }
        >
          <img src={editIcon} alt="edit" />
        </EditButton>
      </MainGrid>
      <Navigation>
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}

const MainGrid = styled(Main)`
  display: grid;
  grid-template-columns: 77px auto;
  grid-template-rows: repeat(7, 50px);
  margin: 30px;
`;

const StyledTitle = styled.h2`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const StyledActivity = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const StyledCategory = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  margin-left: 30px;
`;
const StyledParagraph = styled.p`
  margin: 25px 15px;
  font-size: 18px;
  word-break: break-word;
`;

const EmptyMessage = styled.div`
  font-size: 16px;
  margin: 15px;
`;
