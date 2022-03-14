import styled from 'styled-components';
import Button from './Button';
import { useForm } from 'react-hook-form';

export default function Form({ onAddActivity }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    onAddActivity(data);
  };

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   const { activity, friend } = form.elements;
  //   onAddActivity({ activity: activity.value, friend: friend.value });
  //   activity.value = '';
  //   friend.value = '';
  // }
  return (
    <WrapperForm
      title="add activities"
      autoComplete="off"
      // onSubmit={handleSubmit}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="activity">name of activity:</label>
      <input
        id="activity"
        required
        type="text"
        name="activity"
        {...register('activity')}
      />

      <label htmlFor="friend">who should join you?</label>
      <input id="friend" type="text" name="friend" {...register('friend')} />

      <label htmlFor="notes">space for some additional notes...</label>
      <input id="notes" type="text" name="notes" {...register('notes')} />

      <label htmlFor="date">do you already have a date in mind?</label>
      <input id="date" type="text" name="date" {...register('date')} />

      <label htmlFor="location">where is the activity taking place?</label>
      <input
        id="location"
        type="text"
        name="location"
        {...register('location')}
      />

      <PositionButton type="submit">Add</PositionButton>
    </WrapperForm>
  );
}

const WrapperForm = styled.form`
  height: 85vh;
  display: grid;
  grid-template-rows: repeat(10, 25px) auto;
  align-items: end;
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
`;
const PositionButton = styled(Button)`
  align-self: end;
`;
