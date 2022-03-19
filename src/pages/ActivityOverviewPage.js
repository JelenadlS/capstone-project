import { useNavigate, useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import gobackicon from '../images/goback.svg';
import editicon from '../images/edit.svg';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import newicon from '../images/new.svg';
import Picture from '../components/Picture';
import Main from '../components/Main';
import { ArrowbackButton, EditButton } from '../components/Button';

export default function ActivityOverviewPage({ activities }) {
  const navigate = useNavigate();
  const { activityName } = useParams();
  const selectedActivity = activities.find(
    activity => activity.activity === activityName
  );
  return (
    <>
      <Picture>
        <Header>
          {selectedActivity.activity}
          <ArrowbackButton
            onClick={() => navigate(`/${selectedActivity.friend}`)}
          >
            <img src={gobackicon} alt="go back" />
          </ArrowbackButton>
        </Header>
        <Main>
          <StyledParagraph>
            <strong>{selectedActivity.activity}</strong>
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
            <img src={editicon} alt="edit" />
          </EditButton>
        </Main>
        <Navigation>
          <Link to="/newactivity">
            <img src={newicon} alt="new" />
          </Link>
        </Navigation>
      </Picture>
    </>
  );
}

const StyledParagraph = styled.p`
  margin: 15px;
  font-size: 25px;
  word-break: break-word;
`;
const EmptyMessage = styled.p`
  font-size: 16px;
  margin: 15px;
`;
