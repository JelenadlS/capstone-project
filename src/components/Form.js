import styled from 'styled-components';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function Form({ onAddActivity }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: {
      activity: '',
      friend: '',
      notes: '',
      date: '',
      location: '',
    },
  });
  const onSubmit = data => {
    onAddActivity(data);
    navigate('/');
  };

  useEffect(() => {
    setFocus('activity');
  }, [setFocus]);

  return (
    <WrapperForm
      title="add activities"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="activity">name of activity:</label>
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

      <label htmlFor="friend">who should join you?</label>
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

      <label htmlFor="notes">space for some additional notes...</label>
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
        <ErrorMessage name="error-message">{errors.notes.message}</ErrorMessage>
      )}

      <label htmlFor="date">do you already have a date in mind?</label>
      <input id="date" type="date" name="date" {...register('date')} />

      <label htmlFor="location">where is the activity taking place?</label>
      <input
        id="location"
        type="text"
        name="location"
        {...register('location', {
          maxLength: {
            value: 50,
            message: 'This adress is way too long!',
          },
        })}
      />

      {errors.location && (
        <ErrorMessage name="error-message">
          {errors.location.message}
        </ErrorMessage>
      )}

      <PositionButton type="submit">Add</PositionButton>
    </WrapperForm>
  );
}

const WrapperForm = styled.form`
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-content: start;
  gap: 10px;
  color: rgba(71, 39, 35, 0.72);
  margin: 20px;

  label {
    margin-left: 10px;
  }

  input {
    border: none;
    background: #f0e7da;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-top: -10px;
    height: 30px;
    color: rgba(71, 39, 35, 0.72);
    font-size: 20px;
  }

  textarea {
    border: none;
    background: #f0e7da;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-top: -10px;
    height: 90px;
    color: rgba(71, 39, 35, 0.72);
    font-size: 20px;
  }
`;
const PositionButton = styled(Button)`
  align-self: end;
`;

const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
`;
