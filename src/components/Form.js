import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Navigation from './Navigation';

import saveIcon from '../images/saveIcon.svg';

export default function Form({
  handleActivity,
  preloadedValues,
  title,
  setImage,
  uploadImage,
  photo,
  image,
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
  console.log(preloadedValues);
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
        photo: photo,
      });
      navigate(`/${data.friend}/${data.activity}/`);
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
      setPhoto();
    }
  };

  useEffect(() => {
    setFocus('activity');
  }, [setFocus]);

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

      {/* --------------------------------------------------------------------------- */}
      {!preloadedValues && (
        <StyledPictureUpload>
          <StyledUpload htmlFor="selectPhoto">
            Uploadpicture
            <input
              id="selectPhoto"
              name="selectPhoto"
              type="file"
              // onChange={e => setImage(e.target.files[0])}
              onChange={uploadImage}
            />
          </StyledUpload>

          <StyledImage>
            {photo ? (
              <img width="80" height="80" alt="preview" src={photo} />
            ) : (
              'your preview will appear here'
            )}
          </StyledImage>
          {/* <label htmlFor="uploadPhoto">
            <input
              id="uploadPhoto"
              name="uploadPhoto"
              type="button"
              onChange={uploadImage}
            />
          </label> */}
          {/* <StyledPreview
            type="button"
            onClick={event => {
              event.stopPropagation();
              uploadImage(image);
            }}
          >
            preview
          </StyledPreview> */}
          <StyledUploadInfo>
            <i>*preview your picture otherwise it will not only be saved*</i>
          </StyledUploadInfo>
        </StyledPictureUpload>
      )}
      {/* --------------------------------------------------------------------------- */}

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
  grid-template-rows: repeat(7, auto) 30px;
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

const StyledCategory = styled.p`
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
`;

const StyledUpload = styled.label`
  align-self: center;
`;

const StyledPreview = styled.button`
  width: fit-content;
  height: fit-content;
  align-self: center;
  //
`;

const StyledUploadInfo = styled.p`
  grid-column-start: span 2;
`;
const StyledImage = styled.span`
  grid-row: 1 / span 2;
  grid-column: 2;
  justify-self: center;
  align-self: center;

  img {
    box-shadow: 0px 0px 20px rgba(0, 0, 20, 0.15);
    border-radius: 50px;
  }
`;
