import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowBackButton, EditButton } from '../components/Button';
import Header from '../components/Header';
import Main from '../components/Main';
import MappedPlaceholderPictures from '../components/MappedPlaceholderPictures.js';
import Navigation from '../components/Navigation';
import PastActivityModal from '../components/PastActivityModal';
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

export default function ActivityOverviewPage({
  activities,
  setActivities,
  pastActivities,
  setPastActivities,
  handleResetPage,
  handleResetPageAndShowArrow,
  setLikedActivity,
  likedActivity,
}) {
  const navigate = useNavigate();
  const { activityName } = useParams();
  const selectedActivity = activities?.find(
    activity => activity.activity === activityName
  );
  const selectedPastActivity = pastActivities?.find(
    activity => activity.activity === activityName
  );

  const data = selectedActivity ? selectedActivity : selectedPastActivity;

  const mappedCategories = {
    culture: cultureIcon,
    'food and beverages': fAndBIcon,
    outdoor: outdoorIcon,
    sport: sportIcon,
    other: otherIcon,
  };
  const [show, setShow] = useState(false);

  return (
    <Picture>
      <Header handleResetPage={handleResetPage}>
        {data.activity}
        {selectedActivity ? (
          <ArrowBackButton
            onClick={() => {
              navigate(`/${selectedActivity.friend}`);
            }}
          >
            <img src={goBackIcon} alt="go back" />
          </ArrowBackButton>
        ) : (
          <ArrowBackButton
            onClick={() =>
              handleResetPageAndShowArrow(navigate('/getinspired'))
            }
          >
            <img src={goBackIcon} alt="go back" />
          </ArrowBackButton>
        )}
      </Header>
      <Main>
        <MainGrid>
          <StyledTitle>Activity</StyledTitle>

          <StyledActivity>{data.activity}</StyledActivity>

          {!data.photo > 0 ? (
            <StyledImage
              width="80"
              height="80"
              alt="upload"
              src={MappedPlaceholderPictures[data.category]}
            />
          ) : (
            <StyledImage width="80" height="80" alt="upload" src={data.photo} />
          )}

          <StyledCategoryIcon
            src={mappedCategories[data.category]}
            alt={mappedCategories[data.category]}
          />
          <StyledCategoryText>{data.category}</StyledCategoryText>

          <StyledOtherInfo>
            <StyledIcon src={friendIcon} alt="friend" />

            {data.friend !== 'I still need to plan...' ? (
              <StyledText>{data.friend}</StyledText>
            ) : (
              <StyledText>make plans with a friend!</StyledText>
            )}

            {data.notes ? (
              <>
                <StyledIcon src={notesIcon} alt="notes" />
                <StyledText>{data.notes}</StyledText>
              </>
            ) : (
              <>
                <StyledNoNotes data-testid="noNotes" />
              </>
            )}

            <StyledIcon src={dateIcon} alt="date" />

            {data.date ? (
              <StyledText>{data.date}</StyledText>
            ) : (
              <StyledText>plan your activity soon!</StyledText>
            )}

            <StyledIcon src={locationIcon} alt="location" />

            {data.location ? (
              <StyledText>{data.location}</StyledText>
            ) : (
              <StyledText>where do you have to go?</StyledText>
            )}
          </StyledOtherInfo>
          {selectedActivity && (
            <>
              <EditButton
                onClick={() =>
                  navigate(
                    `/${selectedActivity.friend}/${selectedActivity.activity}/${selectedActivity.id}/editactivity`
                  )
                }
              >
                <img src={editIcon} alt="edit" />
              </EditButton>
              <StyledCheckbox>
                <p>Did you do this activity already?</p>
                <label htmlFor="checkIfActivityIsDone">
                  <input
                    id="checkIfActivityIsDone"
                    type="checkbox"
                    name="check if activity is done"
                    width="40px"
                    onClick={() => setShow(true)}
                  />
                </label>
              </StyledCheckbox>
            </>
          )}
        </MainGrid>
        <PastActivityModal
          onClose={() => setShow(false)}
          show={show}
          setLikedActivity={setLikedActivity}
          onSetPastActivity={() => onSetPastActivity(data.id)}
        />
      </Main>
      <Navigation
        handleResetPage={handleResetPage}
        handleResetPageAndShowArrow={handleResetPageAndShowArrow}
      >
        <Link to="/newactivity">
          <img src={newIcon} alt="new" />
        </Link>
      </Navigation>
    </Picture>
  );

  function onSetPastActivity(thisActivityId) {
    const activityToRemove = activities.find(
      activity => activity.id === thisActivityId
    );

    const newActivity = { ...activityToRemove, likedActivity };

    setPastActivities([...pastActivities, newActivity]);
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
    if (!activities.activity || activities.length === 0) {
      navigate('/');
    } else {
      navigate(`/${activities.friend}`);
    }
  }
}

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 57px 30px 20px 30px auto;
  grid-template-rows: repeat(6, auto) 40px;
  margin: 30px;
  align-items: center;
`;

const StyledTitle = styled.h2`
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 10px 0;
`;

const StyledActivity = styled.h3`
  grid-column-start: 4;
  grid-column-end: 6;
  padding: 5px;
`;

const StyledCategoryIcon = styled.img`
  grid-column-start: 4;
  grid-column-end: 4;
  padding-left: 5px;
  align-self: center;
`;
const StyledCategoryText = styled.span`
  align-self: center;
`;

const StyledImage = styled.img`
  grid-row: 2 / span 2;
  grid-column: 1 / span 2;
  width: 87px;
  box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
  border-radius: 50px;
`;

const StyledOtherInfo = styled.span`
  grid-column-start: 1;
  grid-column-end: 6;
  margin-top: 20px;
  display: grid;
`;
const StyledIcon = styled.img`
  justify-self: center;
  padding: 5px;
`;

const StyledText = styled.span`
  grid-column-start: 2;
  grid-column-end: 6;
  word-break: break-word;
  margin: 3px;
`;
const StyledNoNotes = styled.span`
  grid-column-start: 1;
  grid-column-end: 6;
`;

const StyledCheckbox = styled.span`
  grid-column-start: 1;
  grid-column-end: 6;
  display: flex;
  margin-top: 50px;

  input {
    margin-left: 20px;
    transform: scale(1.5);
    opacity: 0.5;
  }
`;
