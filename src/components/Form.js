import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { DeletePictureButton } from '../components/Button';
import Navigation from './Navigation';

import addAFriendIcon from '../images/addAFriendIcon.svg';
import addPictureIcon from '../images/addPictureIcon.svg';
import deletePictureIcon from '../images/deletePictureIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default function Form({
  handleActivity,
  preloadedValues,
  title,
  uploadImage,
  photo,
  setPhoto,
  handleResetPage,
  handleResetPageAndShowArrow,
  addedFriend,
  addedGroup,
}) {
  const [preloadedPicture, setPreloadedPicture] = useState(
    preloadedValues?.photo
  );
  const [friendSelection, setFriendSelection] = useState(true);
  const [groupSelection, setGroupSelection] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedValues
      ? preloadedValues
      : {
          activities: '',
          category: 'other',
          group: '',
          friend: '',
          notes: '',
          date: '',
          location: '',
          photo: '',
        },
  });

  const onSubmit = data => {
    if (preloadedValues) {
      handleActivity({
        id: preloadedValues.id,
        activity: data.activity,
        category: data.category === '' ? 'other' : data.category,
        group: data.group === 'group' ? '' : data.group,
        friend:
          data.friend === 'friend' ? 'I still need to plan...' : data.friend,
        notes: data.notes,
        date: data.date,
        location: data.location,
        photo: photo.length > 0 ? photo : '',
      });
      navigate(`/${data.friend}/${data.activity}/`);
      setPhoto('');
    } else {
      const id = nanoid();
      handleActivity({
        id: id,
        activity: data.activity,
        category: data.category === '' ? '' : data.category,
        group: data.group === 'group' ? '' : data.group,
        friend:
          data.friend === 'friend' ? 'I still need to plan...' : data.friend,
        notes: data.notes,
        date: data.date,
        location: data.location,
        photo: photo,
      });
      navigate(`/`);
      setPhoto('');
    }
  };

  useEffect(() => {
    setFocus('activity');
  }, [setFocus]);

  useEffect(() => {
    if (!friendSelection) {
      return null;
    } else if (!groupSelection) {
      return null;
    }
  }, [friendSelection, groupSelection]);

  console.log('friend', friendSelection);
  console.log('group', groupSelection);
  return (
    <WrapperForm
      title={title}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <StyledLabels htmlFor="activity">
        Name of activity:
        <StyledInputs
          id="activity"
          type="text"
          name="activity"
          placeholder="Brunch, favorite Restaurant,..."
          {...register('activity', {
            required: 'So, you plan to do nothing?? 😉',
            maxLength: {
              value: 50,
              message:
                'This might be a little too long for just an activty, use the notes!',
            },
            minLength: {
              value: 3,
              message:
                'This is an activity with not even 2 characters? - I do not believe you..',
            },
          })}
          onKeyUp={() => trigger('activity')}
        />
        {errors.activity && (
          <ErrorMessage name="error-message">
            {errors.activity.message}
          </ErrorMessage>
        )}
      </StyledLabels>

      <StyledSelection>
        Category:
        <select name="select category" {...register('category')}>
          <option value="culture">culture</option>
          <option value="food and beverages">food and beverages</option>
          <option value="outdoor">outdoor</option>
          <option value="sport">sport</option>
          <option value="other">other</option>
        </select>
      </StyledSelection>

      <StyledSelectionFriend>
        Who will join you?
        <p>
          If you already know add a friend <strong>or</strong> a group or keep
          it empty and add later.
        </p>
        <StyledFriendSelection>
          <label htmlFor="friend" />
          <select
            id="friend"
            name="friend"
            {...register('friend')}
            onChange={handleOnClickFriend}
          >
            {friendSelection === false && <option value="">friend</option>}
            {addedFriend.map(friend => {
              return (
                <option value={friend.newFriend} key={friend.id}>
                  {friend.newFriend}
                </option>
              );
            })}
          </select>
        </StyledFriendSelection>
        <StyledFriendLink to="/addfriend" onClick={handleResetPage}>
          <img
            width="40"
            height="20"
            alt="addAFriendIcon"
            src={addAFriendIcon}
          />
        </StyledFriendLink>
        <StyledGroupSelection>
          <label htmlFor="group" />
          <select
            id="group"
            name="group"
            {...register('group')}
            onChange={handleOnClickGroup}
          >
            {groupSelection === false && <option value="">group</option>}
            {addedGroup.map(group => {
              return (
                <option value={group.enteredGroup} key={group.id}>
                  {group.enteredGroup}
                </option>
              );
            })}
          </select>
        </StyledGroupSelection>
        <StyledGroupLink to="/addfriend" onClick={handleResetPage}>
          <img
            width="40"
            height="20"
            alt="addAFriendIcon"
            src={addAFriendIcon}
          />
        </StyledGroupLink>
      </StyledSelectionFriend>

      <StyledLabels htmlFor="notes">
        Space for some additional notes...
        <textarea
          id="notes"
          type="text"
          name="notes"
          placeholder="Don't forget..."
          row="6"
          {...register('notes', {
            maxLength: {
              value: 200,
              message: 'Do you really need such a long note?',
            },
          })}
          onKeyUp={() => trigger('notes')}
        />
        {errors.notes && (
          <ErrorMessage name="error-message">
            {errors.notes.message}
          </ErrorMessage>
        )}
      </StyledLabels>

      {preloadedValues ? (
        <StyledPictureUpload>
          <label htmlFor="selectPhoto">
            <img
              width="50"
              height="50"
              alt="selectPhoto"
              src={addPictureIcon}
            />
            <input
              id="selectPhoto"
              name="selectPhoto"
              type="file"
              onChange={uploadImage}
              hidden
              accept="image/gif,image/jpeg,image/png"
            />
          </label>

          {preloadedPicture ? (
            <PositionedSection>
              <StyledImage
                width="60"
                height="60"
                alt={`preview ${preloadedPicture}`}
                src={preloadedPicture}
              />
              <DeletePictureButton onClick={e => onDeletePreloadedPicture(e)}>
                <img
                  src={deletePictureIcon}
                  alt="delete"
                  width="20"
                  height="20"
                />
              </DeletePictureButton>
            </PositionedSection>
          ) : (
            <div>
              {photo ? (
                <PositionedSection>
                  <StyledImage
                    width="60"
                    height="60"
                    alt={`preview ${photo}`}
                    src={photo}
                  />
                  {photo && (
                    <DeletePictureButton onClick={e => onDeletePicture(e)}>
                      <img
                        src={deletePictureIcon}
                        alt="delete"
                        width="20"
                        height="20"
                      />
                    </DeletePictureButton>
                  )}
                </PositionedSection>
              ) : (
                <StyledPreviewText>preview</StyledPreviewText>
              )}
            </div>
          )}
        </StyledPictureUpload>
      ) : (
        <StyledPictureUpload>
          <label htmlFor="selectPhoto">
            <img
              width="50"
              height="50"
              alt="selectPhoto"
              src={addPictureIcon}
            />
            <input
              id="selectPhoto"
              name="selectPhoto"
              type="file"
              onChange={uploadImage}
              hidden
              accept="image/gif,image/jpeg,image/png"
            />
          </label>
          {photo ? (
            <PositionedSection>
              <StyledImage
                width="60"
                height="60"
                alt={`preview ${photo}`}
                src={photo}
              />
              {photo && (
                <DeletePictureButton onClick={e => onDeletePicture(e)}>
                  <img
                    src={deletePictureIcon}
                    alt="delete"
                    width="20"
                    height="20"
                  />
                </DeletePictureButton>
              )}
            </PositionedSection>
          ) : (
            <StyledPreviewText>preview</StyledPreviewText>
          )}
        </StyledPictureUpload>
      )}

      <StyledLabels htmlFor="date">
        Do you already have a date in mind?
        <StyledDate
          data-testid="date"
          id="date"
          type="date"
          name="date"
          {...register('date')}
        />
      </StyledLabels>

      <StyledLabels htmlFor="location">
        Where is the activity taking place?
        <StyledInputs
          id="location"
          type="text"
          name="location"
          placeholder="Street name,..."
          {...register('location', {
            maxLength: {
              value: 50,
              message: 'This address is way too long!',
            },
          })}
          onKeyUp={() => trigger('location')}
        />
        {errors.location && (
          <ErrorMessage name="error-message">
            {errors.location.message}
          </ErrorMessage>
        )}
      </StyledLabels>

      <Navigation
        handleResetPage={handleResetPage}
        handleResetPageAndShowArrow={handleResetPageAndShowArrow}
      >
        <img width="45" height="45" src={saveIcon} alt="save" />
      </Navigation>
    </WrapperForm>
  );

  function onDeletePicture(event) {
    event.preventDefault();
    setPhoto('');
  }

  function onDeletePreloadedPicture(event) {
    event.preventDefault();
    setPreloadedPicture('');
  }

  function handleOnClickFriend() {
    setGroupSelection(false);
    setFriendSelection(true);
  }
  function handleOnClickGroup() {
    setFriendSelection(false);
    setGroupSelection(true);
  }
}

