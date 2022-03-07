import styled from 'styled-components';

export default function Button() {
  return <FormButton>Add</FormButton>;
}

const FormButton = styled.button`
  background: #92dec5;
  color: rgba(71, 39, 35, 0.72);
  border: none;
  border-radius: 15px;
  padding: 10px;
`;
