import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  ArrowBackButton,
  EditButton,
  PastDeleteButton,
} from '../components/Button';
import DeleteModal from '../components/DeleteModal.js';
import Header from '../components/Header';
import Main from '../components/Main';
import MappedPlaceholderPictures from '../components/MappedPlaceholderPictures.js';
import Navigation from '../components/Navigation';
import PastActivityModal from '../components/PastActivityModal';
import Picture from '../components/Picture';

import deleteIcon from '../images/binIcon.svg';
import cultureIcon from '../images/cultureIcon.svg';
import dateIcon from '../images/dateIcon.svg';
import editIcon from '../images/editIcon.svg';
import fAndBIcon from '../images/fAndBIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import groupIcon from '../images/groupIcon.svg';
import locationIcon from '../images/locationIcon.svg';
import newIcon from '../images/newIcon.svg';
import notesIcon from '../images/notesIcon.svg';
import otherIcon from '../images/otherIcon.svg';
import outdoorIcon from '../images/outdoorIcon.svg';
import sportIcon from '../images/sportIcon.svg';

export default function ActivityOverviewPage({
  activities,
  onSetPastActivity,
  handleResetPage,
  handleResetPageAndShowArrow,
  setActivities,
}) {
  const navigate = useNavigate();
  const { activityName } = useParams();
  const selectedActivity = activities?.find(
    activity => activity.activity === activityName
  );

  const mappedCategories = {
    culture: cultureIcon,
    'food and beverages': fAndBIcon,
    outdoor: outdoorIcon,
    sport: sportIcon,
    other: otherIcon,
  };
  const [showPastModal, setShowPastModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [check, setCheck] = useState(false);
  console.log('selectedActivity', selectedActivity);
  return (
    <Picture>
      <Header handleResetPage={handleResetPage} hiddenGroup="hidden">
        {selectedActivity.activity}
        {selectedActivity.isArchived === false ? (
          <ArrowBackButton
            onClick={() => {
              navigate(
                `/${
                  selectedActivity?.group
                    ? selectedActivity.group
                    : selectedActivity.friend
                }`
              );
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

          <StyledActivity>{selectedActivity.activity}</StyledActivity>

          {!selectedActivity.photo > 0 ? (
            <StyledImage
              width="80"
              height="80"
              alt="upload"
              src={MappedPlaceholderPictures[selectedActivity.category]}
            />
          ) : (
            <StyledImage
              width="80"
              height="80"
              alt="upload"
              src={selectedActivity.photo}
            />
          )}

          <StyledCategoryIcon
            src={mappedCategories[selectedActivity.category]}
            alt={mappedCategories[selectedActivity.category]}
          />
          <StyledCategoryText>{selectedActivity.category}</StyledCategoryText>

          <StyledOtherInfo>
            {selectedActivity.group === '' && (
              <StyledIcon
                width="35"
                height="35"
                src={friendIcon}
                alt="friend"
              />
            )}
            {selectedActivity.group !== '' && (
              <StyledIconGroup
                width="55"
                height="55"
                src={groupIcon}
                alt="friend"
              />
            )}
            {selectedActivity.group === '' &&
              selectedActivity.friend === 'I still need to plan...' && (
                <StyledText>make plans with a friend!</StyledText>
              )}

            {selectedActivity.group !== '' && (
              <StyledText>{selectedActivity.group}</StyledText>
            )}
            {selectedActivity.friend !== 'I still need to plan...' &&
              selectedActivity.group === '' && (
                <StyledText>{selectedActivity.friend}</StyledText>
              )}

            {selectedActivity.notes ? (
              <>
                <StyledIcon src={notesIcon} alt="notes" />
                <StyledText>{selectedActivity.notes}</StyledText>
              </>
            ) : (
              <>
                <StyledNoNotes data-testid="noNotes" />
              </>
            )}
            <StyledIcon src={dateIcon} alt="date" />
            {selectedActivity.date ? (
              <StyledText>{selectedActivity.date}</StyledText>
            ) : (
              <StyledText>plan your activity soon!</StyledText>
            )}
            <StyledIcon src={locationIcon} alt="location" />
            {selectedActivity.location ? (
              <StyledText>{selectedActivity.location}</StyledText>
            ) : (
              <StyledText>where do you have to go?</StyledText>
            )}
          </StyledOtherInfo>
          {selectedActivity.isArchived === false ? (
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
                    data-testid="checkIfActivityIsDone"
                    id="checkIfActivityIsDone"
                    type="checkbox"
                    name="checkIfActivityIsDone"
                    width="40px"
                    onClick={() => setShowPastModal(true)}
                    onChange={() => setCheck(true)}
                    value={check}
                    checked={check}
                  />
                </label>
              </StyledCheckbox>
            </>
          ) : (
            <>
              <PastDeleteButton
                role="button"
                onClick={() => setShowDeleteModal(true)}
              >
                <img width="30" height="30" src={deleteIcon} alt="delete" />
              </PastDeleteButton>
              <DeleteModal
                onDelete={() => onDeleteActivity(selectedActivity.id)}
                onClose={() => setShowDeleteModal(false)}
                show={showDeleteModal}
              />
            </>
          )}
        </MainGrid>
        <PastActivityModal
          onClose={() => setShowPastModal(false)}
          showPastModal={showPastModal}
          onSetPastActivity={onSetPastActivity}
          handleQuit={handleQuit}
          id={selectedActivity.id}
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

  function handleQuit() {
    setCheck(false);
  }

  function onDeleteActivity(thisActivityId) {
    setActivities(
      activities.filter(activity => activity.id !== thisActivityId)
    );
    navigate('/getinspired');
  }
}

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 90px 30px 20px 30px auto;
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
const StyledIconGroup = styled.img`
  justify-self: center;
`;
const StyledIcon = styled(StyledIconGroup)`
  justify-self: center;
  padding: 5px;
`;

const StyledText = styled.span`
  grid-column-start: 2;
  grid-column-end: 6;
  word-break: break-word;
  margin: 3px;
  align-self: center;
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
