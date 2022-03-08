import styled from 'styled-components';
import Button from './Button';

export default function Form({ addTodo }) {
  // Click event auf button, dass Inhalt an List gesendet wird

  return (
    <Wrapper aria-labelledby="formWrapper" autoComplete="off">
      <label htmlFor="name of activity">name of activity:</label>
      <input
        id="name of activity"
        required
        type="text"
        name="name of activity"
      />
      <label htmlFor="name of friend">who should join you?</label>
      <input id="name of friend" type="text" name="name of friend" />
      <Button />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: grid;
  gap: 10px;
  color: rgba(71, 39, 35, 0.72);

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
  }
`;
