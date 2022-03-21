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
      <Main>
        <StyledParagraph>
          <strong>{selectedActivity.activity}</strong>
        </StyledParagraph>

        <StyledParagraph>
          <strong>category: </strong>
          {selectedActivity.category}
        </StyledParagraph>

        <StyledParagraph>
          <strong>with: </strong>
          {selectedActivity.friend}
        </StyledParagraph>

        {selectedActivity.notes ? (
          <div>
            <StyledParagraph>
              <strong>additional notes:</strong>
            </StyledParagraph>
            <StyledParagraph>{selectedActivity.notes}</StyledParagraph>
          </div>
        ) : (
          <div />
        )}

        {selectedActivity.date ? (
          <StyledParagraph>
            <strong>on the: </strong>
            {selectedActivity.date}
          </StyledParagraph>
        ) : (
          <EmptyMessage>
            <strong>date: </strong>
            plan your activity soon!
          </EmptyMessage>
        )}

        {selectedActivity.location ? (
          <StyledParagraph>
            <strong>at: </strong>
            {selectedActivity.location}
          </StyledParagraph>
        ) : (
          <EmptyMessage>
            <strong>location: </strong>where do you have to go?
          </EmptyMessage>
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
      </Main>
      <Navigation>
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}

const StyledParagraph = styled.p`
  margin: 25px 15px;
  font-size: 18px;
  word-break: break-word;
`;
const EmptyMessage = styled.p`
  font-size: 16px;
  margin: 15px;
`;
