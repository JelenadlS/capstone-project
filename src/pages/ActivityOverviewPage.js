import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import PastActivityModal from '../components/PastActivityModal';

import useStore from '../hooks/useStore.js';

import deleteIcon from '../images/binIcon.svg';
import cultureIcon from '../images/cultureIcon.svg';
import dateIcon from '../images/dateIcon.svg';
import editIcon from '../images/editIcon.svg';
import fAndBIcon from '../images/fAndBIcon.svg';
import friendIcon from '../images/friendIcon.svg';
import goBackIcon from '../images/goBackIcon.svg';
import groupIcon from '../images/groupIcon.svg';
import locationIcon from '../images/locationIcon.svg';
import notesIcon from '../images/notesIcon.svg';
import otherIcon from '../images/otherIcon.svg';
import outdoorIcon from '../images/outdoorIcon.svg';
import sportIcon from '../images/sportIcon.svg';

export default function ActivityOverviewPage({ onSetPastActivity }) {
  const navigate = useNavigate();

  const { activityName } = useParams();

  const [showPastModal, setShowPastModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [check, setCheck] = useState(false);

  const activities = useStore(state => state.activities);
  const setActivities = useStore(state => state.setActivities);
  const handleResetPageAndShowArrow = useStore(
    state => state.handleResetPageAndShowArrow
  );
  const resetPage = useStore(state => state.resetPage);

  const selectedActivity = activities.find(
    activity => activity.activity === activityName
  );

  const mappedCategories = {
    culture: cultureIcon,
    'food and beverages': fAndBIcon,
    outdoor: outdoorIcon,
    sport: sportIcon,
    other: otherIcon,
  };

  return (
    <>
      <Header hiddenGroup="hidden">
        {selectedActivity.isArchived ? (
          <ArrowBackButton
            onClick={() =>
              handleResetPageAndShowArrow(navigate('/getinspired'))
            }
          >
            <img width="50" height="40" src={goBackIcon} alt="go back" />
          </ArrowBackButton>
        ) : (
          <ArrowBackButton
            type="button"
            onClick={event =>
              resetPage(
                event,
                navigate(
                  `/${
                    selectedActivity?.group
                      ? selectedActivity.group
                      : selectedActivity.friend
                  }`
                )
              )
            }
          >
            <img width="50" height="40" src={goBackIcon} alt="go back" />
          </ArrowBackButton>
        )}
        {selectedActivity.activity}
      </Header>
      <Main
        aria-label={`activity overview of ${selectedActivity.activity} page`}
      >
        <MainGrid>
          <StyledTitle>Activity</StyledTitle>

          <StyledActivity>{selectedActivity.activity}</StyledActivity>

          <StyledImage
            width="80"
            height="80"
            alt={`
              ${
                selectedActivity.photo
                  ? 'uploaded picture'
                  : 'placeholder picture per category'
              }
              `}
            src={
              selectedActivity.photo ||
              MappedPlaceholderPictures[selectedActivity.category]
            }
          />

          <StyledCategoryIcon
            width="25"
            height="25"
            src={mappedCategories[selectedActivity.category]}
            alt={`${selectedActivity.category} icon`}
          />
          <p>{selectedActivity.category}</p>

          <StyledOtherInfo>
            <StyledIcon
              width={selectedActivity.group ? '55' : '35'}
              height={selectedActivity.group ? '55' : '35'}
              src={selectedActivity.group ? groupIcon : friendIcon}
              alt={selectedActivity.group ? 'group icon' : 'friend icon'}
            />

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
                <StyledIcon
                  width="35"
                  height="35"
                  src={notesIcon}
                  alt="notes icon"
                />
                <StyledText>{selectedActivity.notes}</StyledText>
              </>
            ) : (
              <>
                <StyledNoNotes data-testid="noNotes" aria-hidden="true" />
              </>
            )}

            <StyledIcon width="35" height="35" src={dateIcon} alt="date icon" />
            {selectedActivity.date ? (
              <StyledText>{selectedActivity.date}</StyledText>
            ) : (
              <StyledText>plan your activity soon!</StyledText>
            )}

            <StyledIcon
              width="38"
              height="38"
              src={locationIcon}
              alt="location icon"
            />
            {selectedActivity.location ? (
              <StyledText>{selectedActivity.location}</StyledText>
            ) : (
              <StyledText>where do you have to go?</StyledText>
            )}
          </StyledOtherInfo>

          {selectedActivity.isArchived ? (
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
          ) : (
            <>
              <EditButton
                onClick={() =>
                  navigate(
                    `/${
                      selectedActivity?.group
                        ? selectedActivity.group
                        : selectedActivity.friend
                    }/${selectedActivity.activity}/${
                      selectedActivity.id
                    }/editactivity`
                  )
                }
              >
                <img width="55" height="55" src={editIcon} alt="edit" />
              </EditButton>
              <StyledCheckbox>
                <p>Did you do this activity already?</p>
                <label htmlFor="checkIfActivityIsDone">
                  <input
                    data-testid="checkIfActivityIsDone"
                    id="checkIfActivityIsDone"
                    type="checkbox"
                    name="checkIfActivityIsDone"
                    aria-label=" checkbox if activity is already done"
                    width="40px"
                    onClick={() => setShowPastModal(true)}
                    onChange={() => setCheck(true)}
                    value={check}
                    checked={check}
                  />
                </label>
              </StyledCheckbox>
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
    </>
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
  grid-template-rows: repeat(5, auto) 40px;
  margin: 30px;
  align-items: center;
  position: relative;
`;

const StyledTitle = styled.h2`
  grid-column-start: 1;
  grid-column-end: 6;
  padding: 10px 0;
`;

const StyledActivity = styled.h3`
  grid-column-start: 4;
  grid-column-end: 6;
`;

const StyledCategoryIcon = styled.img`
  grid-column-start: 4;
  grid-column-end: 4;
  padding-left: 5px;
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
