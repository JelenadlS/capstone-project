import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { AddSaveButton } from '../components/Button';
import {
  WrapperForm,
  StyledSelection,
  StyledDate,
  StyledLabels,
  StyledInputs,
  StyledFriendLink,
  StyledGroupSelection,
  StyledButtonChoice,
  StyledButtonArea,
  StyledFriendSelection,
  StyledSelectionFG,
  StyledSelectionFriend,
  StyledPictureUpload,
  ErrorMessage,
} from '../components/FormStyling';
import PictureUpload from '../components/PictureUpload';

import useStore from '../hooks/useStore.js';

import addAFriendIcon from '../images/addAFriendIcon.svg';
import addAGroupIcon from '../images/addAGroupIcon.svg';
import addPictureIcon from '../images/addPictureIcon.svg';
import saveIcon from '../images/saveIcon.svg';

export default function Form({
  handleActivity,
  preloadedValues,
  title,
  uploadImage,
}) {
  const navigate = useNavigate();

  const [friendSelection, setFriendSelection] = useState(false);
  const [groupSelection, setGroupSelection] = useState(false);

  const addedFriend = useStore(state => state.addedFriend);
  const addedGroup = useStore(state => state.addedGroup);
  const photo = useStore(state => state.photo);
  const setPhoto = useStore(state => state.setPhoto);
  const setShowSave = useStore(state => state.setShowSave);
  const handleResetPage = useStore(state => state.handleResetPage);

  const dateToday = new Date().toISOString().substring(0, 10);
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
        group: data.group === '' ? '' : data.group,
        friend: data.friend === '' ? 'I still need to plan...' : data.friend,
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
        group: data.group === '' ? '' : data.group,
        friend: data.friend === '' ? 'I still need to plan...' : data.friend,
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
    setShowSave(true);
  }, [setFocus, setShowSave]);

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
        <label htmlFor="category">Category:</label>

        <select id="category" name="select category" {...register('category')}>
          <option value="culture">culture</option>
          <option value="food and beverages">food and beverages</option>
          <option value="outdoor">outdoor</option>
          <option value="sport">sport</option>
          <option value="other">other</option>
        </select>
      </StyledSelection>

      <StyledSelectionFriend>
        Who will join you?
        <StyledButtonArea>
          <StyledButtonChoice
            type="button"
            onClick={handleOnClickLater}
            active={groupSelection === false && friendSelection === false}
          >
            choose later
          </StyledButtonChoice>
          <StyledButtonChoice
            type="button"
            onClick={handleOnClickFriend}
            active={friendSelection === true}
          >
            friend
          </StyledButtonChoice>
          <StyledButtonChoice
            type="button"
            onClick={handleOnClickGroup}
            active={groupSelection === true}
          >
            group
          </StyledButtonChoice>
        </StyledButtonArea>
        <StyledFriendSelection hidden={friendSelection === false}>
          <label htmlFor="friend" />
          <StyledSelectionFG id="friend" name="friend" {...register('friend')}>
            <option value="">friend</option>
            {addedFriend.map(friend => {
              return (
                <option value={friend.newFriend} key={friend.id}>
                  {friend.newFriend}
                </option>
              );
            })}
          </StyledSelectionFG>
          <StyledFriendLink to="/addfriend" onClick={handleResetPage}>
            <img
              width="40"
              height="20"
              alt="addAFriendIcon"
              src={addAFriendIcon}
            />
          </StyledFriendLink>
        </StyledFriendSelection>
        <StyledGroupSelection hidden={groupSelection === false}>
          <label htmlFor="group" />
          <StyledSelectionFG id="group" name="group" {...register('group')}>
            <option value="">group</option>
            {addedGroup.map(group => {
              return (
                <option value={group.enteredGroup} key={group.id}>
                  {group.enteredGroup}
                </option>
              );
            })}
          </StyledSelectionFG>
          <StyledFriendLink to="/addgroup" onClick={handleResetPage}>
            <img
              width="40"
              height="20"
              alt="addAGroupIcon"
              src={addAGroupIcon}
            />
          </StyledFriendLink>
        </StyledGroupSelection>
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

      <StyledPictureUpload>
        <label htmlFor="selectPhoto">
          <img width="50" height="50" alt="selectPhoto" src={addPictureIcon} />
          <input
            id="selectPhoto"
            name="selectPhoto"
            type="file"
            onChange={uploadImage}
            hidden
            accept="image/gif,image/jpeg,image/png"
          />
        </label>
        <PictureUpload preloadedValues={preloadedValues} />
      </StyledPictureUpload>

      <StyledLabels htmlFor="date">
        Do you already have a date in mind?
        <StyledDate
          data-testid="date"
          id="date"
          type="date"
          name="date"
          min={dateToday}
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

      <AddSaveButton onClick={handleResetPage}>
        <img width="45" height="45" src={saveIcon} alt="save" />
      </AddSaveButton>
    </WrapperForm>
  );
  function handleOnClickLater() {
    setFriendSelection(false);
    setGroupSelection(false);
  }

  function handleOnClickFriend() {
    setFriendSelection(true);
    setGroupSelection(false);
  }

  function handleOnClickGroup() {
    setGroupSelection(true);
    setFriendSelection(false);
  }
}
