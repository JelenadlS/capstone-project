import styled from 'styled-components';
import Button from './Button';

export default function Form({ addActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { activity, friend } = form.elements;
    addActivity({ activity: activity.value, friend: friend.value });
    activity.value = '';
    friend.value = '';
  }

  return (
    <WrapperForm
      aria-labelledby="formWrapper"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <label htmlFor="activity">name of activity:</label>
      <input id="activity" required type="text" name="activity" />
      <label htmlFor="friend">who should join you?</label>
      <input id="friend" type="text" name="friend" />
      <Button type="submit">Add</Button>
    </WrapperForm>
  );
}

const WrapperForm = styled.form`
  display: grid;
  gap: 10px;
  color: rgba(71, 39, 35, 0.72);
  align-self: flex-end;

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
