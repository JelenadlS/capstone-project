import { useNavigate, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowBackButton, EditButton } from '../components/Button';
import Header from '../components/Header';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import Picture from '../components/Picture';

import cultureIcon from '../images/cultureIcon.svg';
import dateIcon from '../images/dateIcon.svg';
import editIcon from '../images/editIcon.svg';
import fAndBIcon from '../images/fAndBIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import locationIcon from '../images/locationIcon.svg';
import newIcon from '../images/newIcon.svg';
import notesIcon from '../images/notesIcon.svg';
import otherIcon from '../images/otherIcon.svg';
import outdoorIcon from '../images/outdoorIcon.svg';
import sportIcon from '../images/sportIcon.svg';

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
        <MainGrid>
          <StyledTitle>
            <strong>Activity</strong>
          </StyledTitle>

          <StyledActivity>{selectedActivity.activity}</StyledActivity>

          <StyledCategory>
            {selectedActivity.category === 'culture' ? (
              <img src={cultureIcon} alt="culture" />
            ) : (
              ''
            )}
            {selectedActivity.category === 'food and beverages' ? (
              <img src={fAndBIcon} alt="food and beverages" />
            ) : (
              ''
            )}
            {selectedActivity.category === 'outdoor' ? (
              <img src={outdoorIcon} alt="outdoor" />
            ) : (
              ''
            )}
            {selectedActivity.category === 'sport' ? (
              <img src={sportIcon} alt="sport" />
            ) : (
              ''
            )}
            {selectedActivity.category === 'other' ? (
              <img src={otherIcon} alt="other" />
            ) : (
              ''
            )}
            {selectedActivity.category}
          </StyledCategory>

          <StyledIcon src={friendIcon} alt="friend" />

          <StyledParagraph> {selectedActivity.friend}</StyledParagraph>

          {selectedActivity.notes ? (
            <>
              <StyledIcon src={notesIcon} alt="notes" />
              <StyledParagraph>{selectedActivity.notes}</StyledParagraph>
            </>
          ) : (
            <>
              <StyledNoNotes />
            </>
          )}

          <StyledIcon src={dateIcon} alt="date" />

          {selectedActivity.date ? (
            <StyledParagraph>{selectedActivity.date}</StyledParagraph>
          ) : (
            <StyledParagraph>plan your activity soon!</StyledParagraph>
          )}

          <StyledIcon src={locationIcon} alt="location" />

          {selectedActivity.location ? (
            <StyledParagraph>{selectedActivity.location}</StyledParagraph>
          ) : (
            <StyledParagraph>where do you have to go?</StyledParagraph>
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
      </Main>
      <Navigation>
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );
}

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 57px 30px auto;
  grid-template-rows: repeat(7, auto);
  margin: 30px;
  align-items: center;
`;

const StyledTitle = styled.h3`
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 10px;
`;

const StyledActivity = styled.p`
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 5px;
`;

const StyledCategory = styled.p`
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 5px;
  margin-bottom: 10px;
  align-self: start;

  img {
    margin-right: 10px;
  }
`;

const StyledIcon = styled.img`
  justify-self: center;
  padding: 5px;
`;

const StyledParagraph = styled.p`
  grid-column-start: 2;
  grid-column-end: 4;
  word-break: break-word;
`;
const StyledNoNotes = styled.span`
  grid-column-start: 1;
  grid-column-end: 4;
`;

const EmptyMessage = styled.div`
  font-size: 16px;
  margin: 15px;
`;
