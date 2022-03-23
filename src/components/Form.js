import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { DeletePictureButton } from '../components/Button';
import Navigation from './Navigation';

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
}) {
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
          friend: '',
          notes: '',
          date: '',
          location: '',
          photo: '',
        },
  });

  const onSubmit = data => {
    const sortedFriendNames = data.friend
      .split(',')
      .map(tag => tag.trim())
      .sort(function (a, b) {
        const firstFriend = a.toLowerCase();
        const secondFriend = b.toLowerCase();

        if (firstFriend < secondFriend) return -1;
        if (firstFriend > secondFriend) return 1;
        return 0;
      })
      .join(', ');

    if (preloadedValues) {
      handleActivity({
        id: preloadedValues.id,
        activity: data.activity,
        category: data.category === '' ? 'other' : data.category,
        friend:
          data.friend === '' ? 'I still need to plan...' : sortedFriendNames,
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
        category: data.category === '' ? 'other' : data.category,
        friend:
          data.friend === '' ? 'I still need to plan...' : sortedFriendNames,
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

  function onDeletePicture(event) {
    event.preventDefault();
    setPhoto('');
  }
  const [preloadedPicture, setPreloadedPicture] = useState(
    preloadedValues?.photo
  );
  function onDeletePreloadedPicture(event) {
    event.preventDefault();
    setPreloadedPicture('');
  }

  return (
    <WrapperForm
      title={title}
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <StyledLabels htmlFor="activity">
        name of activity:
        <StyledInputs
          id="activity"
          type="text"
          name="activity"
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

      <StyledCategory>
        category:
        <select name="select category" {...register('category')}>
          <option value="culture">culture</option>
          <option value="food and beverages">food and beverages</option>
          <option value="outdoor">outdoor</option>
          <option value="sport">sport</option>
          <option value="other">other</option>
        </select>
      </StyledCategory>

      <StyledLabels htmlFor="friend">
        who should join you?
        <div>
          <i>*Seperate by comma when more than one friend*</i>
        </div>
        <StyledInputs
          id="friend"
          type="text"
          name="friend"
          {...register('friend', {
            maxLength: {
              value: 100,
              message: 'I can not believe that someone has so many friends',
            },
          })}
          onKeyUp={() => trigger('friend')}
        />
        {errors.friend && (
          <ErrorMessage name="error-message">
            {errors.friend.message}
          </ErrorMessage>
        )}
      </StyledLabels>

      <StyledLabels htmlFor="notes">
        space for some additional notes...
        <textarea
          id="notes"
          type="text"
          name="notes"
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
            <img width="50" height="50" alt="preview1" src={addPictureIcon} />
            <input
              id="selectPhoto"
              name="selectPhoto"
              type="file"
              onChange={uploadImage}
              hidden
            />
          </label>

          {preloadedPicture ? (
            <PositionedSection>
              <div>
                <StyledImage
                  width="60"
                  height="60"
                  alt="preview"
                  src={preloadedPicture}
                />
              </div>
              <DeletePictureButton onClick={e => onDeletePreloadedPicture(e)}>
                <img
                  src={deletePictureIcon}
                  alt="save"
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
                    alt="preview"
                    src={photo}
                  />
                  {photo && (
                    <DeletePictureButton onClick={e => onDeletePicture(e)}>
                      <img
                        src={deletePictureIcon}
                        alt="save"
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
            <img width="50" height="50" alt="preview1" src={addPictureIcon} />
            <input
              id="selectPhoto"
              name="selectPhoto"
              type="file"
              onChange={uploadImage}
              hidden
            />
          </label>
          {photo ? (
            <PositionedSection>
              <StyledImage width="60" height="60" alt="preview" src={photo} />
              {photo && (
                <DeletePictureButton onClick={e => onDeletePicture(e)}>
                  <img
                    src={deletePictureIcon}
                    alt="save"
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
        do you already have a date in mind?
        <StyledDate
          data-testid="date"
          id="date"
          type="date"
          name="date"
          {...register('date')}
        />
      </StyledLabels>

      <StyledLabels htmlFor="location">
        where is the activity taking place?
        <StyledInputs
          id="location"
          type="text"
          name="location"
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

      <Navigation>
        <img src={saveIcon} alt="save" />
      </Navigation>
    </WrapperForm>
  );
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
    height: 90px;
    width: 100%;
    color: rgba(71, 39, 35, 0.72);
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  i {
    font-size: 12px;
  }
`;

const StyledCategory = styled.section`
  margin: 0 30px 8px;
  display: flex;
  align-items: center;
  gap: 30px;

  select {
    color: rgba(71, 39, 35, 0.72);
    font-size: 14px;
    padding: 3px;
    background: transparent;
    border: 1px solid rgba(71, 39, 35, 0.42);
    border-radius: 5px;
  }
`;

const StyledLabels = styled.label`
  padding: 0 30px;
`;

const StyledInputs = styled.input`
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  font-size: 20px;
`;

const StyledDate = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(71, 39, 35, 0.42);
  border-radius: 5px;
  padding: 1px;
  width: 100%;
  color: rgba(71, 39, 35, 0.72);
  font-size: 20px;
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