const WrapperForm = styled.form`
  height: 85vh;
  display: grid;
  grid-template-rows: repeat(7, auto) 50px;
  margin-top: 20px;

  textarea {
    background: transparent;
    border: 1px solid rgba(71, 39, 35, 0.42);
    border-radius: 5px;
    padding: 5px;
    height: 90px;
    width: 100%;
    color: rgba(71, 39, 35, 0.72);
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    outline: none;
  }

  i {
    font-size: 12px;
  }
`;

const StyledSelection = styled.section`
  margin: 0 30px 8px;
  display: flex;
  align-items: center;
  gap: 15px;

  select {
    color: rgba(71, 39, 35, 0.72);
    font-size: 14px;
    padding: 3px;
    background: transparent;
    border: 1px solid rgba(71, 39, 35, 0.42);
    border-radius: 5px;
  }
`;

const StyledSelectionFriend = styled.section`
  margin: 0 30px 8px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  align-items: center;

  p {
    grid-row-start: 2;
    grid-column-start: span 2;
    font-size: 12px;
    margin-left: 8px;
  }

  select {
    color: rgba(71, 39, 35, 0.72);
    font-size: 14px;
    padding: 3px;
    margin-left: 15px;
    background: transparent;
    border: 1px solid rgba(71, 39, 35, 0.42);
    border-radius: 5px;
  }
`;
const StyledFriendSelection = styled.span`
  grid-row-start: 3;
`;

const StyledGroupSelection = styled.span`
  grid-row-start: 4;
`;

const StyledLabels = styled.label`
  padding: 0 30px;
`;

const StyledInputs = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  outline: none;
`;

const StyledFriendLink = styled(Link)`
  grid-row-start: 3;
  justify-self: end;
  margin-top: 8px;
`;
const StyledGroupLink = styled(Link)`
  grid-row-start: 4;
  justify-self: end;
  margin-top: 8px;
`;

const StyledDate = styled(StyledInputs)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 30px;
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  color: rgba(210, 129, 53, 1);
`;

const StyledPictureUpload = styled.section`
  margin: 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
`;

const PositionedSection = styled.section`
  position: relative;
`;

const StyledPreviewText = styled.section`
  height: 60px;
  width: 60px;
  padding-top: 18px;
  padding-left: 4px;
  border: none;
  box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
  border-radius: 50px;
  font-size: 14px;
`;

const StyledImage = styled.img`
  box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
  border-radius: 50px;
`;
