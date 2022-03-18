import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Button from './Button';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import backgroundpicture from '../images/background.svg';

export default function Form({
  handleActivity,
  preloadedValues,
  buttonName,
  title,
}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: preloadedValues
      ? preloadedValues
      : {
          activities: '',
          friend: '',
          notes: '',
          date: '',
          location: '',
        },
  });

  const onSubmit = data => {
    if (preloadedValues) {
      handleActivity({
        id: preloadedValues.id,
        activity: data.activity,
        friend: data.friend === '' ? 'I still need to plan...' : data.friend,
        notes: data.notes,
        date: data.date,
        location: data.location,
      });
      navigate(-1);
    } else {
      const id = nanoid();
      handleActivity({
        id: id,
        activity: data.activity,
        friend: data.friend === '' ? 'I still need to plan...' : data.friend,
        notes: data.notes,
        date: data.date,
        location: data.location,
      });
      navigate(`/`);
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
      <label htmlFor="activity">
        name of activity:
        <input
          id="activity"
          type="text"
          name="activity"
          {...register('activity', {
            required: 'So, you plan to do nothing?? 😉',
            maxLength: { value: 50 },
            minLength: {
              value: 3,
              message:
                'This is an activity with not even 2 characters? - I do not believe you..',
            },
          })}
        />
        {errors.activity && (
          <ErrorMessage name="error-message">
            {errors.activity.message}
          </ErrorMessage>
        )}
      </label>

      <label htmlFor="friend">
        who should join you?
        <input
          id="friend"
          type="text"
          name="friend"
          {...register('friend', {
            maxLength: {
              value: 100,
              message: 'I can not believe that someone has so many friends',
            },
          })}
        />
        {errors.friend && (
          <ErrorMessage name="error-message">
            {errors.friend.message}
          </ErrorMessage>
        )}
      </label>

      <label htmlFor="notes">
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
        />
        {errors.notes && (
          <ErrorMessage name="error-message">
            {errors.notes.message}
          </ErrorMessage>
        )}
      </label>

      <label htmlFor="date">
        do you already have a date in mind?
        <input
          data-testid="date"
          id="date"
          type="date"
          name="date"
          {...register('date')}
        />
      </label>

      <label htmlFor="location">
        where is the activity taking place?
        <input
          id="location"
          type="text"
          name="location"
          {...register('location', {
            maxLength: {
              value: 50,
              message: 'This address is way too long!',
            },
          })}
        />
        {errors.location && (
          <ErrorMessage name="error-message">
            {errors.location.message}
          </ErrorMessage>
        )}
      </label>

      <Button
        width="100%"
        height="fit-content"
        type="submit"
        position="fixed"
        bottom="0"
        zIndex="1"
      >
        {buttonName}
      </Button>
    </WrapperForm>
  );
}

const WrapperForm = styled.form`
  height: 85vh;
  display: grid;
  grid-template-rows: repeat(5, auto) 40px;
  color: rgba(71, 39, 35, 0.72);
  margin: 20px;
  background-image: url(${backgroundpicture});

  label {
    margin: 0px 10px;
  }

  input {
    border: none;
    background: #f0e7da;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 30px;
    width: 100%;
    color: rgba(71, 39, 35, 0.72);
    font-size: 20px;
  }

  textarea {
    border: none;
    background: #f0e7da;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 90px;
    width: 100%;
    color: rgba(71, 39, 35, 0.72);
    font-size: 20px;
  }
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;
